import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { defineConfig } from "cypress";

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const nodePolyfills =
  require("@esbuild-plugins/node-modules-polyfill").NodeModulesPolyfillPlugin;
const {
  isFileExist,
  findFiles,
  verifyDownloadTasks,
} = require("cy-verify-downloads");

export default defineConfig({
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  videoUploadOnPasses: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  trashAssetsBeforeRuns: true,
  watchForFileChanges: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 50000,
  responseTimeout: 30000,
  taskTimeout: 30000,
  requestTimeout: 10000,
  env: {
    FAIL_FAST_STRATEGY: "run",
    FAIL_FAST_ENABLED: true,
    FAIL_FAST_BAIL: 2,
  },
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://practicetestautomation.com",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      require("cypress-fail-fast/plugin")(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        }),
      );
      on("task", {
        verifyDownloadTasks,
        isFileExist,
        findFiles,
      });
      return config;
    },
  },
});
