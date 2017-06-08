
export class PrometheusInstantQuery {
  public query: string
  public time: string
  public timeout: string

  constructor(query : string) {
    this.query = query
  }

  getUrlExpression() : string {
    let ret = "/query="+this.query
    if (this.time) {
      ret+="&time="+this.time
    }
    if (this.timeout) {
      ret+="&timeout="+this.timeout
    }
    return ret
  }
}
