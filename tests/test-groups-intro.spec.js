import {test} from "@playwright/test";

test.describe("User Story @groupTest", () => {

    test.beforeAll(async () => {
    console.log("Before all test cases");
  });
  test.afterAll(async () => {
    console.log("After all test cases");
  });

  test.beforeEach(async ({ page }) => {
    console.log("Before each test case");
  });

  test.afterEach(async ({ page }) => {
    console.log("After each test case");
  });

  test("Test Case 1", async () => {
    console.log("Testing Case 1 is excuted");
  });

  test("Test Case 2", async () => {
    console.log("Testing Case 2 is excuted");
  });

  test("Test Case 3", async () => {
    console.log("Testing Case 3 is excuted");
  });

  test("Test Case 4", async () => {
    console.log("Testing Case 4 is excuted");
  });
});

