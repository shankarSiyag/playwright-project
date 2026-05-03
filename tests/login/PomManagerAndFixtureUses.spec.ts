import { test, expect } from "../../fixtures/baseFixtureForPom";

/*✅ This test verifies that the PageManager and Fixture are working correctly together which is a foundational aspect of our test architecture. It ensures that we can access our POMs through the fixture and perform basic actions and assertions.
This test serves as a sanity check for our test setup, confirming that the PageManager is properly instantiated and that we can interact with the login page as expected.
*/
test.only('Verify POM Manager and Fixture usage', async ({ pm }) => {
    pm.loginPage.navigate();

    await expect(pm.loginPage.headerAboveLogin).toBeVisible();

    await expect(pm.loginPage.loginbutton).toHaveText("Log In to Sandbox");
    await expect(pm.loginPage.loginbutton).toContainText(/Sandbox/i);

    await pm.loginPage.login('validUsername', 'validPassword');

})