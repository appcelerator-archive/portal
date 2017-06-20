import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MenuService } from '../../services/menu.service';
import { UsersService } from '../../services/users.service';
import { Subject } from 'rxjs/Subject'
import { Graph } from '../../models/graph.model';
import { DashboardInnerStats } from '../models/dashboard-inner-stats.model';
import { StatsRequest } from '../../models/stats-request.model';
import { StatsRequestItem } from '../models/stats-request-item.model';
import { GraphCurrentData } from '../../models/graph-current-data.model'
import { GraphHistoricData } from '../../models/graph-historic-data.model'
import { GraphHistoricAnswer } from '../../models/graph-historic-answer.model'
import { ColorsService } from '../../services/colors.service'
import { DashboardDefault } from '../models/dashboard-default.model'
import * as d3 from 'd3';


@Injectable()
export class DashboardService {
    graphs : Graph[] = []
    editor = false
    nullPeriod : GraphHistoricData[] = []
    onNewData = new Subject<string>();
    onGraphSelect = new Subject<Graph>()
    yTitleMap = {}
    unit = {}
    x0 = 280
    y0 = 5
    w0 = 300
    h0 = 150
    refresh : number = 30
    period : string = 'now-2m'
    requestMap = {}
    nbGraph = 1
    public innerStats : DashboardInnerStats = new DashboardInnerStats()
    public showEditor = false;
    public showAlert = false;
    public nodeColorIndex = 0
    public editorGraph : Graph = new Graph('graph1', this.x0, this.y0, this.w0, this.h0, 'editor','')
    public notSelected : Graph = new Graph('', 0, 0, 0, 0, "", "")
    public selected : Graph = this.notSelected
    public isVisible = false
    public ModeSetting = "setting"
    public ModeLinkLegendToGraph = "linkLegendToGraph"
    public clickMode = this.ModeSetting


  constructor(
    private httpService : HttpService,
    private menuService : MenuService,
    private usersService : UsersService,
    private colorsService: ColorsService) {
      this.notSelected.title = ""
      this.notSelected.object="stack"
      this.notSelected.field="cpu-usage"
      this.notSelected.topNumber=3
      this.notSelected.border=true
      this.yTitleMap['cpu-usage'] = 'cpu usage'
      this.yTitleMap['mem-limit'] = 'memory limit'
      this.yTitleMap['mem-maxusage'] = 'memory max usage'
      this.yTitleMap['mem-usage'] = 'memory usage'
      this.yTitleMap['mem-usage-p'] = 'memory usage'
      this.yTitleMap['net-total-bytes'] = 'network traffic'
      this.yTitleMap['net-rx-bytes'] = 'network rx traffic'
      this.yTitleMap['net-rx-packets'] = 'network rx traffic'
      this.yTitleMap['net-tx-bytes'] = 'network tx traffic'
      this.yTitleMap['net-tx-packets'] = 'network tx traffic'
      this.yTitleMap['io-total'] = 'io r/w'
      this.yTitleMap['io-write'] = 'io write'
      this.yTitleMap['io-read'] = 'io read'
      //
      this.unit['cpu-usage'] = '%'
      this.unit['mem-limit'] = 'bytes'
      this.unit['mem-maxusage'] = 'bytes'
      this.unit['mem-usage'] = 'bytes'
      this.unit['mem-usage-p'] = '%'
      this.unit['net-total-bytes'] = 'bytes/s'
      this.unit['net-rx-bytes'] = 'bytes/s'
      this.unit['net-rx-packets'] = 'packets/s'
      this.unit['net-tx-bytes'] = 'bytes/s'
      this.unit['net-tx-packets'] = 'packets/s'
      this.unit['io-total'] = 'bytes/s'
      this.unit['io-write'] = 'bytes/s'
      this.unit['io-read'] = 'bytes/s'
      this.cancelRequests()
      this.menuService.setCurrentTimer(setInterval(() => {
          this.redisplay()
        }, this.refresh * 1000)
      )
      let histo0 = new GraphHistoricData(new Date())
      histo0.graphValues=[0]
      let yest = new Date()
      yest.setDate(yest.getDate() - 1);
      let histo1 = new GraphHistoricData(yest)
      histo0.graphValues=[0]
      histo1.graphValues=[0]
      this.nullPeriod.push(histo0)
      this.nullPeriod.push(histo1)
      this.menuService.onRefreshClicked.subscribe(
        () => {
          if (this.isVisible) {
            this.redisplay()
          }
        }
      )
    }

  cancelRequests() {
    this.menuService.clearCurrentTimer()
  }

  addGraph(type : string, offTop : number, offLeft : number) {
    this.nbGraph++;
    let graph = new Graph('graph'+this.nbGraph, this.x0-offLeft, this.y0-offTop, this.w0, this.h0, type, '')
    this.x0 += 2
    this.y0 += 2
    if (graph.type == "pie") {
      graph.width = graph.height
    }
    graph.title = this.notSelected.title
    graph.object = this.notSelected.object
    graph.field = this.notSelected.field
    if (graph.type == 'counterSquare' || graph.type == 'counterCircle') {
      graph.field = 'number'
      if (graph.type == 'counterSquare') {
        graph.counterHorizontal = true
        graph.height /= 2;
      }
    }
    if (graph.type == 'lines' || graph.type == 'areas') {
      graph.histoPeriod = 'now-10m'
      graph.histoStep = '30s'
    }
    if (graph.type == 'bubbles') {
      graph.bubbleXField = 'mem-usage'
      graph.bubbleYField = 'cpu-usage'
      graph.field = 'net-total-bytes'
      graph.bubbleScale = 'medium'
      graph.topNumber = 0
    }
    if (graph.type == 'areas') {
      graph.stackedAreas = true
    }
    this.graphs.push(graph)
    this.addRequest(graph)
    //this.onNewData.next()
    this.selected = graph
  }

  copySelected() {
    //
  }

  addLegend(object : string, offTop : number, offLeft : number) {
    this.x0 += 2
    this.y0 += 2
    this.nbGraph++;
    let graph = new Graph('graph'+this.nbGraph, this.x0-offLeft, this.y0-offTop, this.w0*2/3, this.h0, "legend", "Legend "+object+"s")
    graph.object=object
    this.graphs.push(graph)
    this.selected = graph
  }

  addInnerStats() {
    this.x0 += 2
    this.y0 += 2
    this.nbGraph++;
    let graph = new Graph('graph'+this.nbGraph, this.x0, this.y0, this.w0*2/3, this.h0, "innerStats", "Inner stats")
    this.graphs.push(graph)
  }

  removeSelectedGraph() {
    let list = []
    for (let graph of this.graphs) {
      if (graph.id != this.selected.id) {
        list.push(graph)
      }
    }
    this.graphs = list
    delete this.requestMap[this.selected.requestId];
    this.selected = this.notSelected
  }

  toggleEditor(offsetTop : number, offsetLeft : number) {
    if (this.showEditor) {
      this.showEditor = false
      this.selected = this.notSelected
    } else {
      this.showEditor = true
      this.editorGraph.x = -offsetLeft
      this.editorGraph.y = -offsetTop
    }
  }

  getTopLabel() : string {
    if (this.selected.topNumber == 0) {
      return 'all'
    }
    return 'top'+this.selected.topNumber
  }

  getObjectColor(graph : Graph, name : string) : string {
    return this.colorsService.getColor(graph.object, name, graph.id)
  }

  computeUnit(field : string, val : number, refUnit: string) : {val: number, sval: string, unit: string} {
    if (this.unit[field] == '%') {
      return { val: val, sval: val.toFixed(1)+' %', unit: '%'}
    }
    if (this.unit[field]!='bytes' && this.unit[field]!='bytes/s') {
      return { val: val, sval: val.toFixed(0)+" "+this.unit[field], unit: this.unit[field]}
    }
    if (refUnit) {
      //force to compute in the refUnit unit
      return {val: val, sval: (val/this.unitdivider(refUnit)).toFixed(1)+" "+refUnit, unit: refUnit }
    }
    let past=''
    if (this.unit[field]=='bytes/s') {
      past = '/s'
    }
  	if (val < 1024) {
  		return {val: val, sval: val.toFixed(0)+' Bytes'+past, unit: 'Bytes'+past}
  	} else if (val < 1048576) {
  		return {val: (val/1024), sval: (val/1024).toFixed(1)+' KB'+past, unit: 'KB'+past}
  	} else if (val < 1073741824) {
  		return {val: (val/1048576), sval: (val/1048576).toFixed(1)+ ' MB'+past, unit: 'MB'+past}
  	}
  	return {val: (val/1073741824), sval: (val/1073741824).toFixed(1)+' GB'+past, unit: 'GB'+past}
  }

  adjustCurrentDataToUnit(unit : string, field : string, data : GraphCurrentData[]) : GraphCurrentData[] {
    let div = this.unitdivider(unit)
    for (let gdata of data) {
      gdata.valueUnit = gdata.values[field]/div
    }
    return data
  }

  adjustCurrentXYDataToUnit(unitx : string, unity : string, fieldx : string, fieldy : string, data : GraphCurrentData[]) : GraphCurrentData[] {
    let divx = this.unitdivider(unitx)
    let divy = this.unitdivider(unity)
    for (let gdata of data) {
      gdata.valueUnitx = gdata.values[fieldx]/divx
      gdata.valueUnity = gdata.values[fieldy]/divy
    }
    return data
  }

  adjustHistoricDataToUnit(unit : string, field : string, data : GraphHistoricData[]) : GraphHistoricData[] {
    let div = this.unitdivider(unit)
    for (let hdata of data) {
      for (let ii=0; ii< hdata.graphValues.length; ii++) {
        hdata.graphValuesUnit[ii] = hdata.graphValues[ii] / div
      }
    }
    return data
  }

  unitdivider(unit : string) : number {
    if (unit == 'KB' || unit == 'KB/s') {
      return 1024
    } else if (unit == 'MB' || unit == 'MB/s') {
      return 1048576
    } else if (unit == 'GB' || unit == 'GB/s') {
      return 1073741824
    }
    return 1;
  }

  computeUnitFormat(graph : Graph, val : number, unit : string): string {
    if (this.unit[graph.field] != "bytes" && this.unit[graph.field] != "bytes/s") {
      return val +" "+unit
    }
    let div = this.unitdivider(unit)
    return val/div+" "+unit
  }

  setRefreshPeriod(refresh : number) {
    this.refresh = refresh;
    this.cancelRequests()
    this.menuService.setCurrentTimer(setInterval(() => {
      this.redisplay()
    },this.refresh * 1000))
  }

  redisplay() {
    this.colorsService.refresh()
    this.executeRequests()
  }

  setPeriod(period : string) {
    this.period = period;
    for (let id in this.requestMap) {
      let req = this.requestMap[id]
      if (req) {
        req.period = period
      }
    }
    this.menuService.onRefreshClicked.next()
    for (let graph of this.graphs) {
      this.addRequest(graph)
    }
  }

  setObject(name : string) {
    this.selected.object = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setField(name : string) {
    this.selected.field = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setTop(top : number) {
      this.selected.topNumber = top
      this.redisplay()
  }

  setTitle(title : string) {
    this.selected.title = title
    this.onNewData.next()
  }

  setTitleCenter(val : boolean) {
    this.selected.centerTitle = val
    this.onNewData.next()
  }

  setRoundedBox(val : boolean) {
    this.selected.roundedBox = val
    this.onNewData.next()
  }

  setAlert(val : boolean) {
    this.selected.alert = val;
    this.onNewData.next()
  }
  setMinAlert(val : string) {
    this.selected.alertMin = val;
    this.onNewData.next()
  }

  setMaxAlert(val : string) {
    this.selected.alertMax = val;
    this.onNewData.next()
  }

  setBorder(border : boolean) {
    this.selected.border = border
    this.onNewData.next()
  }

  setCriterion(name: string) {
    this.selected.criterion = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setCriterionValue(val : string) {
    this.selected.criterionValue = val
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setContainerAvg(val : boolean) {
    this.selected.containerAvg = val
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setHistoPeriod(period : string, step : string) {
    this.selected.histoPeriod = period
    this.selected.histoStep = step
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setCounterHorizontal(val : boolean) {
    this.selected.counterHorizontal = val
    this.onNewData.next()
  }

  setBubbleXField(name : string) {
    this.selected.bubbleXField = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setBubbleYField(name : string) {
    this.selected.bubbleYField = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setBubbleScale(name : string) {
    this.selected.bubbleScale = name
    this.addRequest(this.selected)
    this.onNewData.next()
  }

  setStackedAreas(val : boolean) {
    this.selected.stackedAreas = val
    if (val) {
      this.selected.percentAreas = false
    }
    this.onNewData.next()
  }

  setPercentAreas(val : boolean) {
    this.selected.percentAreas = val
    if (val) {
      this.selected.stackedAreas = false
    }
    this.onNewData.next()
  }

  setTransparentLegend(val : boolean) {
    this.selected.transparentLegend = val
    this.onNewData.next()
  }

  setRemoveLocalLegend(val : boolean) {
    this.selected.removeLocalLegend = val
    this.onNewData.next()
  }

  linkLegendToGraph() {
    this.clickMode = this.ModeLinkLegendToGraph
  }

  unlinkLegend() {
    this.selected.legendGraphId = undefined
    this.clickMode = this.ModeSetting
    this.onNewData.next()
  }


  getTextWidth(text, fontSize, fontFace) : number {
    var a = document.createElement('canvas');
    var b = a.getContext('2d');
    b.font = fontSize + 'px ' + fontFace;
    return b.measureText(text).width;
  }

  executeRequests() {
    console.log("nbRequest: "+Object.keys(this.requestMap).length)
    this.innerStats.initNewRefresh()
    for (let id in this.requestMap) {
      this.executeRequest(this.requestMap[id])
    }
  }

  executeRequest(req : StatsRequestItem) {
    if (!req) {
      return
    }
    //console.log(req.id)
    //console.log(req.request)
    let t0 = new Date().getTime()
    if (!req.request.time_group) {
      this.httpService.statsCurrent(req.request).subscribe(
        (data) => {
          //console.log("data size: "+data.length)
          this.innerStats.setRequestTime(t0, req.graphTitle)
          req.currentResult = data
          req.historicResult = []
          this.onNewData.next(req.id)
        },
        (err) => {
          this.innerStats.setRequestError()
          console.log("request error")
          console.log(err)
        }
      )
    } else {
      this.httpService.statsHistoric(req.request).subscribe(
        (data) => {
          this.innerStats.setRequestTime(t0, req.graphTitle)
          req.historicResult = data
          req.currentResult = []
          this.onNewData.next(req.id)
        },
        (err) => {
          this.innerStats.setRequestError()
          console.log("request error")
          console.log(err)
        }
      )
    }
  }

  sumRequest(data : GraphCurrentData[]) : GraphCurrentData[] {
    //console.log(data)
    return data
  }

  addRequest(graph : Graph) : string {
    if (graph.type == "legend" || graph.type == "innerStats") {
      return
    }
    if (graph.title == '' || graph.title == 'stacks' || graph.title == 'services' || graph.title == 'containers' || graph.title == 'nodes') {
      graph.title = graph.object
      if (graph.object != 'all') {
        graph.title += 's'
      }
      if (graph.type=='counterSquare' && graph.counterHorizontal) {
        graph.title +=": "
      }
    }
    let req = new StatsRequest()
    if (graph.object == "stack") {
        req.group="stack_name"
    } else if (graph.object == "service") {
      req.group="service_name"
    } else if (graph.object == "container") {
      req.group="container_short_name"
    } else if (graph.object == "node") {
      req.group="node_id"
    } else if (graph.object == 'all') {
      req.group=""
    } else {
      return
    }
    req.avg = graph.containerAvg
    if (!req.avg) {
      req.avg = false
    }

    //if (graph.type == "counter" && graph.field != "number") {
    //  req.group="container_short_name"
    //}

    req.period = this.period
    if (graph.type == 'lines' || graph.type == 'areas') {
      req.period = graph.histoPeriod
      req.time_group = graph.histoStep
    }
    req.stats_cpu = true
    req.stats_mem = true
    req.stats_net = true
    req.stats_io = true
    req.allows_infra = this.usersService.currentUser.sp
    if (graph.criterion == 'stack_name') {
      req.filter_stack_name = graph.criterionValue
    } else if (graph.criterion == 'service_name') {
      req.filter_service_name = graph.criterionValue
    } else if (graph.criterion == 'container_id') {
      req.filter_container_id = graph.criterionValue
    } else if (graph.criterion == 'node_id') {
      req.filter_node_id = graph.criterionValue
    }
    let id = graph.id
    let newItem = new StatsRequestItem(id, req, graph.title)
    newItem.subscriberNumber=1
    this.requestMap[id]=newItem
    graph.requestId = id
    this.executeRequest(newItem)
    return id;
  }

  getCurrentData(graph : Graph) : GraphCurrentData[] {
    let item = this.requestMap[graph.id]
    if (!item) {
      return []
    }
    if (!item.currentResult) {
      return []
    }
    this.sortCurrentByField(graph, item.currentResult)
    if (graph.topNumber == 0 || graph.type == 'counterSquare' || graph.type == 'counterCircle') {
      return item.currentResult
    }
    return item.currentResult.slice(0, graph.topNumber)
  }

  sortCurrentByField(graph : Graph, data : GraphCurrentData[]) {
    data.sort((a, b) => {
      if (graph.type == 'bubbles') {
        if (a.values[graph.bubbleXField]*a.values[graph.bubbleXField]+a.values[graph.bubbleYField]*a.values[graph.bubbleYField] <
          b.values[graph.bubbleXField]*b.values[graph.bubbleXField]+b.values[graph.bubbleYField]*b.values[graph.bubbleYField]) {
          return 1;
        }
        return -1
      } else {
        if (a.values[graph.field] < b.values[graph.field]) {
          return 1;
        }
        return -1
      }
    })
  }

  getHistoricData(graph : Graph) : GraphHistoricAnswer {
    let item = this.requestMap[graph.id]
    if (!item) {
      return new GraphHistoricAnswer([''], this.nullPeriod)
    }
    if (!item.historicResult) {
      return new GraphHistoricAnswer([''], this.nullPeriod)
    }
    //let list = this.sortHistoricByField(item.historicResult, graph.field)
    let dateMap = {}
    let list : GraphHistoricData[] = []
    let names : string[] = []
    let nameMap = {}
    for (let dat of item.historicResult) {
      let pdata = dateMap[dat.sdate]
      if (!pdata) {
        pdata = new GraphHistoricData(dat.date)
        dateMap[dat.sdate] = pdata
        list.push(pdata)
      }
      let max = nameMap[dat.name]
      if (!max) {
        names.push(dat.name)
        nameMap[dat.name]=dat.values[graph.field]
      } else if (dat.values[graph.field] > max) {
        nameMap[dat.name]=dat.values[graph.field]
      }
      pdata.graphValues.push(dat.values[graph.field])
      pdata.graphValuesUnit.push(0) //graphValues and valuesUnit should have the same size
    }
    if (graph.topNumber > 0) {
      this.sortHistoricResult(graph, list, names, graph.topNumber)
      names = names.slice(0, graph.topNumber)
    }
    return new GraphHistoricAnswer(names, list)
  }

  sortHistoricResult(graph : Graph, list : GraphHistoricData[], names : string[], topNumber : number) {
    let size = names.length
    let sumCol = new Array<number>(size);
    for (let i=0;i<size;i++) {
      sumCol[i]=0
    }
    for (let item of list) {
      let i=0
      for (let val of item.graphValues) {
        sumCol[i] = sumCol[i]+val
        i++
      }
    }
    let indexes : number[] = []
    for (let i=0; i<topNumber; i++) {
      let max = sumCol[0]
      let index = 0
      for (let j=1;j<size;j++) {
        if (sumCol[j]>max) {
          max=sumCol[j]
          index=j
        }
      }
      sumCol[index]=0
      indexes.push(index)
    }
    for (let i=0; i<size; i++) {
      names[i] = names[indexes[i]]
    }
    for (let item of list) {
      let data : number[] = []
      for (let index of indexes) {
        data.push(item.graphValues[index])
      }
      item.graphValues=data
    }
  }

  clear() {
    this.requestMap = {}
    this.graphs = []
    this.selected = this.notSelected
    this.nbGraph = 1
  }

  getData() : string {
    return JSON.stringify(this.graphs)
  }

  setData(data : string) {
    this.clear()
    let graphs = JSON.parse(data)
    this.nbGraph = 1
    for (let graph of graphs) {
      this.ascendingCompatibilityAdjustment(graph)
      this.nbGraph++
      graph.id="graph"+this.nbGraph
      this.graphs.push(graph)
      this.addRequest(graph)
    }
    this.menuService.onRefreshClicked.next()
  }

  ascendingCompatibilityAdjustment(graph : Graph) {
    //nothing to do for now
  }

  defaultDefaultDashboard() : string {
    return new DashboardDefault().graphs;
  }

}
