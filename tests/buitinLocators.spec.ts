import test, { expect } from "@playwright/test";
//test.describe.configure({timeout:35000})
test('Built in Locator',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    //await page.waitForTimeout(3000)
    await page.getByRole('textbox',{name:'First Name'}).fill('test')
    await page.getByPlaceholder('Enter last name').fill('qedgetech')
    //await expect()
    await page.getByRole('textbox',{name:'Phone number'}).last().fill('4565765887')
    await page.getByRole('combobox').selectOption('India')
    await page.getByPlaceholder('Enter email').fill('Hydd')
    await page.getByRole('textbox',{name:'Password'}).fill("Test@#$")
    await page.getByText('I agree with the terms and conditions').click({timeout:40000})
    await page.getByText('Register',{exact:true}).nth(1).click()
    const element = page.locator('').all()
   // const element = page.locator('').allTextContents()
    
    
})
