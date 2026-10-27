# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: annotations.spec.ts >> Upload Employee Photo
- Location: tests\annotations.spec.ts:22:5

# Error details

```
Test timeout of 90000ms exceeded.
```

```
Error: locator.fill: Test timeout of 90000ms exceeded.
Call log:
  - waiting for locator('#tUsername')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e39]:
    - generic [ref=e40]: LOGIN Panel
    - generic [ref=e41]:
      - textbox [ref=e42]
      - text: Username
    - generic [ref=e43]:
      - textbox [ref=e44]
      - text: Password
    - generic [ref=e46]:
      - button "LOGIN" [ref=e47] [cursor=pointer]
      - link "Forgot your password?" [ref=e49] [cursor=pointer]:
        - /url: /symfony/web/index.php/auth/requestPasswordResetCode
  - generic [ref=e52]:
    - generic [ref=e53]:
      - text: OrangeHRM 4.10.1 © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e54] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    - generic [ref=e55]:
      - link [ref=e56] [cursor=pointer]:
        - /url: http://www.linkedin.com/groups?home=&gid=891077
        - img "LinkedIn OrangeHRM group" [ref=e57]
      - link [ref=e58] [cursor=pointer]:
        - /url: http://www.facebook.com/OrangeHRM
        - img "OrangeHRM on Facebook" [ref=e59]
      - link [ref=e60] [cursor=pointer]:
        - /url: http://twitter.com/orangehrm
        - img "OrangeHRM on twitter" [ref=e61]
      - link [ref=e62] [cursor=pointer]:
        - /url: http://www.youtube.com/orangehrm
        - img "OrangeHRM on youtube" [ref=e63]
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | test.skip('Test Case Under Design',async({page})=>{
  3  |     await page.goto('http://orangehrm.qedgetech.com/')
  4  |     await page.getByText('Forgot your password?').click()
  5  | })
  6  | test.fail('Login should Fail',async({page})=>{
  7  |     await page.goto('http://orangehrm.qedgetech.com/')
  8  |      await page.locator('#txtUsername').fill('Admin2')
  9  |     await page.locator('#txtPassword').fill('Qedge123!@#')
  10 |     await page.locator('#btnLogin').click()
  11 | })
  12 | 
  13 |  test.fixme('Verify Employee Delete', async ({ page }) => { 
  14 |  
  15 |     await page.goto('http://orangehrm.qedgetech.com/'); 
  16 |  
  17 |     // Bug exists in application 
  18 |     // Test will not execute 
  19 |  }); 
  20 | 
  21 |  
  22 | test('Upload Employee Photo', async ({ page }) => { 
  23 |  test.slow()
  24 |    await page.goto('http://orangehrm.qedgetech.com/'); 
> 25 |  await page.locator('#tUsername').fill('Admin2')
     |                                   ^ Error: locator.fill: Test timeout of 90000ms exceeded.
  26 |     // Large file upload 
  27 |     // Takes more time 
  28 |  }); 
```