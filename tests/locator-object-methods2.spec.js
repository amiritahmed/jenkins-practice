import { test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("@wip inerText(): tetrieves visible text", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>, <textArea> and <select> to retrieve the input value", async ({page}) => {
    let inputLink = page.getByText("Inputs");
    await inputLink.click();
    await page.waitForTimeout(3000);
    let inputBox = page.locator("//input[@type='number']");
    await page.waitForTimeout(3000);
    await inputBox.fill("123");
    await page.waitForTimeout(3000);

    let actualInput = await inputBox.inputValue();
    console.log(actualInput);
  });

  test("getAttrubute(): retrieves the attribute value", async ({ page }) => {
    let abTestingLink = page.locator("text='A/B Testing'");
    let hrefLink = await abTestingLink.getAttribute("href");
    console.log(hrefLink);
  });
});
