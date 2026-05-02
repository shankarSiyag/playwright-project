import {test, expect} from '../../fixtures/baseFixture';
import {users} from '../../utils/testData';
test.describe('Login Positive Scenarios', () => {

  test('Valid login', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(loginPage.page).toHaveURL(/home/);
  });

  test('UI validation', async ({ loginPage }) => {
    await loginPage.navigate();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
  });

  test('Login button enabled', async ({ loginPage }) => {
    await loginPage.navigate();
    await expect(loginPage.loginBtn).toBeEnabled();
  });

});