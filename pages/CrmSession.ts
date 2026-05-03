import { Page, Locator, FrameLocator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CrmSession extends BasePage {
    readonly sessionInfo: Locator;
    readonly frameLocator: FrameLocator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly jobTitle: Locator;
    readonly nextBtn: Locator;
    readonly company: Locator;
    readonly email: Locator;
    readonly size: Locator;
    readonly phone: Locator;
    readonly country: Locator;
    readonly province: Locator;

    constructor(page: Page) {
        super(page); // ✅ mandatory 
        this.frameLocator = page.frameLocator('#marketing');
        this.sessionInfo = this.frameLocator.getByRole("link", { name: 'Get free CRM', exact: false });
        this.firstName = page.getByLabel('First name');
        this.lastName = page.getByLabel('Last name');
        this.jobTitle = page.getByLabel('Job title');
        this.nextBtn = page.getByRole('button', { name: 'Next' });
        this.company = page.getByLabel('Company', { exact: true });
        this.email = page.getByLabel('Email');
        this.size = page.getByLabel('Company size');
        this.phone = page.getByLabel('Phone');
        this.country = page.getByLabel('Country');
        this.province = page.getByLabel('State/province');
    }

    async getDemoSeessionInfo() {
        await this.sessionInfo.click();
    }
    async fillDemoSessionInfo(firsname: string, lastName: string, jobTitle: string) {
        await this.firstName.fill(firsname);
        await this.lastName.fill(lastName);
        await this.jobTitle.fill(jobTitle);

    }
    async fillDemoSessionInfoAndCountry(firsname: string, lastName: string, jobTitle: string, company: string, email: string, size: string, phone: string, country: string, province: string) {
        await this.firstName.fill(firsname);
        await this.lastName.fill(lastName);
        await this.jobTitle.fill(jobTitle);
        await this.nextBtn.click();
        await this.company.fill(company);
        await this.size.click();
        await this.size.selectOption(size);
        await this.country.click();
        await this.country.selectOption(country);
        await this.province.click();
        await this.province.selectOption(province);
        await this.nextBtn.click();
        await this.phone.fill(phone);
        await this.email.fill(email);

    }


}