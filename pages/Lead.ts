import { Locator, Page } from '@playwright/test'

export class Lead {
    readonly page: Page
    salutation: Locator;
    firstName: Locator;
    lastName: Locator;
    company: Locator;
    mobile: Locator;
    email: Locator;
    status: Locator;
    save: Locator;

    constructor(page: Page) {
        this.page = page
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.mobile = page.getByRole('textbox', { name: 'Mobile' });
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.status = page.getByRole('combobox', { name: 'Lead Status' });
        this.company = page.getByRole('textbox', { name: 'Company' })
        this.salutation = page.getByRole('combobox', { name: 'Salutation' });
        this.save = page.getByRole('button', { name: 'Save' });

    }

    async createLead(fName: string, cName: string, lname: string, mail: string, phone: string, status: string, salutation1: string) {
        await this.salutation.first().click();
        await this.page.getByRole('option', {
            name: salutation1
        }).click();
        await this.firstName.fill(fName);
        await this.company.fill(cName);
        await this.lastName.fill(lname);
        await this.mobile.fill(phone);
        await this.email.fill(mail);
        await this.status.first().click();
        await this.page.getByRole('option', {
            name: status
        }).click();
        await this.save.first().click();
    }

    async navigation() {
        this.page.goto("https://orgfarm-05defd1a43-dev-ed.develop.lightning.force.com")
    }
}