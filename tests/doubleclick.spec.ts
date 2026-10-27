import test, { expect, Locator } from "@playwright/test";

test('Double click element',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.waitForTimeout(2000)
    //store double click element
    const doubleelement:Locator = page.getByText('Double click me',{exact:true})
    //double click element
   // await doubleelement.dblclick()
   //seconway to double click
   await doubleelement.click({clickCount:2})
    //capture text 
    const elementText = await page.locator('#double-click-result').innerText()
    console.log(elementText)
    //assert text
    await expect(page.locator('#double-click-result')).toContainText(/Congrats/)
     await page.waitForTimeout(2000)
})
