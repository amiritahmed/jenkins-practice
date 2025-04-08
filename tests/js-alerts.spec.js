import { test } from "@playwright/test";

test.describe("Test Group", () => {

  // Create beforeEach to navigate to https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/javascript_alerts");
  });

  test("Regular Alert Handled authomatically by playwright", async ({page}) => {
    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();
  });


  test("Regular Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Aler Message:${alert.message()}`);
      await alert.accept();
    });

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();
  });


  test("Confirmation Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Aler Message:${alert.message()}`);
      await alert.dismiss();
    });

    let clickForJSAlertConfirmButton = page.locator("//button[contains(text(), 'JS Confirm')]");
    await clickForJSAlertConfirmButton.click();
  });


  test("prompt Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Aler Message:${alert.message()}`);
      await alert.accept("CYDEO");
    });

    let clickForJSAPromptAlertButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSAPromptAlertButton.click();
    //await page.waitForTimeout(3000);
  });


  //enter value and dismiss
  test("prompt Alert Dismiss", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`Aler Message:${alert.message()}`);
      await alert.dismiss("CYDEO");
    });

    let clickForJSAPromptDismissButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSAPromptDismissButton.click();
    //await page.waitForTimeout(3000);
  });



});
