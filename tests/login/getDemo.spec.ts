import { test, expect } from '../../fixtures/baseFixture';
import { CrmSession } from '../../pages/CrmSession';

test('Get CRM Demo Session', async ({ loginPage, crmSession, context }) => {
    await loginPage.navigate();

    // ✅ Wait for new tab to open
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        crmSession.getDemoSeessionInfo(),
    ]);

    // ✅ Wait for new tab to load
    await newTab.waitForLoadState('domcontentloaded');

    const newTabForCrm = new CrmSession(newTab);
    await newTabForCrm.fillDemoSessionInfoAndCountry('John', 'Doe', 'QA Engineer', 'Tech Company', 'johndow@gmail.com', '1-5 employees', '1234567890', 'United States', 'California');

})