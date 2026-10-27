import test from "@playwright/test";
test('Right click element',async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.waitForTimeout(2000)
    //right click element
    await page.getByText('right click me',{exact:true}).click({button:'right'})
    await page.waitForTimeout(2000)
    page.on('dialog',async(dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(2000)
        dialog.accept()
    })
    await page.getByText('Quit',{exact:true}).click()
    await page.waitForTimeout(2000)
})