const { defineConfig } = require("cypress")

module.exports = {
  projectId: '5ydjse',
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = defineConfig({
        projectId: "5ydjse",
        e2e: {
            setupNodeEvents(on, config) {
                { "reporter"; "mochawesome",
                    "reporterOptions"; 
                        { "reportDir"; "cypress/report/mochawesome-report",
                        "overwrite"; true,
                        "html"; true,
                        "json"; false,
                        "timestamp"; "mmddyyyy_HHMMss" }}
            },
        },
    });    
    },
  },
};
