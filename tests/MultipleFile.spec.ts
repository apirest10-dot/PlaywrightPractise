import test from "@playwright/test";
import path from "path";
test('Multiple File upload',async({page})=>{
    const filepath1 =path.join(__dirname,"../TestData/Imagefile.PNG")
    const filepath2 = path.join(__dirname,"../TestData/student.html")
    const filepath3 = path.join(__dirname,"../TestData/Templates.xlsx")
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(2000)
    await page.locator('#filesToUpload').setInputFiles(
        [filepath1
         ,filepath2,
         filepath3]
    )
    const allfilename = await page.locator('ul#fileList>li').allInnerTexts()
   // console.log(allfilename)
   for(const element of allfilename)
   {
    console.log(element)
   }
     await page.waitForTimeout(2000)
})