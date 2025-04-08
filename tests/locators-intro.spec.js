
import { test } from "@playwright/test";

test("Simple google test @url", async ({ page }) => {
  //test code
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);

  //let searchBox = page.locator("//textarea[@class='gLFyf']");
  //let searchBox = page.locator("//textarea[@id='APjFqb']");
  let searchBox = page.locator("textarea.gLFyf[id='APjFqb']");

  //await searchBox.type("CYDEO");
  await searchBox.fill("CYDEO");
  await searchBox.press("Enter");
  await page.waitForTimeout(3000);
});


/*

<textarea class="gLFyf" aria-controls="Alh6id" 
aria-owns="Alh6id" autofocus="" title="Search" 
value="" aria-label="Search" placeholder="" 
aria-autocomplete="both" aria-expanded="false" 
aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" id="APjFqb" 
maxlength="2048" name="q" role="combobox" rows="1" 
spellcheck="false" jsaction="paste:puy29d" 
data-ved="0ahUKEwj044SVpJ-MAxWEEVkFHTfMKzEQ39UDCBA">
</textarea>

relative xpath: //textarea[@class='gLFyf']

*/