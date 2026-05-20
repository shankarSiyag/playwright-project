import { Locator, Page } from '@playwright/test'

export class AllertPopup {
    page: Page;
    jsBtn: Locator;
    jsCnfBtn: Locator;
    jsPrompt: Locator

    constructor(page: Page) {
        this.page = page;
        this.jsBtn = page.locator('//*[text()="Click for JS Alert"]');
        this.jsCnfBtn = page.getByLabel('//*[text()="Click for JS Confirm"]');
        this.jsPrompt = page.getByLabel('//*[text()="Click for JS Prompt"]')
    }
}