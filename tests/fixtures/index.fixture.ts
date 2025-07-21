import { test as base } from "@playwright/test";

import HomePage from "../pages/home/home.pom";

type Pages = {
  homePage: HomePage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
  },
});
export { expect } from '@playwright/test';