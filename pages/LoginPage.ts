import {Page, Locator} from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password:Locator;
    readonly loginBtn: Locator;
    readonly errorMsg : Locator
    constructor(page:Page){
        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.loginBtn = page.locator("#Login");
        this.errorMsg = page.locator("#error");
    }
    async navigate(){
        await this.page.goto('/');
    }
    async login(user:string , pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginBtn.click();
    }
    async getErrorMsg(){
        return await this.errorMsg.textContent();
    }
}