import { test, expect } from '../../fixtures/baseFixture';
import { users } from '../../utils/testData';

test.describe('Session Handling', () => {

  test('Remember me functionality', async ({ loginPage }) => {
    await loginPage.navigate();
    // implement checkbox logic if exists
  });

  test('Logout flow', async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(users.validUser.username, users.validUser.password);
    // logout logic
  });

  test('Session timeout', async ({ loginPage }) => {
    // simulate session expiry
  });

});