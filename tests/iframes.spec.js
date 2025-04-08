import { test, expect } from "@playwright/test";

test("iframe test", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/iframe");

  //xpath for iframe
  //let myFrame = page.frameLocator("//iframe[@id='mce_0_ifr']");
  //cssSelector for iframe
  let myFrame = page.frameLocator("iframe#mce_0_ifr");
  let elementInsideFrame = myFrame.locator(
    "//body[@id='tinymce' and @data-id='mce_0']"
  );

  await elementInsideFrame.clear();
  //await elementInsideFrame.press("Control+A", "delete");
  //await elementInsideFrame.press("Control+A", "Backspace");

  await elementInsideFrame.fill("Hello Cydeo!");
  await expect(elementInsideFrame).toHaveText("Hello Cydeo!");
});
