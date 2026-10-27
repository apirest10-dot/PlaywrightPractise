import test, { expect } from "@playwright/test";

test('Mouse hover',async function ({page}){
    await page.goto('https://www.spicejet.com/')
    await page.waitForTimeout(3000)
    await page.getByText('Add-ons',{exact:true}).first().hover()
    await page.waitForTimeout(3000)
    await expect(page.getByTestId('test-id-Extra Seat')).toBeVisible()
    await page.waitForTimeout(3000)

})
