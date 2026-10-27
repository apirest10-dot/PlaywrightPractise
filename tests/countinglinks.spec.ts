import test from "@playwright/test";
import { link } from "node:fs";

test('Counting Links',async({page})=>{
    await page.goto('https://google.com')
    await page.waitForTimeout(2000)
    //get collection of links which are stored into html tag <a>
    const alllinks = page.locator('a')
    const linkCount = await alllinks.count()
    console.log(`No of links are ${linkCount}`)
    //iterate all links
    for(let i=0;i<linkCount;i++)
    {
        const linktext = await alllinks.nth(i).innerText()
        const linkUrl = await alllinks.nth(i).getAttribute('href')
        console.log(linktext)
        console.log(linkUrl)

    }
})
test('Counting links1',async({page})=>{
     await page.goto('https://yahoo.com')
    await page.waitForTimeout(2000)
    //get collection of links which are stored into html tag <a>
    const alllinks = page.locator('a')
    const linkcount = await alllinks.allInnerTexts()
    console.log(`No of links are ${linkcount.length}`)
    // for(const element of linkcount)
    // {
    //     console.log(element)
    // }
    for(const key in linkcount)
    {
        console.log(`Link Index No ${key}:: ${linkcount[key]}`)
    }

})
