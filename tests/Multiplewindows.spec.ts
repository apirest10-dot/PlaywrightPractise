import test, { expect } from "@playwright/test";
test('Handling specific window tab',async({page})=>{
    await page.goto('https://gmail.com')
    await page.waitForTimeout(2000)
    //Wait for "popup" event to appear on the page 
    page.waitForEvent('popup')
    //click a help link in parent window which is responsible to launch in new tab
    await page.locator('[target="_blank"]').nth(1).click()
    await page.waitForTimeout(2000)
    //We can store the final result of const newPage = await page.waitForEvent("popup")
    const helptab = await page.waitForEvent('popup')
    await page.waitForLoadState()
    //assert text visible in help page
     await expect(helptab.getByRole('link',{name:'Google Account Help'}).nth(0)).toBeVisible()
    await helptab.getByText('Community',{exact:true}).nth(1).click({force:true})
    console.log(`help tab title is ${await helptab.title()}`)
    await page.waitForTimeout(2000)
    await helptab.close()
    //back to parent window
    await page.bringToFront()
    await page.waitForTimeout(2000)
    console.log(`parent title is ${await page.title()}`)
    await page.locator('#identifierId').fill('pranga010@gmail.com')
    await page.waitForTimeout(2000)
    await page.close()
})