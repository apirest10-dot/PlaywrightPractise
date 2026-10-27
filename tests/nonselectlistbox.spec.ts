import test from "@playwright/test";
test('Handling non select listox',async({page})=>{
await page.goto('https://demoqa.com/select-menu')
await page.waitForTimeout(2000)
//identify listbox with div and click on it
await page.locator('div.css-19bb58m').first().click()
await page.waitForTimeout(2000)
await page.locator('#react-select-2-option-2').click()
//identify listbox with div and click on it
await page.waitForTimeout(2000)
await page.locator('div.css-19bb58m').first().click()
await page.waitForTimeout(2000)
await page.locator('#react-select-2-option-0-1').click()
await page.waitForTimeout(2000)
})
test('Handling Multilistbox',async({page})=>{
await page.goto('https://demoqa.com/select-menu')
await page.waitForTimeout(2000)
await page.locator('.css-19bb58m').last().click()
const all_Options = await page.locator('div[role="listbox"]>div').count()
const Option_text = await page.locator('div[role="listbox"]>div').allInnerTexts()
console.log(`No of options ${all_Options}`)
console.log(Option_text)
for(let i=0;i<all_Options;i++)
{
await page.waitForTimeout(2000)
await page.locator('#react-select-4-option-'+i).click()

}


})