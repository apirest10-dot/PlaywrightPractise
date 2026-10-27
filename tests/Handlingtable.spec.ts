import test, { expect, Locator } from "@playwright/test";
test('Rowcount cell count',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(2000)
    //identify table and store
    const webtable:Locator = page.locator('table#customers')
    //get all rows with tr tag
    const allrows:Locator = webtable.locator('tbody tr')
    //count no of rows
    const rowcount = await allrows.count()
    console.log(`No of rows in a table ${rowcount-1}`)
    //iterate all rows
    for(let i=1;i<rowcount;i++)
    {
        //get cells from each row
        const allcells = allrows.nth(i).locator('td')
        //count all cells
        const cellcount = await allcells.count()
        console.log(`Row No.${i}::cell No. ${cellcount}`)
    }
})
test('Specific row cell data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(2000)
    //identify table and store
    const webtable = page.locator('table#customers')
    const allrows = webtable.locator('tbody tr')
    const rowcount = await allrows.count()
    const cells = allrows.nth(1).locator('td')
    const celldata =  await cells.nth(0).innerText()
    console.log(celldata)

})
test('First all cell data',async({page})=>{
    await page.goto('https://www.w3schools.com/Html/html_tables.asp')
    await page.waitForTimeout(2000)
    //identify table and store
    const webtable = page.locator('table#customers')
    const allrows = webtable.locator('tbody tr')
    const rowcount = await allrows.count()
    const celldata = await allrows.nth(1).locator('td').allInnerTexts()
    celldata.forEach(element => {
        console.log(element)
    });
})
test('Checking specific row',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/web-table')
    await page.waitForTimeout(2000)
    const webtable = page.locator('#peopleTable')
    const row =webtable.locator('tbody tr').filter({
        hasText:'Larry'
    })
    await expect(row).toBeVisible()
    console.log('complete row:')
    console.log(await row.innerText())
})

test('Access complete table data',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/web-table')
    await page.waitForTimeout(2000)
    //store table
    const webtable:Locator = page.locator('#peopleTable')
    //get all rows from table
    const allrows = webtable.locator(' tbody tr')
    //count no of rows
    const rowCount = await allrows.count()
    console.log(`No of rows are ${rowCount}`)
    //iterate all rows
    for(let i=0;i<rowCount;i++)
    {
        //get cells from each row
        const cells = allrows.nth(i).locator('td')
        //count cells
        const cellCount = await cells.count()
        //iterate all cell
        for(let j=0;j<cellCount;j++)
        {
            const celldata = await cells.nth(j).innerText()
            console.log(celldata)
        }
        console.log('================================================')
    }
})
