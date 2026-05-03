import { test, expect } from '../../fixtures/baseFixture';
import { CrmSession } from '../../pages/CrmSession';

test('Get CRM Session', async ({ loginPage, crmSession, context }) => {
    await loginPage.navigate();
    await loginPage.login('validUsername', 'validPassword');

    // ✅ Wait for new tab to open
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        crmSession.getDemoSeessionInfo(),
    ]);

    // ✅ Wait for new tab to load
    await newTab.waitForLoadState('domcontentloaded');

    // ✅ Create new POM instance pointing to new tab
    const newTabCrmSession = new CrmSession(newTab);
    await newTabCrmSession.fillDemoSessionInfo('John', 'Doe', 'QA Engineer');

})