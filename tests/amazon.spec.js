
import {test, expect} from '@playwright/test';

test.only('Verify 3rd link is visible', async({page})=>{
    await page.goto("https://test.salesforce.com");

})