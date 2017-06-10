import { PrometheusMetric } from './prometheus-metric.model'

export class PrometheusSource {
  public name: string
  public url: string
  public port: number
  public metricNames : string[]
  public metricMap : { [name:string]: PrometheusMetric; }

  constructor(name : string, url : string, port : number) {
    this.name = name
    this.port = port
    this.url = url
    this.metricNames = []
    this.metricMap = {}
  }

  public addMetric(name : string, type : string, param : string) {
    if (!this.metricMap[name]) {
      let metric = new PrometheusMetric(name, type, param)
      this.metricMap[name] =  metric
      this.metricNames.push(metric.name)
    }
  }

  public getMetric(name : string) : PrometheusMetric {
    return this.metricMap[name]
  }



}
