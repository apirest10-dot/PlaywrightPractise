import test, { Locator } from "@playwright/test";
test('Counting and checking checkbox',async({page})=>{
    await page.goto('file:///D:/checkbox_1.html')
    await page.waitForTimeout(2000)
    //store all checkboxes
    const all_Checkbox:Locator = page.locator('ype="checkbox"]')
    //count no of checkboxes
    const count_Checkboxes = await all_Checkbox.count()
    console.log(`No of checkboxes ${count_Checkboxes}`)
    for(let i=0;i<count_Checkboxes;i++)
    {
        //verify each check box status 
        const each_checkstatus:boolean = await all_Checkbox.nth(i).isChecked()
        //print each check box name
        const checkbox_name = await all_Checkbox.nth(i).getAttribute('value')
        console.log(`${checkbox_name}: ${each_checkstatus}`)
        if(each_checkstatus)
        {
            all_Checkbox.nth(i).uncheck()
        }
        else{
            all_Checkbox.nth(i).check()
        }
        await page.waitForTimeout(2000)
    }
})