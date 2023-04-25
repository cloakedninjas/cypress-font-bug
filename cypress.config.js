const { defineConfig } = require('cypress');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
    video: false,
    e2e: {
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);
        },
        baseUrl: 'http://localhost:8080',
        specPattern: 'cypress/e2e/*.spec.js'
    }
});
