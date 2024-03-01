const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2eTests/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
