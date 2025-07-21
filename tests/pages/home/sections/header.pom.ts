import { expect, type Locator, type Page } from "@playwright/test";

export class Header {
  private readonly page: Page;

  private readonly logo: Locator;
  private readonly homePageTitle: string;

  private readonly languageLabel: Locator;
  private readonly languageSelector: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.getByTestId("logo");
    this.homePageTitle = "Pokémon Library";

    this.languageLabel = page.getByTestId("language-label");
    this.languageSelector = page.getByTestId("language-selector");
  }

  async clickOnLogo() {
    await this.logo.click();
    await expect(this.page).toHaveTitle(this.homePageTitle);
  }

  async languageChange() {
    await expect(this.languageLabel).toContainText("Language");
    await this.languageSelector.selectOption("uk");
    await expect(this.languageLabel).toContainText("Мова");
  }
}
