import { AppCommand, CommandArgs, CommandResult,
         help, success, name, shortName, longName, required, hasArg,
         failure, ErrorCodes } from "../../../util/commandline";
import { TestCloudError } from "./test-cloud-error";
import { StateChecker } from "./state-checker";
import { MobileCenterClient } from "../../../util/apis";
import { out } from "../../../util/interaction";
import { parseTestParameters } from "./parameters-parser";
import { progressWithResult } from "./interaction";
import { ITestCloudManifestJson, ITestFrameworkJson, IFileDescriptionJson } from "./test-manifest-reader";
import { Messages } from "./help-messages";
import * as _ from "lodash";
import * as pfs from "../../../util/misc/promisfied-fs";
import * as path from "path";
import * as temp from "temp";

export abstract class DevicesCommand extends AppCommand {

  protected isAppPathRquired = true;

  constructor(args: CommandArgs) {
    super(args);
  }

  // Override this if you need to validate options
  protected async validateOptions(): Promise<void> {
  }

  public async run(client: MobileCenterClient): Promise<CommandResult> {
      return success();
  }

  protected prepareManifest(artifactsDir: string): Promise<string> {
    throw new Error("This method must be overriden in derived classes");
  }
}
