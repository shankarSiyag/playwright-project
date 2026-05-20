import { test as base, Page } from '@playwright/test';

type MyFixtures = {
    authenticatedPage: Page;
};

export const test = base.extend<MyFixtures>({
    authenticatedPage: async ({ page, baseURL }, use) => {
        await page.goto(`${baseURL}/login`);
        await page.fill('#email', 'testuser@example.com');
        await page.fill('#password', 'Password@123');
        await page.click('button[type="submit"]');
        await page.waitForURL('**/dashboard');

        await use(page); // Inject into test

        console.log('Authenticated session completed');
    },
});

export { expect } from '@playwright/test';