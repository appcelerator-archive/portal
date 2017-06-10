import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'RxJS/Rx';
import { PrometheusSources } from '../models/prometheus-sources.model'
import { PrometheusSource } from '../models/prometheus-source.model'
import { PrometheusMetric } from '../models/prometheus-metric.model'
import { HttpService } from '../../services/http.service'


const httpRetryDelay = 200
const httpRetryNumber = 3

@Injectable()
export class PrometheusService {
  private metricsSources : PrometheusSources = new PrometheusSources()
  public sourceNames : string[] = []


  constructor(private httpService : HttpService) {
    //this.metricsSources.addSource(new PrometheusSource("prometheus","/prometheus/prometheus", 9090))
    this.metricsSources.addSource(new PrometheusSource("node", "/prometheus/node_exporter", 9100))
    this.metricsSources.addSource(new PrometheusSource("etcd", "/prometheus/etcd", 2379))
    this.metricsSources.addSource(new PrometheusSource("haproxy", "/prometheus/haproxy_exporter", 9101))
    this.metricsSources.addSource(new PrometheusSource("nats", "/prometheus/nats_exporter", 7777))
    this.initSources()
  }

  initSources() {
    let sources = this.metricsSources.getSourceList()
    for (let source of sources) {
      this.sourceNames.push(source.name)
      this.httpService.httpGetServer(source.url+"/metrics").subscribe(
        (rep) => {
          let data = rep.text().split('\n')
          let currentType = ""
          for (let line of data) {
            if (line.startsWith('#')) {
              let info = line.split(' ')
              if (info.length>=4) {
                currentType = info[3]
              }
            }
            let param=""
            let items = line.split(' ')[0].split('{')
            if (items.length>1) {
              param = items[1].split('}')[0]
            }
            source.addMetric(items[0], currentType, param)
          }
          console.log("name: "+source.name)
          console.log(source)
        },
        (err) => {
          console.log("error on name: "+source.name)
          console.log(err)
        }
      )
    }
  }

  private setHeaders() : any {
    var headers = new Headers
    //Nothing to do for the moment
    return headers
  }

  queryInstant(metric : PrometheusMetric, time : string, timeout : string) : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/api/v1/query?"+metric.getInstantQuery(time, timeout))
  }

  queryRange(metric : PrometheusMetric, start : string, end : string, step : string, timeout : string)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/api/v1/query_range?"+metric.getRangeQuery(start, end, step, timeout))
  }

  querySeries(metric : PrometheusMetric, match: string[], start : string, end : string)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/api/v1/series?"+metric.getSeriesQuery(match, start, end))
  }

  queryLabels(labelName : string)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/api/v1/label/"+labelName+"?values")
      .map((res : Response) => {
        let data = res.json()
        return data.data
      }
    )
  }

  getMetricNames(name : string) : string[] {
    let source = this.metricsSources.getSource(name)
    if (!source) {
      return []
    }
    return source.metricNames
  }

  getSource(name : string) : PrometheusSource {
    return this.metricsSources.getSource(name)
  }

  getMetric(object : string, name : string) : PrometheusMetric {
    let source = this.metricsSources.getSource(object)
    if (!source) {
      return undefined
    }
    return source.getMetric(name)
  }

}
