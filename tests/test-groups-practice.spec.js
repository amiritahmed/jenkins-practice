import { test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    //await page.waitForTimeout(3000);
  });

  // create afterEach to navigate to https://practice.cydeo.com/
  test.afterEach(async ({ page }) => {
    //await page.waitForTimeout(3000);
  });

  test("Left Click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test("Right Click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });
  });

  test("Hover", async ({ page }) => {

          await page.click("text='Hovers'");

          //await page.hover("//img[@alt='User Avatar']");

          let elements = await page.locator("//img[@alt='User Avatar']").all();

          for (let each of elements) {
            //await page.waitForTimeout(1000);
            await each.hover();
          }

  });


  test("Mouse wheel scrolling", async ({ page }) => {
    await page.mouse.wheel(0, 4000); 
  });

  test("Scrolling to specific element", async ({ page }) => {
    let InputsLink = page.getByText("Inputs");
    InputsLink.scrollIntoViewIfNeeded(); // right before clicking it will put it in the view port
    //await page.waitForTimeout(3000);
    await InputsLink.click();
  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    //await page.waitForTimeout(3000);
    //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");

    let squesreA = page.locator("//div[@id='column-a']");
    let squesreB = page.locator("//div[@id='column-b']");

    await squesreA.dragTo(squesreB);
  });


});
