import { AppCommand, CommandArgs, CommandResult, help, success, failure, name, longName, required, hasArg,
         ErrorCodes } from "../../../util/commandline";
import { DevicesViewer } from "../lib/devices-viewer";
import { MobileCenterClient } from "../../../util/apis";
import { out } from "../../../util/interaction";
import * as outExtensions from "../lib/interaction";
import * as process from "../../../util/misc/process-helper";
import { Messages } from "../lib/help-messages";

const debug = require("debug")("mobile-center-cli:commands:test:prepare:calabash");

@help(Messages.TestCloud.Commands.DevicesShow)
export default class ShowDevicesCommand extends AppCommand {
  @help(Messages.TestCloud.Arguments.DevicesShowFilter)
  @longName("filter")
  @hasArg
  filterStr: string;

  constructor(args: CommandArgs) {
    super(args);
  }

  protected async validateOptions(): Promise<void> {
    if (!this.app) {
      throw new Error("Argument --app is required");
    }
  }
async run(client: MobileCenterClient): Promise<CommandResult> {
    let deviceListBuilder = new DevicesViewer(client, this.app.ownerName, this.app.appName, this.filterStr);
    let exitCode = await deviceListBuilder.buildList();

    if (!exitCode) {
      return success();
    }
    else {
      return failure(exitCode, `Something went wrong. Returning exit code ${exitCode}.`);
    }
  }
}
