
export class MetricsSource {
  public name: string
  public url: string
  public port: number

  constructor(name : string, url : string, port : number) {
    this.name = name
    this.port = port
    this.url = url
  }

}
