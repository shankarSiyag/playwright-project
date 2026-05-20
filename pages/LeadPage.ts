// pages/LeadPage.ts
import { Page, Locator } from '@playwright/test';
import { LeadData } from '../types/LeadData'

export class LeadPage {
    readonly page: Page;

    // Locators
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly phone: Locator;
    private readonly company: Locator;
    private readonly jobTitle: Locator;
    private readonly website: Locator;
    private readonly leadSource: Locator;
    private readonly industry: Locator;
    private readonly AnnualRevenue: Locator;
    private readonly submitButton: Locator;
    readonly status: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstName = page.getByLabel('First Name');
        this.lastName = page.getByLabel('Last Name');
        this.email = page.getByLabel('Email');
        this.phone = page.getByLabel('Phone');
        this.company = page.getByLabel('Company');
        this.jobTitle = page.getByLabel('Title');
        this.website = page.getByLabel('Website');
        this.leadSource = page.getByRole('combobox', { name: 'Lead Source' });
        this.industry = page.getByRole('combobox', { name: 'Industry' });
        this.status = page.getByRole('combobox', { name: 'Lead Status' });
        this.AnnualRevenue = page.getByLabel('Annual Revenue');
        this.submitButton = page.getByRole('button', { name: 'Save', exact: true });
    }

    /**
     * Fills the lead form with mandatory + any optional fields
     */
    async createLead(lead: LeadData): Promise<void> {

        await this.lastName.fill(lead.lastName);
        await this.status.click();
        await this.page.getByRole('option', {
            name: lead.status
        }).click();



        // Optional fields - only fill if provided
        if (lead.company) await this.company.fill(lead.company);
        if (lead.jobTitle) await this.jobTitle.fill(lead.jobTitle);
        if (lead.website) await this.website.fill(lead.website);
        if (lead.leadSource) await this.leadSource.selectOption(lead.leadSource);
        if (lead.industry) await this.industry.selectOption(lead.industry);
        if (lead.notes) await this.AnnualRevenue.fill(lead.notes);

        // Example: nested address
        if (lead.address?.city) {
            await this.page.getByLabel('City').fill(lead.address.city);
        }

        await this.submitButton.click();
    }

    // Optional: Helper for minimal lead creation
    // async createMinimalLead(baseLead: Omit<LeadData, 'firstName' | 'status' | 'website' | 'leadSource' | 'industry' | 'notes' | 'address'>) {
    //     return this.createLead(baseLead);
    // }
}