import { PrometheusSource } from './prometheus-source.model'

export class PrometheusSources {
  public sourceMap : { [name:string]: PrometheusSource; } = {}
  public sourceList : PrometheusSource []

  constructor() {
    this.sourceMap = {}
    this.sourceList = []
  }

  addSource(source : PrometheusSource) {
    if (!this.sourceMap[source.name]) {
      this.sourceList.push(source)
    }
    this.sourceMap[source.name] = source
  }

  getSourceList() : PrometheusSource[] {
    return this.sourceList
  }

  getSource(name : string) : PrometheusSource {
    return this.sourceMap[name]
  }

}
