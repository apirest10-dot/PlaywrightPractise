import test, { expect } from "@playwright/test";
test('Selecting date from claender',async({page})=>{
    const dob ='7-Mar-1980'
    const[date,month,year]=dob.split('-')
     await page.goto('https://flights.qedgetech.com/register.html')
     //click date picker textbox to open
     await page.locator('#popupDatepicker').click()
     await page.waitForTimeout(2000)
     //select year from calender
     await page.locator('.ui-datepicker-year').selectOption({label:year})
     await page.waitForTimeout(2000)
     //select month from calender
    await page.locator('.ui-datepicker-month').selectOption({label:month})
    await page.waitForTimeout(2000)
    //store table into one varibale
    const webtable = page.locator('.ui-datepicker-calendar')
    //get all rows with tr html tag
    const allRows = webtable.locator('tbody tr')
    //count all rows
    const rowCount = await allRows.count()
    //iterate all rows
    for(let i=1;i<rowCount;i++)
    {
       //get all cells in each row with td tag
       const allcells = allRows.nth(i).locator('td')
       //count all cells
       const cellCount =await allcells.count()
       //iterate all cell
       for(let j=0;j<cellCount;j++)
       {
        if( await allcells.nth(j).innerText()===date)
        {
            await allcells.nth(j).click()

        }
       }
    }
    //capture selected date
    const selectedDate = await page.locator('#popupDatepicker').inputValue()
    console.log(selectedDate)
    await page.waitForTimeout(2000)
   
})
test('Second way to select date',async({page})=>{
    const dob ='9-Feb-2008'
    const[date,month,year]=dob.split('-')
     await page.goto('https://flights.qedgetech.com/register.html')
     //click date picker textbox to open
     await page.locator('#popupDatepicker').click()
     await page.waitForTimeout(2000)
     //select year from calender
     await page.locator('.ui-datepicker-year').selectOption({label:year})
     await page.waitForTimeout(2000)
     //select month from calender
    await page.locator('.ui-datepicker-month').selectOption({label:month})
    await page.waitForTimeout(2000)
    //select date from calender
    await page.locator(`//a[text()=${date}]`).click()
   //capture selected date
    const selectedDate = await page.locator('#popupDatepicker').inputValue()
    console.log(selectedDate)
    await page.waitForTimeout(2000)
    
})
test('Handling Caleder2',async({page})=>{
    const dob = "20/February/2024"
    const[date,month,year]=dob.split('/')
    await page.goto('https://jqueryui.com/datepicker/')
    await page.waitForTimeout(2000)
    //store frame into one varibale
    const frame = page.frameLocator('.demo-frame')
    //click textbox to open calender
    await frame.locator('#datepicker').click()
    //store calender year into locator
    const calyear = frame.locator('.ui-datepicker-year')
    //store calender month into locator
    const calMonth = frame.locator('.ui-datepicker-month')
      while((await calyear.textContent()!=year)||(await calMonth.textContent())?.toLowerCase()!==month.toLowerCase())
    {
        //click prvvious button
        await frame.getByText('Prev',{exact:true}).click()

    }
    //select date from calender
    await frame.locator(`//a[text()=${date}]`).click()
    //capture selected date
    const selectedDate = await frame.locator('#datepicker').inputValue()
    console.log(selectedDate)
    await page.waitForTimeout(2000)


})

test('selecting date from calender',async({page})=>{
    let dob ='20/december/2022'
    const[date,month,year]=dob.split('/')
    await page.goto('https://jqueryui.com/datepicker/')
    await page.waitForTimeout(2000)
    //store iframe
    const frame = page.frameLocator('.demo-frame')
    //clik on testox to open calender
    await frame.locator('#datepicker').click()
    //locate year
    const calyear = frame.locator('.ui-datepicker-year')
    //locate month
    const calMonth = frame.locator('.ui-datepicker-month')
    while((await calyear.textContent()!=year)||(await calMonth.textContent())?.toLowerCase()!==month)
    {
        //click prvvious button
        await frame.getByText('Prev',{exact:true}).click()

    }
    await frame.locator(`//a[text()=${date}]`).click()
    const selectedate = await frame.locator('#datepicker').inputValue()
    console.log(selectedate)
    await page.waitForTimeout(2000)
  // await expect.soft(frame.locator('.hasDatepicker')).toHaveText('12/20/2022')

})