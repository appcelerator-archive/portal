
import { Component, HostListener, OnInit, OnDestroy, Input, ElementRef, ViewChild} from '@angular/core';
import { Graph } from '../../models/graph.model';
import { DashboardService } from '../services/dashboard.service'
import { MenuService } from '../../services/menu.service'
import * as d3 from 'd3';
import { GraphText } from '../services/graph-text.service'
import { GraphPie } from '../services/graph-pie.service'
import { GraphLines } from '../services/graph-lines.service'
import { GraphBars} from '../services/graph-bars.service'
import { GraphAreas } from '../services/graph-areas.service'
import { GraphBubbles } from '../services/graph-bubbles.service'
import { GraphCounterSquare } from '../services/graph-counter-square.service'
import { GraphCounterCircle } from '../services/graph-counter-circle.service'
import { GraphLegend } from '../services/graph-legend.service'
import { GraphInnerStats } from '../services/graph-inner-stats.service'

@Component({
  selector: 'app-dgraph',
  templateUrl: "./dgraph.component.html",
  styleUrls: ['./dgraph.component.css'],
  providers: [ GraphText, GraphPie, GraphLines, GraphBars, GraphAreas, GraphBubbles, GraphCounterSquare, GraphCounterCircle, GraphLegend, GraphInnerStats ]


})
export class DGraphComponent implements OnInit, OnDestroy {
  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() public graph : Graph;
  //Resizer variable
  px: number = 0;
  py: number = 0;
  minWidth: number = 20;
  minHeight: number = 20;
  draggingCorner: boolean = false;
  draggingWindow: boolean = false;
  resizer: Function;
  private serviceMap = {}
  private svg : any
  private legendMode={}
  private isDelayUpdate = false

  constructor(
    public dashboardService : DashboardService,
    private menuService : MenuService,
    private graphPie : GraphPie,
    private graphLines : GraphLines,
    private graphBars : GraphBars,
    private graphAreas : GraphAreas,
    private graphBubbles : GraphBubbles,
    private graphText : GraphText,
    private graphCounterSquare : GraphCounterSquare,
    private graphCounterCircle : GraphCounterCircle,
    private graphLegend : GraphLegend,
    private graphInnerStats : GraphInnerStats) {
    this.serviceMap['text'] = graphText;
    this.serviceMap['pie'] = graphPie;
    this.serviceMap['lines'] = graphLines;
    this.serviceMap['bars'] = graphBars;
    this.serviceMap['areas'] = graphAreas;
    this.serviceMap['bubbles'] = graphBubbles;
    this.serviceMap['counterSquare'] = graphCounterSquare;
    this.serviceMap['counterCircle'] = graphCounterCircle;
    this.serviceMap['legend'] = graphLegend;
    this.serviceMap['innerStats'] = graphInnerStats
    //possible graphs link to legend
    this.legendMode['pie'] = true;
    this.legendMode['lines'] = true;
    this.legendMode['bars'] = true;
    this.legendMode['areas'] = true;
    this.legendMode['bubbles'] = true;
  }

  ngOnInit() {
    //this.serviceMap[this.graph.type].init(this.graph, this.chartContainer)
    this.serviceMap[this.graph.type].createGraph(this.graph, this.chartContainer);
    this.dashboardService.onNewData.subscribe(
      () => {
        if (this.graph.type!="legend") {
          this.updateGraph();
        } else {
          this.setDelayUpdate(1000)
        }
      }
    )
    this.menuService.onWindowResize.subscribe(
      (win) => {
        //this.resizeGraph()
      }
    );
  }

  ngOnDestroy() {
    this.serviceMap[this.graph.type].destroy()
    //this.metricsService.onNewData.unsubscribe()
  }

  setDelayUpdate(delay : number) {
    if (!this.isDelayUpdate) {
      this.isDelayUpdate=true
      setTimeout(() =>{
          this.updateGraph()
          this.isDelayUpdate = false
      }, delay)
    }
  }

  resizeGraph() {
    this.serviceMap[this.graph.type].resizeGraph(this.graph)
  }

  updateGraph() {
    this.serviceMap[this.graph.type].updateGraph(this.graph)
  }

//----------------------------------------------------------------------------
// Edition mode
//----------------------------------------------------------------------------

  onWindowPress(event: MouseEvent) {
    this.draggingWindow = true;
    let pos = this.adjustToGrid(event)
    this.px = pos.x
    this.py = pos.y
    if (this.graph.id != 'graph00') {
      this.executeClickMode()
    }
    //event.stopPropagation();
    return false
  }

  onWindowDrag(event: MouseEvent) {
    if (!this.draggingWindow) {
      return;
    }
    let pos = this.adjustToGrid(event)
    let offsetX = pos.x - this.px;
    let offsetY = pos.y - this.py;
    this.graph.x += offsetX;
    this.graph.y += offsetY;
    this.graph.x = Math.floor(this.graph.x/10)*10
    this.graph.y = Math.floor(this.graph.y/10)*10
    this.px = pos.x;
    this.py = pos.y;
    event.stopPropagation();
  }

  topLeftResize(offsetX: number, offsetY: number) {
    this.graph.x += offsetX;
    this.graph.y += offsetY;
    this.graph.width -= offsetX;
    this.graph.height -= offsetY;
    this.adjustSizeOnGrid()
    this.resizeGraph()
  }

  topRightResize(offsetX: number, offsetY: number) {
    this.graph.y += offsetY;
    this.graph.width += offsetX;
    this.graph.height -= offsetY;
    this.adjustSizeOnGrid()
    this.resizeGraph()
  }

  bottomLeftResize(offsetX: number, offsetY: number) {
    this.graph.x += offsetX;
    this.graph.width -= offsetX;
    this.graph.height += offsetY;
    this.adjustSizeOnGrid()
    this.resizeGraph()
  }

  bottomRightResize(offsetX: number, offsetY: number) {
    this.graph.width += offsetX;
    this.graph.height += offsetY;
    this.adjustSizeOnGrid()
    this.resizeGraph()
  }

  onCornerClick(event: MouseEvent, resizer?: Function) {
    this.draggingCorner = true;
    this.dashboardService.selected = this.graph
    let pos = this.adjustToGrid(event)
    this.px = pos.x;
    this.py = pos.y;
    this.resizer = resizer;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
    onCornerMove(event: MouseEvent) {
      if (!this.draggingCorner) {
        return;
      }
      let pos = this.adjustToGrid(event)
      let offsetX = pos.x - this.px;
      let offsetY = pos.y - this.py;

      let lastX = this.graph.x;
      let lastY = this.graph.y;
      let pWidth = this.graph.width;
      let pHeight = this.graph.height;

      this.resizer(offsetX, offsetY);
      if (this.graph.width < this.minWidth || this.graph.height < this.minHeight) {
        this.graph.x = lastX;
        this.graph.y = lastY;
        this.graph.width = pWidth;
        this.graph.height = pHeight;
        this.resizeGraph()
      }
      this.px = pos.x;
      this.py = pos.y;
    }

  @HostListener('document:mouseup', ['$event'])
    onCornerRelease(event: MouseEvent) {
      this.draggingWindow = false;
      this.draggingCorner = false;
      //event.stopPropagation();
      return false
    }

  executeClickMode() {
    if (this.dashboardService.clickMode == this.dashboardService.ModeLinkLegendToGraph) {
      if (this.dashboardService.selected.type == 'legend' && this.graph.object!='all' && this.legendMode[this.graph.type]) {
        this.dashboardService.selected.legendGraphId = this.graph.id
        this.dashboardService.selected.object = this.graph.object
        this.dashboardService.selected.title = "Legend "+this.graph.object+'s'
      }
      this.dashboardService.clickMode = this.dashboardService.ModeSetting
      this.dashboardService.redisplay()
      return
    }
    this.dashboardService.selected = this.graph
  }

  adjustToGrid(event : MouseEvent) : {x: number, y: number } {
    return {
      x: Math.floor(event.clientX/10)*10,
      y: Math.floor(event.clientY/10)*10
    }
  }

  adjustSizeOnGrid() {
    this.graph.width = Math.floor(this.graph.width/10)*10
    this.graph.height = Math.floor(this.graph.height/10)*10
  }
}
