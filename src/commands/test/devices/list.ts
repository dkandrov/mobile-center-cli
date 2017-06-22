import { AppCommand, CommandArgs, CommandResult, help, success, failure, name, longName, required, hasArg,
         ErrorCodes } from "../../../util/commandline";
import { DevicesCommand } from "../lib/devices-command";
import { DeviceSetsViewer } from "../lib/device-sets-viewer";
import { MobileCenterClient } from "../../../util/apis";
import { out } from "../../../util/interaction";
import { Messages } from "../lib/help-messages";

@help(Messages.TestCloud.Commands.DevicesList)
export default class ListDevicesCommand extends AppCommand {
  @help(Messages.TestCloud.Arguments.DevicesListId)
  @longName("id")
  @hasArg
  id: string;

  constructor(args: CommandArgs) {
    super(args);
  }

  protected async validateOptions(): Promise<void> {
    if (!this.app) {
      throw new Error("Argument --app is required");
    }
  }
  async run(client: MobileCenterClient): Promise<CommandResult> {
    let deviceListBuilder = new DeviceSetsViewer(client, this.app.ownerName, this.app.appName);
    let exitCode: number;
    if(this.format){
      if (this.format in this.additionalSupportedOutputFormats) {
        exitCode = await deviceListBuilder.buildList(true, this.id);
      }
    }else{
      exitCode = await deviceListBuilder.buildList(false, this.id);
    }
    

    if (!exitCode) {
      return success();
    }
    else {
      return failure(exitCode, `Something went wrong. Returning exit code ${exitCode}.`);
    }
  }
}