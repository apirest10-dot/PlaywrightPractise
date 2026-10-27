import test, { expect } from "@playwright/test";
import path from "path";
test('Upload single file',async({page})=>{
    //store path of file into one varibale 
    const filepath =path.join(__dirname,"../TestData/Imagefile.PNG")
    await page.goto('https://qa-practice.netlify.app/file-upload')
    await page.waitForTimeout(2000)
    //uplod file
    await page.locator('#file_upload').setInputFiles(filepath)
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Submit'}).click()
    const element = page.locator('#file_upload_response')
    const message = await element.textContent()
    console.log(message)
    await expect(element).toContainText(/You have successfully/)
    await page.waitForTimeout(2000)
})