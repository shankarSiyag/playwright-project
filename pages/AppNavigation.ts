import { Page, Locator } from '@playwright/test'

export class AppNavigation {
    page: Page;

    appLuncherBtn: Locator;
    searchBar: Locator;

    constructor(page: Page) {

        this.page = page;
        this.appLuncherBtn = page.getByRole('button', { name: 'App Launcher' });
        this.searchBar = page.getByRole('combobox', { name: 'Search apps and items...' })

    }

    async navigateToAppLauncherAndSelectApp(app: string) {
        await this.appLuncherBtn.click();
        await this.searchBar.fill(app);
        await this.page.getByRole('option', { name: app, exact: true }).click()

    }

}