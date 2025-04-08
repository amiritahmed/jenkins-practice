import { test } from "@playwright/test";

test("SEP Practice @smoke", async ({ page }) => {
  // Login:
  const code = Buffer.from(
    `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`
  ).toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${code}`,
  });

  await page.goto(process.env.SEP_QA_URL);

  // Setp1: Start Application

  let firstNameInputBox = page.locator("//input[@formcontrolname='firstName']");
  await firstNameInputBox.fill("Muhtar");

  let lastNameInputBox = page.locator("//input[@formcontrolname='lastName']");
  await lastNameInputBox.fill("Mahmut");

  let emailInputBox = page.locator("//input[@formcontrolname='email']");
  await emailInputBox.fill("muhtar.mahmut@sep.com");

  let phoneNumberInputBox = page.locator(
    "//input[@formcontrolname='phoneNumber']"
  );
  await phoneNumberInputBox.fill("5555555555");

  let howDidYouHearDropDown = page.locator(
    "//mat-label[text()='How did you hear about us?']"
  );
  await howDidYouHearDropDown.click();

  await page.click("//span[text()='Email']");

  let nextButton1 = page.locator("//button[@type='submit']");
  await nextButton1.click();

  // Setp2: Payment Plan

  let upfrontPaymentPlan = page.locator("#mat-expansion-panel-header-0");
  await upfrontPaymentPlan.click();

  let nextButton2 = page.locator("//button[@class='next-button' and text()='Next']");
  await nextButton2.click();

  // Setp3: Review
  let paymentFrame = page.frameLocator("//iframe[@title='Secure payment input frame']");

  let cardNumberInputBox = paymentFrame.locator("//input[@id='Field-numberInput']" );
  await cardNumberInputBox.fill(process.env.SEP_MASTER_CARD_NUM);

  let expirationDateInputBox = paymentFrame.locator("//input[@id='Field-expiryInput']");
  await expirationDateInputBox.fill(process.env.SEP_MASTER_CARD_EXPIRATION_DATE);

  let securityCodeInputBox = paymentFrame.locator(
    "//input[@id='Field-cvcInput']"
  );
  await securityCodeInputBox.fill(process.env.SEP_MASTER_CARD_CVC);

  let zipCodeInputBox = paymentFrame.locator(
    "//input[@id='Field-postalCodeInput']"
  );
  await zipCodeInputBox.fill(process.env.SEP_MASTER_CARD_ZIP_CODE);

  let termsConditionsCheckBox = page.locator("//input[@id='defaultCheck2']");
  await termsConditionsCheckBox.check();

  let payButton = page.locator(
    "//button[contains(@class, 'next-button') and .//span[text()='Pay']]"
  );

  await payButton.click();
});
