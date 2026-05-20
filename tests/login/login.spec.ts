import { log } from 'console';
import { test, expect } from '../../fixtures/baseFixture';
import { users } from '../../utils/testData';
import { TIMEOUT } from 'dns';
test.describe('Login Positive Scenarios', () => {

  test('Valid login', async ({ loginPage, page }) => {
    //await loginPage.navigate();
    await page.goto('https://orgfarm-05defd1a43-dev-ed.develop.lightning.force.com');
    //await loginPage.login(users.validUser.username, users.validUser.password);

    page.pause();
    await expect(page).toHaveURL(/devedapp__Welcome/);


    await page.getByRole('button', { name: 'App Launcher' }).click();
    await page.getByRole('combobox', { name: 'Search apps and items...' }).click();
    await page.getByRole('combobox', { name: 'Search apps and items...' }).fill('Digi');
    await page.getByRole('option', { name: 'Digital Experiences', exact: true }).click();
    await page.getByRole('button', { name: 'Add Show menu' }).click();
    await page.getByRole('menuitem', { name: 'Content' }).click();
    await page.getByRole('gridcell', { name: 'Select Item 3' }).click();
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByRole('textbox', { name: 'Title' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill('Playwright testing code');
    await page.getByRole('textbox', { name: 'API Name' }).click();
    await page.getByRole('textbox', { name: 'API Name' }).fill('API forPlaywright ');
    await page.getByRole('textbox', { name: 'Content Slug' }).click({
      button: 'right'
    });
    await page.getByRole('textbox', { name: 'Description' }).click();
    await page.getByRole('textbox', { name: 'Description' }).fill('THis is description for Playwright test');
    await page.getByRole('textbox', { name: 'Key Concept' }).click();
    await page.getByRole('textbox', { name: 'Key Concept' }).fill('Testing ');
    await page.getByRole('textbox', { name: 'Key Concept' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Key Concept' }).fill('Framework related concepts discussed');
    await page.getByLabel('Lesson content').locator('div').nth(1).click();
    await page.getByLabel('Lesson content').locator('div').first().fill('THis is code for rehvbcb');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('"Playwright testing code" was saved.', { exact: true }).click({
      button: 'right'
    });
    await page.getByRole('button', { name: 'Publish' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Publish Now' }).click();
    await page.getByText('"Playwright testing code" was published.', { exact: true }).click({
      button: 'right'
    });
    await page.getByText('"Playwright testing code" was published.', { exact: true }).click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('link', { name: 'Playwright testing code' }).click({
      button: 'right'

    });
  })

  test('UI validation', async ({ loginPage }) => {
    await loginPage.navigate();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
  });

  test('Login button enabled', async ({ loginPage }) => {
    await loginPage.navigate();
    await expect(loginPage.loginBtn).toBeEnabled();
  });

  test('', async ({ loginPage }) => {
    await loginPage.navigate();

  })

});