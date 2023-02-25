const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1080,
    viewportHeight: 720,
    env: {
      snapshotOnly: false,
    }
  },
});
