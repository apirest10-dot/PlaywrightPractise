import test, { expect } from "@playwright/test";
test('Handling iframe',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    await page.waitForTimeout(2000)
    //count all iframes
    const allframes = page.frames()
    console.log(allframes.length)
    //count no of iframe tags inside html page
    const iframeCount = await page.locator('iframe').count()
    console.log(iframeCount)
    //identify iframe and store
    const frames = page.frameLocator('.demo-frame')
    //store which you need to drag
    const source = frames.locator('#draggable')
    //store target 
    const target = frames.locator('#droppable')
    await source.dragTo(target)
    const frametext = await target.textContent()
    console.log(frametext)
    await expect(target).toBeVisible()
    await page.waitForTimeout(2000)
    //perfrom some action on main html
    await page.getByText('Button',{exact:true}).click()
    await page.waitForTimeout(3000)
})
test('Handling checkbox in iframe',async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.waitForTimeout(2000)
    //identify iframe and store
    const frame = page.frameLocator('.demo-frame')
    //get collection of all checkboxes
    //const allcheckboxes = frame.locator('.ui-checkboxradio-label.ui-corner-all.ui-button.ui-widget')
    const allcheckboxes = frame.locator('[type="checkbox"]')
    const eachcheckbox = await allcheckboxes.allInnerTexts()
    console.log(`No of check and radio ${eachcheckbox.length}`)
    eachcheckbox.forEach(element => {
        console.log(element)
    });
})