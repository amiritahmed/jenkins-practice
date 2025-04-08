import { test } from "@playwright/test";

test.describe("Test Group @nav", () => {

  // create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Check(): checks radio buttons & checkboxes if they haven't been checked yet", async ({ page }) => {

    //let checkboxeslink page.locator("text='Checkboxes'");
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();
    // pause for 3 seconds
    await page.waitForTimeout(3000);

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();
    await page.waitForTimeout(3000);
  });

  test("Uncheck(): unchecks radio buttons & checkboxes if they haven't been unchecked yet", async ({page,}) => {

    let checkboxesLink = page.getByText("Checkboxes");
      await checkboxesLink.click();
      await page.waitForTimeout(3000);

      //let checkbox2 = page.locator("input#box2[type='checkbox'][checked]");
      let checkbox2 = page.locator("#box2");
      await checkbox2.uncheck();
      await page.waitForTimeout(3000);

  });

  test("SelectOption", async ({ page }) => {

    let dropDownnLink = page.getByText("Dropdown");
    await dropDownnLink.click();
    // pause for 3 seconds
    await page.waitForTimeout(3000);
    let simpleDropdown = page.locator("//select[@id='dropdown']");
    await page.waitForTimeout(3000);
    //await simpleDropdown.selectOption("1"); //select by value
    //await simpleDropdown.selectOption({label: "Option 1"}); // select by text 
    await simpleDropdown.selectOption({index: 1}); // select by index 
    await page.waitForTimeout(3000);
  });

});
