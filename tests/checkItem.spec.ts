import test, { Locator } from "@playwright/test";
test('Verify Option In Listbox',async({page})=>{
    let Expected_Option:string ='books'
    let Option_Exist:boolean =false
    await page.goto('https://amazon.com/',{waitUntil:'networkidle'})
    await page.waitForTimeout(2000)
    const listbox:Locator = page.locator('#searchDropdownBox')
    const all_Options:Locator = listbox.locator('option')
    const count_Options = await all_Options.count()
    console.log(`No of options ${count_Options}`)
    for(let i=1;i<count_Options;i++)
    {
        const Actual_Options = await all_Options.nth(i).innerText()
        console.log(Actual_Options.trim())
        if(Actual_Options.toLowerCase() ===Expected_Option)
        {
            Option_Exist=true
            break

        }
   }
    if(Option_Exist)
    {
        console.log(`Option Found in Listbox ${Expected_Option}`)
    }
    else{
        console.log(`Option Found in Listbox ${Expected_Option}`)
    }
})