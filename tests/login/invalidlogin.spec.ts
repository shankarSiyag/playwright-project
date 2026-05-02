import { test, expect } from '../../fixtures/baseFixture';
import { users } from '../../utils/testData';

test.describe('Invalid Login Scenarios', () => {

  test('Invalid credentials', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await expect(loginPage.errorMsg).toBeVisible();
  });

  test('Empty credentials', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login('', '');
    await expect(loginPage.errorMsg).toBeVisible();
  });

  test('Only username', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, '');
    await expect(loginPage.errorMsg).toBeVisible();
  });

});