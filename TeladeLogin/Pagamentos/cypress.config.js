const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl: 'http://172.16.0.229:8080/aja/login.xhtml'


    
  },
});