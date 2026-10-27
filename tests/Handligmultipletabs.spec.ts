import test from "@playwright/test";
test('Handling Multiple Windows with child',async({page})=>{
     await page.goto('https://gmail.com');
     await page.waitForTimeout(3000)
   // Store targets: index of the link and the expected text/title for verification
  const links = [
    { index: 1, name: 'Help' },
    { index: 2, name: 'Privacy' },
    { index: 3, name: 'Terms' }
  ];
  for (const link of links) {
    // Start waiting for popup before clicking
    const popupPromise = page.waitForEvent('popup');
    await page.waitForTimeout(3000)
    // Click the specific link based on index
    await page.locator("a[target='_blank']").nth(link.index).click();
        // Wait for the popup to capture the page object
    const newPage = await popupPromise;
    await newPage.waitForLoadState();
    console.log(`Opened ${link.name} window: ${await newPage.title()}`);
    // Perform window-specific logic if needed
    if (link.name === 'Privacy') {
      await newPage.locator("#yDmH0d > c-wiz > div > div.BWB3mf > div.goGIId > div > div > ul > li:nth-child(5) > a").click();
      //await page.waitForTimeout(3000)
      await newPage.waitForLoadState();
    }
  //await page.waitForTimeout(3000)
    // Close the child window to return focus to main flow
    await newPage.close();    
  }

  // Back to parent window actions
  await page.locator('input#identifierId').fill('example@gmail.com');
  await page.waitForTimeout(3000)
  await page.close();
})