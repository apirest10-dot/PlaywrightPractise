import test, { expect } from "@playwright/test";

test('Validate Login',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    //tobeVisible()assert text in we page visible or not
    await expect(page.getByRole('heading',{name:'Login - Shop'})).toBeVisible()
    await page.getByRole('textbox',{name:'Email'}).fill('admin@admin.com')
    //inputvalue()it return textbox value
    const uservalue:string =await page.getByRole('textbox',{name:'Email'}).inputValue()
    console.log(`Username is ${uservalue}`)
   //tohavevalue()assert that text in a textbox matches with Expected text
    await expect(page.getByRole('textbox',{name:'Email'})).toHaveValue('admin@admin.com')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    const passvalue:string = await page.getByRole('textbox',{name:'Password'}).inputValue()
    console.log(`password is ${passvalue}`)
    await expect(page.getByRole('textbox',{name:'Password'})).toHaveValue('admin123')
    await page.getByRole('button',{name:'Submit'}).click()
    //tocontaintext() assert element containd sepecified text
    await expect(page.getByRole('heading',{name:'SHOPPING CART'})).toContainText(/SHOPPING/)
    //tohaveUrl() Asserts that the page URL matches the expected URL. 
    await expect(page).toHaveURL(/auth_ecommerce/)
    //toHavetitle()   Asserts that the page title matches the expected title. 
    await expect(page).toHaveTitle(/QA Practice/)




})