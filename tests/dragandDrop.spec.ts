import test, { expect, Locator } from "@playwright/test";

test('drag and Drop',async({page})=>{
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html')
    await page.waitForTimeout(2000)
    const source:Locator = page.locator('#draggable')
    const target:Locator = page.locator('#droppable')
    await source.dragTo(target)
    const dragText:string = await page.getByText('Dropped!').last().innerText()
    console.log(dragText)
    await expect(page.getByText('Dropped!').last()).toBeVisible()
    await page.waitForTimeout(2000)

})
test('Scroll to element',async({page})=>{
    await page.goto('https://amazon.in')
    await page.waitForTimeout(4000)
    await page.locator('a.nav_a').nth(4).scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.locator('a.nav_a').nth(4).click()
     await page.waitForLoadState()
    console.log(await page.title())
    await page.waitForTimeout(2000)
})