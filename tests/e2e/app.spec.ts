import { test, expect } from "../fixtures/index.fixture";

test(
  "Logo leads to the home page",
  {
    tag: "@header",
  },
  async ({ homePage }) => {
    await homePage.header.clickOnLogo();
  }
);

test(
  "Change the site language to Ukrainian",
  {
    tag: "@header",
  },
  async ({ homePage }) => {
    await homePage.header.languageChange();
  }
);