const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports/mocha",
  },

  e2e: {
    baseUrl: "https://todomvc.com/examples/react/dist/",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: "cypress/support/e2e.js",
    video: true,

    async setupNodeEvents(on, config) {
      return setupNodeEvents(on, config);
    },
  },
});