import test, { expect, Locator } from "@playwright/test";

test('Handling alert',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)
      //to intracte with doalog window we need to create dial listner
    page.on('dialog',async(dialog)=>{
       //return type of dialog
       const alertype = dialog.type()
       console.log(alertype) 
       //return dialog message
       const alertmessage = dialog.message()
       console.log(alertmessage)
        await page.waitForTimeout(3000)
       dialog.accept()
      })
    await page.getByText('Click for JS Alert',{exact:true}).click()
    //await page.waitForTimeout(2000)
    const webtaext = await page.locator('#result').textContent()
    console.log(webtaext)
    //assert text
    await expect(page.locator('#result')).toContainText(/You successfully/)
    await page.waitForTimeout(3000)
})
test('Handling confirm',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.dismiss()
    })
    await page.getByText('Click for JS Confirm',{exact:true}).click()
    await page.waitForTimeout(3000)
    const webtext:Locator = page.locator('#result')
    const text =await webtext.innerText()
    console.log(text)
    await expect(webtext).toBeVisible()
    await page.waitForTimeout(3000)
})
test('Handling propmt',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(2000)
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.accept('Iam playWright')
         })
        await page.getByText('Click for JS Prompt').click()
        await page.waitForTimeout(3000)
        const webtext:Locator = page.locator('#result')
        const text:any = await webtext.textContent()
        console.log(text)
        await expect(webtext).toHaveText(text)
        await page.waitForTimeout(3000)

})
