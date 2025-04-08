import { expect, test } from "@playwright/test";

test("Window pop-up practice", async ({ page }) => {
  // crating event listner for monitoring window pop-up
  let promisedNewPageEvent = page.waitForEvent("popup");

  await page.goto("https://practice.cydeo.com/windows"); // triggers the pop-up event
  await page.click("text='Click Here'");

  //await page.waitForTimeout(3000);
  let newPage = await promisedNewPageEvent; // wait for the promise to be resolved

  await expect(newPage).toHaveTitle("New Window");
  await expect(page).toHaveTitle("Windows");

  //await page.waitForTimeout(3000);

  await page.bringToFront();
  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  //await page.waitForTimeout(3000);

  await newPage.bringToFront();
  let secondWindowElement = newPage.getByText("New Window");
  await expect(secondWindowElement).toBeVisible();

  //await page.waitForTimeout(3000);
});
