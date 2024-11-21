const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl:"http://172.16.0.229:8080/aja-participacao/login.xhtml",
    testIsolation:false,
    
  },
});
