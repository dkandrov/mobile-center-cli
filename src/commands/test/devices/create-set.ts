import { CommandArgs, help, success, name, shortName, longName, required, hasArg,
         ErrorCodes } from "../../../util/commandline";
import { DevicesCommand } from "../lib/devices-command";
import { out } from "../../../util/interaction";
import { Messages } from "../lib/help-messages";

@help(Messages.TestCloud.Commands.DevicesCreateSet)
export default class CreateSetDevicesCommand extends DevicesCommand {
  @help(Messages.TestCloud.Arguments.EspressoBuildDir)
  @longName("ids")
  @hasArg
  ids: string;

  @help(Messages.TestCloud.Arguments.EspressoTestApkPath)
  @longName("set-name")
  @hasArg
  setName: string;

  constructor(args: CommandArgs) {
    super(args);
  }

  protected async validateOptions(): Promise<void> {
    if (!this.app) {
      throw new Error("Argument --app is required");
    }
    if (!this.ids) {
      throw new Error("Argument --ids is required");
    }
  }

/*  protected prepareManifest(): Promise<string> {
    let preparer = new EspressoPreparer(this.artifactsDir, this.buildDir, this.testApkPath);
    return preparer.prepare();
  }*/

  protected getDevicesIds() {
    return this.ids;
  }
}