import { Injectable } from '@angular/core';
import { GraphColor } from '../models/graph-color.model'
import { Graph } from '../../models/graph.model'
import * as d3 from 'd3';

class ObjectColors {
  private index: number
  private refColor: string[]
  private object: string
  private colorList: GraphColor[]
  private nameMap: {}
  private graphMap: {}
  private colorMap : { [name:string]: GraphColor; } = {}

  constructor(object: string, refColor: string[]) {
    this.index = 0
    this.refColor =refColor
    this.object = object
    this.colorList = []
    this.colorMap = {}
    this.graphMap = {}
    this.nameMap = {}
  }

  getColor(name: string, graphId: string) : string {
    this.graphMap[name+'-'+graphId] = true
    let col = this.colorMap[name]
    if (col) {
      let exist = this.nameMap[name]
      if (!exist) {
        this.nameMap[name] = "."
        this.colorList.push(col)
      }
      return col.color;
    }
    if (this.index >= this.refColor.length) {
      this.index = 10
    }
    col = new GraphColor(name, graphId, this.refColor[this.index])
    console.log(name +": "+col.name+"-"+col.color+" index="+this.index)
    this.index++
    this.colorMap[name] = col
    this.nameMap[name] = "."
    this.colorList.push(col)
    return col.color
  }

  getColorList(graphId : string) {
    let list : GraphColor[] = []
    for (let col of this.colorList) {
      if (!graphId || this.graphMap[col.name+'-'+graphId]) {
        list.push(col)
      }
    }
    return list
  }

  refresh() {
    this.colorList = []
    this.nameMap = {}
    this.graphMap = {}
  }
}

export class ColorsService {
  private defaultColor = 'magenta'
  private refColors : string[] = [] //['#396AB1', '#DA7C30', '#3E9651', '#CC2529', '#535154', '#6B4C9A', '#922428', '#948B3D']
  private objectColorsMap : { [name:string]: ObjectColors; } = {}

  constructor() {
    let baseColList : number[] =[0x396AB1, 0xDA7C30, 0x3E9651, 0xCC2529, 0x535154, 0x6B4C9A, 0x922428, 0x948B3D]
    this.refColors = this.getNewColors(baseColList, 100, 100)
    this.objectColorsMap['stack'] = new ObjectColors('stack', this.refColors)
    this.objectColorsMap['service'] = new ObjectColors('service', this.refColors)
    this.objectColorsMap['container'] = new ObjectColors('container', this.refColors)
    this.objectColorsMap['node'] = new ObjectColors('node', this.refColors)
  }

  hex2rgb(h) {
    return [(h & (255 << 16)) >> 16, (h & (255 << 8)) >> 8, h & 255];
  }

  distanceColors(a, b) {
      var d = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
      return Math.sqrt((d[0]*d[0]) + (d[1]*d[1]) + (d[2]*d[2]));
  }

  newColor(list, d) {
    let n = 0
    let ok : boolean
    let nl=0
    while(true) {
      nl++
      ok = true;
      n = Math.random()*0xFFFFFF<<0;
      for(var c in list) {
        if(this.distanceColors(this.hex2rgb(list[c]), this.hex2rgb(n)) < d) {
          ok = false;
          break;
        }
      }
      if (ok) {
        return n;
      } else if (nl>100) {
        return  Math.random()*0xFFFFFF<<0;
      }
    }
  }

  getNewColors(list, n, d) {
      var a : number[] = list
      for(; n > 0; n--) {
          a.push(this.newColor(a, d));
      }
      let ret : string[] = []
      for (let col of a) {
        if (col!=0) {
          ret.push("#"+col.toString(16))
        }
      }
      return ret
  }

  public getColor(graph : Graph, name: string) {
    let objectColors = this.objectColorsMap[graph.object];
    if (!objectColors) {
      return this.defaultColor;
    }
    return objectColors.getColor(name, graph.id)
  }

  public getColors(object: string, graphId: string): GraphColor[] {
    let objectColors = this.objectColorsMap[object];
    if (!objectColors) {
      return [];
    }
    return objectColors.getColorList(graphId)
  }

  public refresh() {
    for (let key in this.objectColorsMap) {
      let objectColors = this.objectColorsMap[key]
      objectColors.refresh()
    }
  }



}
