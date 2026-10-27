import test from "@playwright/test";
test('Using arowdown key',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(2000)
    //enter text in textbox using keyboard method
    await page.keyboard.type('Palywright openings ')
    for(let i=1;i<=5;i++)
    {
        //press down arrow
        await page.waitForTimeout(2000)
        await page.keyboard.press('ArrowDown')
    }
    //click enter key in keyboard
    await page.keyboard.press('Enter')
     await page.waitForTimeout(2000)

})
