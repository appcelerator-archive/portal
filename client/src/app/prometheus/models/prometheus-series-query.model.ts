
export class PrometheusSeriesQuery {
  public match: string[]
  public start: string
  public end: string

  constructor(match : string[]) {
    this.match =match
  }

  getUrlExpression() : string {
    if (this.match.length == 0) {
      return ""
    }
    let ret = "match[]="+this.match[0]
    for (let ii=1; ii<this.match.length;ii++) {
      ret += "&match[]="+this.match[ii]
    }
    if (this.start) {
      ret+="&start="+this.start
    }
    if (this.end) {
      ret+="&end="+this.end
    }
    return ret
  }
}
