import * as os from "os";

export module Messages {
  export module TestCloud {
    export module Commands {
      export const DevicesCreateSet = "Create a short id or set name for the selected devices list.";
      export const DevicesList = "List of available user sets of devices.";
      export const DevicesShow = "List of all available devices for the selected application.";
      export const GenerateAppium = "Generates an Appium project";
      export const GenerateUITest = "Generates a Xamarin.UITest project";

      export const PrepareAppium = "Creates an artifacts directory with Appium tests.";
      export const PrepareCalabash = `Creates an artifacts directory with Calabash tests.${os.EOL}` + 
                                     `Required external tools:${os.EOL}` + 
                                     `- Ruby ${os.EOL}` + 
                                     `- Gem xamarin-test-cloud`;
      export const PrepareEspresso = "Creates an artifacts directory with Espresso tests.";
      export const PrepareUITests = `Creates an artifacts directory with Xamarin UI Tests.${os.EOL}` +
                                    `Required external tools:${os.EOL}` + 
                                    `- .NET Framework on Windows, Mono Runtime on OS X${os.EOL}` + 
                                    `- NuGet package Xamarin.UITests, version 2.0.1 or higher`;
      export const PrepareXCUITest = "Creates an artifacts directory with XCUITest tests.";
      
      export const RunAppium = "Starts a test run with Appium tests.";
      export const RunCalabash = `Starts a test run with Calabash tests.${os.EOL}` + 
                                 `Required external tools:${os.EOL}` + 
                                 `- Ruby ${os.EOL}` + 
                                 `- Gem xamarin-test-cloud`;
      export const RunEspresso = "Starts a test run with Espresso tests.";
      export const RunManifest = "Starts a test run with previously prepared artifacts.";
      export const RunUITests = `Starts a test run with Xamarin UI Tests.${os.EOL}` + 
                                `Required external tools:${os.EOL}` + 
                                `- .NET Framework on Windows, Mono Runtime on OS X${os.EOL}` + 
                                `- NuGet package Xamarin.UITests, version 2.0.1 or higher`;
      export const RunXCUITest = "Starts a test run with XCUITest tests.";

      export const Status = "Checks the status of the started test run.";
    }

    export module Arguments {
      export const Include = 'Additional files and directories to include. The value must be either path relative to the input directory, or be in format "targetDir=sourceDir"';
      export const TestParameter = 'Additional test parameters. The value must be in format "key=value"';
      export const AppPath = "Path to an application file";
      export const AppPlatform = "The app's platform ('ios' or 'android')";

      export const DevicesListId = "Id of user set of devices.";
      export const DevicesShowFilter = "Filter devices by name.";

      export const GenerateOutputPath = "The path where the tests will be generated";

      export const PrepareArtifactsDir = "Path to the artifacts directory to create";
      export const RunDevices = "Device selection slug";
      export const RunDSymDir = "Path to the directory with iOS symbol files";
      export const RunLocale = "The system locale for the test run. For example, en_US";
      export const RunLanguage = "Override the language (iOS only) for the test run";
      export const RunTestSeries = "Name of the test series";
      export const RunAsync = "Exit the command when tests are uploaded, without waiting for test results";
      export const Timeout = "Maximum time (in seconds) to wait for test results";

      export const AppiumBuildDir = "Path to the directory with the Appium tests (usually <project>/target/upload)";
      
      export const CalabashProjectDir = 'Path to the Calabash workspace directory (usually <project>/features)';
      export const CalabashSignInfo = "Use Signing Info for signing the test server";
      export const CalabashConfigPath = "Path to the Cucumber configuration file (usually cucumber.yml)";
      export const CalabashProfile = "Profile to run. It must exist in the configuration file";
      export const CalabashSkipConfigCheck = "Force running without Cucumber profile";
      
      export const EspressoBuildDir = "Path to the Espresso output directory (usually <project>/build/outputs/apk)";
      export const EspressoTestApkPath = "Path to the *.apk file with the Espresso tests. If not set, build-dir is used to discover it";

      export const UITestsBuildDir = "Path to the directory with the built test assemblies (usually <project>/bin/<configuration>)";
      export const UITestsStoreFilePath = "Path to the keystore file";
      export const UITestsStorePassword = 'Password to the keystore. Corresponds to the "-storepass" argument in jarsigner';
      export const UITestsKeyAlias = 'Alias to the key in the keystore. Corresponds to the "-alias" argument in jarsigner';
      export const UITestsKeyPassword = 'Password to the matching private key in the keystore. Corresponds to the "-keypass" argument in jarsigner';
      export const UITestsSignInfo = "Use Signing Info for signing the test server.";
      export const UITestsToolsDir = "Path to the directory containing the Xamarin UI Tests tools including test-cloud.exe";

      export const StatusTestRunId = "ID of the started test run";
      export const StatusContinuous = "Continuously checks the test run status until it completes";

      export const XCUITestIpaPath = "Path to the *.ipa file with the XCUITest tests";
      export const XCUITestBuildDir = "Path to the build output directory (usually <project>/Build/Products/Debug-iphoneos)";
    }
  }
}