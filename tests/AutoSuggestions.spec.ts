import test from "@playwright/test";

test('Handling auto suggestions',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(2000)
    //enter some text in textbox
    await page.keyboard.insertText('playwright openings ')
    //get collection of auto suggestions 
    const autosugg = page.locator('ul[role="listbox"]>li')
    //count all suggestion
    const allOptions = await autosugg.allInnerTexts()
    console.log(`No of auto suggestion ${allOptions.length}`)
    allOptions.forEach(element => {
        console.log(element)
    })
})
