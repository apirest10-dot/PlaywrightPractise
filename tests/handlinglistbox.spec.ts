import test, { expect, Locator } from "@playwright/test";
test('Handling listbox with select tag',async function({page}){
    await page.goto('https://www.ebay.com/')
    await page.waitForTimeout(2000)
    //store listbox 
    const listbox:Locator = page.locator('#gh-cat')
    //select option in listbox with values
    await listbox.selectOption('Cell Phones & Accessories')
    await page.waitForTimeout(2000)
    //select option in listbox using label
    await listbox.selectOption({label:'Consumer Electronics'})
    await page.waitForTimeout(2000)
     //select option in listbox using value
    await listbox.selectOption({value:'45100'})
    //assert value in listbox
    await expect(listbox).toHaveValue('45100')
      //select option in listbox using index
     await listbox.selectOption({index:8})//index starts from 0,1,2,3..
     await page.waitForTimeout(2000)

})
test('Handling listbox ',async function({page}){
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(2000)
    const dropdown:Locator = page.getByRole('combobox')
    //select option using index
    await dropdown.selectOption({index:40})
    await page.waitForTimeout(3000)
     //select option using label
     await dropdown.selectOption({label:'India'})
     await page.waitForTimeout(3000)
       //select option using value
     await dropdown.selectOption({value:'Macedonia'})  
     await expect(dropdown).toHaveValue('Macedonia')
     await page.waitForTimeout(3000)
      //select option using values
      await dropdown.selectOption('Mexico')
      await page.waitForTimeout(3000)

})