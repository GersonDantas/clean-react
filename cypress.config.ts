import { defineConfig } from 'cypress'

export default defineConfig({
  fixturesFolder: 'tests/e2e/cypress/fixtures',
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/e2e/cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    supportFile: 'tests/e2e/cypress/support/index.js',
    specPattern: 'tests/e2e/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
  },
})
