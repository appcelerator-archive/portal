

export class Dashboard {
  public id : string
  public name : string
  public ownerName : string
  public ownerOrganization : string
  public data : string
  public date : string

  constructor(id: string, name: string, data: string) {
    this.id = id
    this.name = name
    this.data = data
  }

  set(ownerName : string, ownerOrganization : string, sdate : string) {
    this.ownerName = ownerName
    this.ownerOrganization = ownerOrganization
    this.date = sdate
  }

}
