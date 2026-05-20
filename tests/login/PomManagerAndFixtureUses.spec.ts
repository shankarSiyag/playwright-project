import { test, expect } from "../../fixtures/baseFixtureForPom";

/*✅ This test verifies that the PageManager and Fixture are working correctly together which is a foundational aspect of our test architecture. It ensures that we can access our POMs through the fixture and perform basic actions and assertions.
This test serves as a sanity check for our test setup, confirming that the PageManager is properly instantiated and that we can interact with the login page as expected.
*/
test('Verify POM Manager and Fixture usage', async ({ pm }) => {
    pm.loginPage.navigate();

    await expect(pm.loginPage.headerAboveLogin).toBeVisible();

    await expect(pm.loginPage.loginbutton).toHaveText("Log In to Sandbox");
    await expect(pm.loginPage.loginbutton).toContainText(/Sandbox/i);

    await pm.loginPage.login('validUsername', 'validPassword');

})

function transformString(input: string): string {
    const words = input.split(' ');
    let result: string[] = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        const capitalized =
            word.charAt(0).toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(' ');
}

function reverseWordInString(str: string): string {
    const words = str.trim().split(/\s+/);
    let result = '';

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i !== 0) result += ' ';
    }

    return result;
}



test('Capitalise first letter', () => {
    const actual = 'my name is singh';
    console.log(transformString(actual)); // Singh Is Name My
    console.log(reverseWordInString(actual));
    console.log(reverseWordInPlace(actual));


})

function reverseWordInPlace(str: string): string {
    let words = str.trim().split(' ');
    let result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reversed = word.split('').reverse().join('');
        result.push(reversed);
    }
    return result.join(' ');
}





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