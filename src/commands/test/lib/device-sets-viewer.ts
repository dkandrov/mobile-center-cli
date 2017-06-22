import { MobileCenterClient, models, clientCall } from "../../../util/apis";
import { out } from "../../../util/interaction";
import * as os from "os";
import * as process from "process";
import { ExitCodes } from "./exit-codes";

export class DeviceSetsViewer {
  private readonly client: MobileCenterClient;
  private readonly ownerName: string;
  private readonly appName: string;

  constructor(client: MobileCenterClient, ownerName: string, appName: string) {
    this.client = client;
    this.ownerName = ownerName;
    this.appName = appName;
  }

  public async buildList(isAnotherFormat: boolean, id?: string): Promise<number> {
    let list: models.DeviceSet[] = new Array<models.DeviceSet>();
    if(!id){
      list = await out.progress("Fetching list of device sets...", this.listDeviceSetsOfUser(this.client, this.appName));
    }else{
      let devices = await out.progress("Fetching list of devices...", this.listDevicesById(this.client, this.appName, id));
      if(!devices){
        return 1;
      }
      list.push(devices);
    }
    out.text(`\nList of device sets:`);
    if(isAnotherFormat){
      out.list(item=> `${item}`, list);
    }else{
      for(let i=0; i<list.length; i++){
        out.text(`  - ${list[i].name} (id: ${list[i].id})`);
        out.list(device => `    - ${device.model.name} (${device.model.formFactor}) - OS version: ${device.os}`, list[i].deviceConfigurations);
      }
    }
    
    if(list === null){
      return 1;
    }
    return 0;
  }

  private listDeviceSetsOfUser(client: MobileCenterClient, appName: string): Promise<models.DeviceSet[]> {
    return clientCall(cb => {
      client.test.listDeviceSetsOfUser(
        this.ownerName,
        this.appName,
        cb
      );
    });
  }

  private listDevicesById(client: MobileCenterClient, appName: string, id: string): Promise<models.DeviceSet> {
    return clientCall(cb => {
      client.test.getDeviceSetOfUser(
        id,
        this.ownerName,
        this.appName,
        cb
      );
    });
  }
}