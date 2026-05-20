import { test, expect } from "../../fixtures/baseFixtureForPom";

import { LeadPage } from '../../pages/LeadPage';

test('Create and save Lead in Developer Org', async ({ pm }) => {

    pm.lead.navigation();

    pm.appLaunch.navigateToAppLauncherAndSelectApp("Marketing CRM Classic");

    pm.lead.page.getByRole('link', { name: 'Leads', exact: true }).click();
    pm.lead.page.getByRole('button', { name: 'New' }).click();

    await pm.lead.createLead("Playwright Lead 1", "Playwright Lead Company", "LastName", "test@gmail.com", "123456789", "Closed - Converted", "Mr.");
})

test('Create lead with minimal data', async ({ page, pm }) => {

    page.goto("https://orgfarm-05defd1a43-dev-ed.develop.lightning.force.com")
    pm.appLaunch.navigateToAppLauncherAndSelectApp("Marketing CRM Classic");

    pm.lead.page.getByRole('link', { name: 'Leads', exact: true }).click();
    pm.lead.page.getByRole('button', { name: 'New' }).click();
    const leadPage = new LeadPage(page);
    await leadPage.createLead({
        lastName: 'John Doe',
        status: 'Closed - Not Converted'

    });
});

// test('Create lead with full data', async ({ page }) => {
//     const leadPage = new LeadPage(page);
//     await leadPage.createLead({
//         firstName: 'Sarah',
//         lastName: 'Connor',
//         email: 'sarah@example.com',
//         phone: '+1987654321',
//         company: 'Skynet Corp',
//         jobTitle: 'CTO',
//         website: 'https://skynet.com',
//         leadSource: 'Website',
//         industry: 'Technology',
//         notes: 'Very important lead'
//     });
// });