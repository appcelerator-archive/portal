import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'RxJS/Rx';
import { PrometheusInstantQuery } from '../models/prometheus-instant-query.model'
import { PrometheusRangeQuery } from '../models/prometheus-range-query.model'
import { PrometheusSeriesQuery } from '../models/prometheus-series-query.model'
import { MetricsSources } from '../models/metrics-sources.model'
import { MetricsSource } from '../models/metrics-source.model'
import { HttpService } from '../../services/http.service'


const httpRetryDelay = 200
const httpRetryNumber = 3

@Injectable()
export class PrometheusService {
  private metricsSources : MetricsSources = new MetricsSources()
  public sourceNames : string[] = []


  constructor(private httpService : HttpService) {
    this.metricsSources.addSource(new MetricsSource("prometheus","/prometheus/prometheus", 9090))
    this.metricsSources.addSource(new MetricsSource("node", "/prometheus/node_exporter", 9100))
    this.metricsSources.addSource(new MetricsSource("etcd", "/prometheus/etcd", 2379))
    this.metricsSources.addSource(new MetricsSource("haproxy", "/prometheus/haproxy_exporter", 9101))
    this.metricsSources.addSource(new MetricsSource("nats", "/prometheus/nats", 7777))
    this.sourceNames = this.metricsSources.getSourceNameList()
    for (let name of this.sourceNames) {
      this.httpService.httpGetServer("/"+name+"/metrics").subscribe(
        (data) => {
          //console.log("name: "+name)
          //console.log(data)
        },
        (err) => {
          //console.log("error")
          //console.log(err)
        }
      )
    }
  }

  private setHeaders() : any {
    var headers = new Headers
    //Nothing to do for the moment
    return headers
  }

  queryInstant(query : PrometheusInstantQuery) : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/query?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  queryRange(query : PrometheusRangeQuery)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/query_range?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  querySeries(query : PrometheusSeriesQuery)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/series?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  queryLabels(labelName : string)  : Observable<any> {
    return this.httpService.httpGetServer("/prometheus/prometheus/label/"+labelName+"?values")
      .map((res : Response) => {
        let data = res.json()
        return data.data
      }
    )
  }

  getMetricsSourceNames() : string[] {
    return this.metricsSources.getSourceNameList()
  }

}
