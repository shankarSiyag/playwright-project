import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 30_000,
  },

  reporter: process.env.CI ? 'blob' : 'html',

  retries: process.env.CI ? 1 : 0,     // retries only in CI
  workers: process.env.CI ? 2 : 4,

  use: {
    baseURL: 'https://login.salesforce.com',
    headless: false,


    screenshot: 'on',
    video: 'on',
    trace: 'on',

    storageState: process.env.CI ? undefined : 'auth.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});