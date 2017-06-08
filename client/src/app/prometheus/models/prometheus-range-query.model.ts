
export class PrometheusRangeQuery {
  public query: string
  public start: string
  public end: string
  public step: string
  public timeout: string

  constructor(query : string) {
    this.query = query
  }

  getUrlExpression() : string {
    let ret = "/query="+this.query
    if (this.start) {
      ret+="&start="+this.start
    }
    if (this.end) {
      ret+="&end="+this.end
    }
    if (this.step) {
      ret+="&step="+this.step
    }
    if (this.timeout) {
      ret+="&timeout="+this.timeout
    }
    return ret
  }
}
