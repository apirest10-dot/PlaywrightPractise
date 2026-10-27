import test, { expect } from "@playwright/test";
test.skip('Test Case Under Design',async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.getByText('Forgot your password?').click()
})
test.fail('Login should Fail',async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
     await page.locator('#txtUsername').fill('Admin2')
    await page.locator('#txtPassword').fill('Qedge123!@#')
    await page.locator('#btnLogin').click()
})

 test.fixme('Verify Employee Delete', async ({ page }) => { 
 
    await page.goto('http://orangehrm.qedgetech.com/'); 
 
    // Bug exists in application 
    // Test will not execute 
 }); 

 
test('Upload Employee Photo', async ({ page }) => { 
 test.slow()
   await page.goto('http://orangehrm.qedgetech.com/'); 
 await page.locator('#tUsername').fill('Admin2')
    // Large file upload 
    // Takes more time 
 }); 

  
test('OrangeHRM Login', async ({ page }) => { 
 
    await test.step('Open Login Page', async () => { 
 
        await page.goto('http://orangehrm.qedgetech.com/'); 
 
    })  
    await test.step('User Enter Username', async () => { 
 
        await page.fill('#txtUsername','Admin'); 
 
    })
    await test.step('User Enter Password', async () => { 
 
        await page.fill('#txtPassword','Qedge123!@#'); 
 
    }) 
    await test.step('user Click Login Button', async () => { 
 
        await page.click('#btnLogin'); 
 
    })  
    await test.step('User Verify Dashboard', async () => { 
 
        await expect(page).toHaveURL(/dashboard/); 
 
    })
 
})