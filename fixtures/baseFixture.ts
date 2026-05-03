import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CrmSession } from '../pages/CrmSession';

export const test = base.extend<{
    loginPage: LoginPage;
    crmSession: CrmSession;

}>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    crmSession: async ({ page }, use) => await use(new CrmSession(page)),
})

export { expect } from '@playwright/test';