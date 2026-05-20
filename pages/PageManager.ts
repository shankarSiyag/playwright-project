import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { CrmSession } from './CrmSession';
import { Lead } from './Lead';
import { AppNavigation } from './AppNavigation';


export class PageManager {
    private page: Page;

    readonly loginPage: LoginPage;
    readonly crmSession: CrmSession;
    readonly lead: Lead;
    readonly appLaunch: AppNavigation;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.crmSession = new CrmSession(page);
        this.lead = new Lead(page);
        this.appLaunch = new AppNavigation(page)

    }
}