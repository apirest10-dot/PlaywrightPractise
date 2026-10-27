import test from "@playwright/test";

test('Checking Url',async({page})=>{

    
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(2000)
    let Expected:string ='https://'
    let Actual:string = page.url()
    if(Actual.startsWith(Expected))
    {
        console.log(`Url is Secured ${Expected}    ${Actual}`)
    }
    else{
        console.log(`Url is Not Secured ${Expected}    ${Actual}`)
    }

})