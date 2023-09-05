const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // should be baseUrl
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    loginURL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    CV_URL: 'https://www.quickcurriculum.com/',
    URL: 'https://naveenautomationlabs.com/opencart/'
  }
});
