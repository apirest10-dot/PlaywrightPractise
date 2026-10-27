import test from "@playwright/test";

test('Checking Page Title',async function({page}){
    //launch url
    await page.goto('https://google.com')
    //hard time
    await page.waitForTimeout(2000)
    const Expected_Title:string ='Google'
    const Actual_Title:string = await page.title()
    if(Actual_Title===Expected_Title)
    {
        console.log(`Title is Matching ${Expected_Title}   ${Actual_Title}`)
    }
    else{
        console.log(`Title is Not Matching ${Expected_Title}   ${Actual_Title}`)
    }
})