import test, { expect } from "@playwright/test";
test('Handling hidden element',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/show-hide-element')
    await page.waitForTimeout(2000)
    await expect(page.locator('#hiddenText')).toBeVisible()
    //click  hide button to hide text
    await page.locator('#showHideBtn').click()
    //assert text be hidden
    await expect(page.locator('#hiddenText')).toBeHidden()
    //click  hide button to open text
    await page.locator('#showHideBtn').click()
    await page.waitForTimeout(2000)
    await expect(page.locator('#hiddenText')).toContainText(/This text will/)
    await page.waitForTimeout(2000)
    })
    