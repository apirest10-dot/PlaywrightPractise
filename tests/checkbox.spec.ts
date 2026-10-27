import test, { expect } from "@playwright/test";
test('Checking Checkbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/checkboxes')
    await page.waitForTimeout(2000)
    //verify check is checked or not
    const checkbox_status:boolean =await page.locator('#checkbox1').isChecked()
    console.log(`Check box status ${checkbox_status}`)
    //assert checkbox not to be checked
    await expect(page.locator('#checkbox1')).not.toBeChecked()
    //check checkbox
    await page.locator('#checkbox1').check()
    await page.waitForTimeout(2000)
    //assert checkbox  to be checked
    await expect(page.locator('#checkbox1')).toBeChecked()
    await page.waitForTimeout(2000)
    await page.locator('#checkbox1').uncheck()
    await page.waitForTimeout(2000)
    //assert checkbox not to be checked
    await expect(page.locator('#checkbox1')).not.toBeChecked()
    const All_checkbox =  page.locator('div.form-check')
    const checkbox_count = await All_checkbox.count()
    console.log(`No of checkboxes are ${checkbox_count}`)
    await page.waitForTimeout(2000)
    for(let i=0;i<checkbox_count;i++)
    {
        console.log( await All_checkbox.nth(i).innerText())
    }
   await page.waitForTimeout(2000)
})