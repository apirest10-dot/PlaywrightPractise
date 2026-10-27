import test, { expect } from "@playwright/test"
import path from "path"

test("Handling file download scenario", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    await page.waitForTimeout(2000)

    const downloadResult = page.waitForEvent('download')
     console.log(downloadResult);

    await page.locator("#downloadButton").click()

    const download = await downloadResult
    //console.log(download);
        const downloadDir = await path.join(__dirname,"../downloads")
    //console.log(downloadDir);
    
    // C:\Users\pkroy\Videos\PWTSMay26\downloads\abcd.jpg

    // suggestedFilename() - Return the downloaded file name

    const fileName = await download.suggestedFilename()
    console.log(fileName);
    
    const filePath = path.join(downloadDir, fileName)
    console.log(filePath)

   // saveAs(filepath) - Copy the download to a user-specified path

    await download.saveAs(filePath)

   await expect(filePath).toContain(fileName)
   await page.waitForTimeout(5000)
})
test('Download file',async({page})=>{
    await page.goto('https://www.selenium.dev/downloads/')
    await page.waitForTimeout(2000)
    const downloadres = page.waitForEvent('download')
    await page.locator("//a[normalize-space()='4.49.0']").click()
      const download = await downloadres
    await page.waitForTimeout(5000)
    const downloadDir = await path.join(__dirname,"../downloads")
     const fileName = await download.suggestedFilename()
    console.log(fileName);
    const filePath = path.join(downloadDir, fileName)
    console.log(filePath)
    await download.saveAs(filePath)

   await expect(filePath).toContain(fileName)
   await page.waitForTimeout(5000)
})