import test from "@playwright/test";

test('Capture text and Url',async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(3000)
    const elementText = await page.getByText('Forgot your password?').textContent()
    console.log(elementText)
    const elementUrl =  await page.getByText('Forgot your password?').getAttribute('href')
    console.log(elementUrl)

})

test('Get All Labels',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/register')
    await page.waitForTimeout(2000)
    const allLabels = await page.locator('form#registerForm>div>label').allTextContents()
    console.log(`No of Labels ${allLabels.length}`)
   // console.log(allLabels)
   for(const element of allLabels)
   {
    console.log(element)
   }
})
