import { chromium } from '@playwright/test';

async function globalSetup() {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://login.salesforce.com');

    console.log('Please login manually...');

    // Wait until Salesforce app shell loads
    await page.waitForSelector(
        'div.slds-icon-waffle',
        { timeout: 120000 }
    );

    console.log('Login successful');

    await context.storageState({
        path: 'auth.json'
    });

    console.log('Auth state saved');

    await browser.close();
}

globalSetup();