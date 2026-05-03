import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { CrmSession } from './CrmSession';


export class PageManager {
    private page: Page;

    readonly loginPage: LoginPage;
    readonly crmSession: CrmSession;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.crmSession = new CrmSession(page);
    }
}