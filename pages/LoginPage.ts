import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMsg: Locator;

    constructor(page: Page) {
        super(page); // ✅ mandatory

        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#Login");
        this.errorMsg = page.locator("#error");
    }

    async navigate() {
        await this.page.goto('/'); // inherited from BasePage
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }

    async getErrorMsg(): Promise<string | null> {
        return await this.errorMsg.textContent();
    }
}