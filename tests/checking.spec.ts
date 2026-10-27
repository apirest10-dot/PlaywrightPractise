import test from "@playwright/test";
test('Checking title and Url',async({page})=>{
    //launch url
    await page.goto('http://flipkart.com')
    //print page title and length
    const pagetitle = await page.title()
    console.log(pagetitle)
    console.log(pagetitle.length)
    //print page url and length of url
    const strUrl =   page.url()
    console.log(strUrl)
    console.log(strUrl.length)
})