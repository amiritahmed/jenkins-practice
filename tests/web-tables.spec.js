import { expect, test } from "@playwright/test";

test("Web Table Practice 1", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  let column = await table.locator("//th").all();

  let cells = await table.locator("//td").all();

  expect(rows.length).toBe(9);
  expect(column.length).toBe(13);
  expect(cells.length).toBe(104);

  for (let cell of cells) {
    console.log(await cell.textContent());
  }
});



test("Web Table Practice 2", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  // create a loop that can print each cell's data of each row.
  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let cell of cells) {
      console.log(await cell.textContent());
    }
    console.log("-------------------");
  }

  //Here's the modified loop that excludes the first and last cells of each row:

  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let i = 1; i < cells.length - 1; i++) {
      console.log(await cells[i].textContent());
    }
    console.log("-------------------");
  }
});


test("Web Table Practice 3", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  let checkboxes = await table.locator("//input[@type='checkbox']").all();


  for(let checkbox of checkboxes){

    await checkbox.check();
    await expect(checkbox).toBeChecked();

  };


});