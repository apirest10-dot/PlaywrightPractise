import test, { expect, Locator } from "@playwright/test";
test('Handling Multilistbox',async({page})=>{
    await page.goto('file:///D:/MultiListboxHtmlpage.html')
    await page.waitForTimeout(2000)
    //select option with values
    await page.locator('[name="multiSelection"]').selectOption(['Green','White','black'])
      await page.waitForTimeout(3000)
    //select option with label
    await page.locator('[name="multiSelection"]').selectOption([{label:'purple'},{label:'brown'}])
    await page.waitForTimeout(3000)
    //select option with value
    await page.locator('[name="multiSelection"]').selectOption([{value:'blue'},{value:'white'}])
    await expect(page.locator('[name="multiSelection"]')).toHaveValues(['blue','white'])
     await page.waitForTimeout(3000)
    //select option using index
    await page.locator('[name="multiSelection"]').selectOption([{index:0},{index:4},{index:2}])
    await page.waitForTimeout(3000)
})
test('Counting options in listbox',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(2000)
    const listbox:Locator = page.getByRole('combobox')
    //get all option inside listbox
    const allOptions = listbox.locator('option')
    //count no of options
    const countOptions = await allOptions.count()
    console.log(`No of options in Listbox ${countOptions}`)
    //get all option text
    const options = await allOptions.allTextContents()
      for(const key in options)
    {
       console.log(`${key}:: ${options[key].trim()}`) 
    }
})
