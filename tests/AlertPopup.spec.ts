import { test } from '@playwright/test'
import { AllertPopup } from '../pages/AlertPopup'
test.only('JS Alert Popup handle', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    const alerts = new AllertPopup(page);
    await alerts.jsBtn.click();

    page.once('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();   // or dialog.dismiss()
        await page.click('#show-alert');
        console.log("dsdsdsdsdsdsd")
    })
})