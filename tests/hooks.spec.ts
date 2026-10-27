import test from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.locator('#txtUsername').fill('Admin')
    await page.locator('#txtPassword').fill('Qedge123!@#')
    await page.locator('#btnLogin').click()
    console.log('=======Running in before Each===========')
   })
   test.only('Click on Admin',async({page})=>{
    await page.locator('#menu_admin_viewAdminModule').click()
    console.log('Executing Admin Test')
   })
   test('Click on Pim',async({page})=>{
    await page.locator('#menu_pim_viewPimModule').click()
    console.log('Executing Pim Test')
   })
   test('Click on Leave',async({page})=>{
    await page.locator('#menu_leave_viewLeaveModule').click()
    console.log('Executing Leave Test')
   })
   test.afterEach(async({page})=>{
    await page.close()
    console.log('=======Running in After Each===========')
   })