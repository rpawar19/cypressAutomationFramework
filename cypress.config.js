const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    // specPattern: "cypress/e2eTests/*.feature",
    specPattern: "cypress/apiTests/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
  env: {
    access_key: "<your_access_key>",
  },
});
