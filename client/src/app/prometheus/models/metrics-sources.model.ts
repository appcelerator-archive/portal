import { MetricsSource } from './metrics-source.model'

export class MetricsSources {
  public sourcesMap : { [name:string]: MetricsSource; } = {}
  public listName : string []

  constructor() {
    this.sourcesMap = {}
    this.listName = []
  }

  addSource(source : MetricsSource) {
    if (!this.sourcesMap[source.name]) {
      this.listName.push(source.name)
    }
    this.sourcesMap[source.name] = source
  }

  getSourceUrl(name : string) : string {
    if (this.sourcesMap[name]) {
      return this.sourcesMap[name].url
    }
    return undefined
  }

  getSourceNameList() : string[] {
    return this.listName.splice(0)
  }

}
