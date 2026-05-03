const {test, expect} = require('@playwright/test') ;

// fixer are global variable which are available for every testc ase  

test('First Test case', async ({page})=> {
    
   /*
     await and async both should be there, if anyone is missing code can not run parallel.
    */
    
    

    await page.goto("https://google.com");

   const title =  await page.title();
   console.log("google page title:- "+title);
   //assertions
  

});

test('Open browser without context', async({page})=>{
 
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').type("rahulshetty");
    await page.locator("[type='password']").type("learning");
    await page.locator("#signInBtn").click();

    await page.locator("[style*='block']").textContent();
    // assertions
    await expect(page.locator("[style*='block']")).toContainText('Incorrect ')


})

test('Rahul Shetty', async ({page})=>{

    const userName = page.locator('#username');
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').type("rahulshettyacademy");
    await page.locator("[type='password']").type("learning"); 
    await page.locator("#signInBtn").click();

    //locate 1st element text
    //page.locator(".card-body a").first().textContent();
   // page.locator(".card-body a").nth(0).textContent();
    // this below mwthod wait untill all network call made for service based application
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState()

    await Promise.all([
        page.waitForNavigation(),
        page.locator("#signInBtn").click()
    ])
     cardTitles = page.locator(".card-body a");
    cardTitles.allTextContents()


})


