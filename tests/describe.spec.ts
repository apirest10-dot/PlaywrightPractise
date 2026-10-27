import test, { expect } from "@playwright/test";
test.beforeEach(async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
})
test.describe("Validate With valid and Invalid",()=>{
    //test case for valid case
    test('Check username and password with valid data',async({page})=>{
        await page.locator('#txtUsername').fill('Admin')
        await page.locator('#txtPassword').fill('Qedge123!@#')
        await page.locator('#btnLogin').click()
        await expect(page).toHaveURL(/dashboard/)

    })
    //test case for invalid
    test('Check username and password with Invalid',async({page})=>{
        await page.locator('#txtUsername').fill('Admin')
        await page.locator('#txtPassword').fill('Qedge123#')
        await page.locator('#btnLogin').click()
        await expect(page).toHaveURL(/validateCredentials/)
    })

})
test.afterEach(async({page})=>{
    await page.close()
})