import { test, expect } from '../fixtures/baseFixture';
import users from '../utils/testData.json';


// type User = {
//     email: string;
//     password: string;
//     role: string;
// };

test('login with multiple users', async ({ page, loginPage }) => {
    for (const user of users) {
        await loginPage.navigate();

        await page.fill('#username', user.email);
        await page.fill('#password', user.password);
        await page.click('#Login');
    }
});

test('Handle multiple tab', async ({ context }) => {
    const page1 = context.newPage();
    const page2 = context.newPage();

    await Promise.all([
        (await page1).goto("https://google.com"),
        (await page2).goto("https://amazon.in")
    ])
})

test('reverse String', async () => {
    const str = "Automation";
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log(`Original : ${str}`);
    console.log(`Reversed : ${reversed}`);


});

test('First non repeating character', () => {
    const str = 'automation'.toLowerCase();
    let count: Record<string, number> = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str) {
        if (count[char] === 1) {
            console.log(char);
            console.log(count);
            //return char;
        }
    }
    let seen = new Set();
    let duplicates = new Set();

    for (let num of str) {
        if (seen.has(num)) {
            duplicates.add(num);
        }
        else {
            seen.add(num);
        }
    }
    console.log("Duplicate element" + duplicates.keys.name);
})