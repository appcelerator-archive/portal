import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'RxJS/Rx';
import { PrometheusInstantQuery } from '../models/prometheus-instant-query.model'
import { PrometheusRangeQuery } from '../models/prometheus-range-query.model'
import { PrometheusSeriesQuery } from '../models/prometheus-series-query.model'


const httpRetryDelay = 200
const httpRetryNumber = 3

@Injectable()
export class PrometheusService {
  prometheusUrl = "prometheus:9090/ap1/v1"


  constructor(private http : Http) { }

  private setHeaders() : any {
    var headers = new Headers
    //Nothing to do for the moment
    return headers
  }

  private prometheusHttpGet(url : string) : Observable<any> {
    //let headers = this.setHeaders()
    return this.http.get(this.prometheusUrl+url, { headers: this.setHeaders() })
      .retryWhen(e => e.scan<number>((errorCount, err) => {
        console.log("retry: "+(errorCount+1))
        if (errorCount >= httpRetryNumber-1) {
            throw err;
        }
        return errorCount + 1;
      }, 0).delay(httpRetryDelay)
    )
  }

  queryInstant(query : PrometheusInstantQuery) : Observable<any> {
    return this.prometheusHttpGet("/query?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  queryRange(query : PrometheusRangeQuery)  : Observable<any> {
    return this.prometheusHttpGet("/query_range?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  querySeries(query : PrometheusSeriesQuery)  : Observable<any> {
    return this.prometheusHttpGet("/series?"+query.getUrlExpression())
      .map((res : Response) => {
        return res.json()
      }
    )
  }

  queryLabels(labelName : string)  : Observable<any> {
    return this.prometheusHttpGet("/label/"+labelName+"?values")
      .map((res : Response) => {
        let data = res.json()
        return data.data
      }
    )
  }

}
