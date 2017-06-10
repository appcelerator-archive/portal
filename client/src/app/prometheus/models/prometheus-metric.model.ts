
export class PrometheusMetric {
  public name: string
  public type: string
  public parameters: string[]

  constructor(name : string, type : string, param  : string) {
    this.name = name
    this.type = type
    this.parameters = this.computeParameter(param)
    console.log("name="+this.name+" type="+this.type+" params="+this.parameters)
  }

  computeParameter(param : string) : string[] {
    let ret : string[] = []
    let list = param.split(',')
    for (let item of list) {
      ret.push(item.split('=')[0])
    }
    return ret
  }

  getRangeQuery(start : string, end : string, step : string, timeout : string) : string {
    let ret = "query="+this.name
    if (start) {
      ret+="&start="+start
    }
    if (end) {
      ret+="&end="+end
    }
    if (step) {
      ret+="&step="+step
    }
    if (timeout) {
      ret+="&timeout="+timeout
    }
    return ret
  }


  getInstantQuery(time : string, timeout : string) : string {
    let ret = "query="+this.name
    if (time) {
      ret+="&time="+time
    }
    if (timeout) {
      ret+="&timeout="+timeout
    }
    return ret
  }

  getSeriesQuery(match: string[], start : string, end : string) : string {
    if (match.length == 0) {
      return ""
    }
    let ret = "match[]="+match[0]
    for (let ii=1; ii<match.length;ii++) {
      ret += "&match[]="+match[ii]
    }
    if (start) {
      ret+="&start="+start
    }
    if (end) {
      ret+="&end="+end
    }
    return ret
  }

}
