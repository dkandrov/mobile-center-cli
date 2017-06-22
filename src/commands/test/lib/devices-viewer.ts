import { MobileCenterClient, models, clientCall } from "../../../util/apis";
import { out } from "../../../util/interaction";
import * as os from "os";
import * as process from "process";
import { ExitCodes } from "./exit-codes";

export class DevicesViewer {
  private readonly client: MobileCenterClient;
  private readonly ownerName: string;
  private readonly appName: string;
  private readonly filterStr: string;

  constructor(client: MobileCenterClient, ownerName: string, appName: string, filterStr?: string) {
    this.client = client;
    this.ownerName = ownerName;
    this.appName = appName;
    this.filterStr = filterStr;
  }

  public async buildList(): Promise<number> {
    let list = await out.progress("Fetching list of devices...", this.getDeviceConfigurations(this.client, this.appName));
    out.text(`\nList of devices:`);
    out.text(`${this.filterStr}`);
    if(this.filterStr){
      list = list.filter(this.filterByName, this);
    }
    out.list(item=> `  - ${item.name} (id: ${item.id})`, list);
    
    if(list === null){
      return 1;
    }
    return 0;
  }

  private getDeviceConfigurations(client: MobileCenterClient, appName: string): Promise<models.DeviceConfiguration[]> {
    return clientCall(cb => {
      client.test.getDeviceConfigurations(
        this.ownerName,
        this.appName,
        cb
      );
    });
  }
  private filterByName(element:models.DeviceConfiguration, index:number, array: models.DeviceConfiguration[]):boolean{
    return element.name.toLowerCase().indexOf(this.filterStr.toLowerCase()) > -1;
  }
}