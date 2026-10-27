import test, { expect } from "@playwright/test";
test('Using Environment file',async({page})=>{
    await page.goto(process.env.BASEURL!)
    await page.locator('#txtUsername').fill(process.env.BASE_USER!)
    await page.locator('#txtPassword').fill(process.env.BASE_PASS!)
    await page.locator('#btnLogin').click()
    await expect(page).toHaveURL(/dashboard/)
})