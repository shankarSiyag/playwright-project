// @ts-check
import { defineConfig, devices } from '@playwright/test';



const config = {
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 30_000
  },
  reporter: process.env.CI ? 'bob' : 'html',
  use: {
    baseURL: 'https://login.salesforce.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
    storageState: 'auth.json',
  },

  retries: 1,

  workers: process.env.CI ? 2 : 4,
  //forbidOnly: !!process.env.CI,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]

}
module.exports = config;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

