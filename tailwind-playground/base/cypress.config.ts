import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4269',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,

    // Spec patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',

    // Timeouts
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    pageLoadTimeout: 30000,

    // Retry configuration
    retries: {
      runMode: 2,
      openMode: 0,
    },

    // Browser configuration
    chromeWebSecurity: false,

    // Environment variables
    env: {
      apiUrl: 'http://localhost:3000/api',
      coverage: false,
    },

    // Exclude patterns for E2E tests
    excludeSpecPattern: ['**/*.hot-update.js', '**/__snapshots__/*', '**/__image_snapshots__/*'],

    setupNodeEvents(on, config) {
      // Code coverage setup (optional)
      // require('@cypress/code-coverage/task')(on, config);

      // Custom tasks
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },

        clearDb() {
          // Database cleanup logic here
          return null;
        },

        seedDb(data) {
          // Database seeding logic here
          console.log('Seeding database with:', data);
          return null;
        },
      });

      return config;
    },
  },

  // Global configuration
  watchForFileChanges: true,
  animationDistanceThreshold: 5,
  waitForAnimations: true,
  scrollBehavior: 'center',

  // Folders
  downloadsFolder: 'cypress/downloads',
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',

  // Experimental features
  experimentalStudio: true,
  experimentalMemoryManagement: true,
});
