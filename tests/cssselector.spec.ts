import test from "@playwright/test";
import { lstat } from "node:fs";

test('Using css selector',async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(2000)
    await page.locator('input#txtUsername').fill('Admin')
    await page.locator('input[name="txtPassword"]').fill('Qedge123!@#')
    await page.locator('input.button').click()

})
test('Register test',async({page})=>{
    await page.goto('https://flights.qedgetech.com/')
    await page.waitForTimeout(2000)
    await page.locator('div.col-xs-8>a').click()
    await page.locator('input[type="text"]').first().fill('Akhilesh')
    await page.locator("input[class^='form']").nth(1).fill('456789977')
    await page.locator("input[placeholder*='ai']").fill('Test45@gmail.com')
    await page.locator("input.form-control").nth(3).fill('test@1234')
    await page.locator("select[class$='control']").selectOption('Male')
    await page.locator('input[autocomplete="off"]').last().fill('20-12-1987')
    await page.locator('input#flexCheckChecked').click()
     await page.waitForTimeout(2000)
    await page.locator('input.btn.btn-register').click()
     await page.waitForTimeout(4000)
})
 test('using xpath',async({page})=>{
    await page.goto('https://qa-practice.netlify.app/auth_ecommerce')
    await page.waitForTimeout(2000)
    await page.locator('(//*[@class="form-control"])[1]').fill('admin@admin.com')
    await page.locator('//*[@type="password"]').fill('admin123')
    await page.locator('(//*[@class="btn btn-primary"])[1]').click()
 })