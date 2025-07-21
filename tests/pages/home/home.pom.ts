import { expect, type Locator, type Page } from "@playwright/test";
import { Header } from "./sections/header.pom";

export default class HomePage {
  private readonly page: Page;
  public readonly header: Header;

  private readonly homePageTitle: string;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);

    this.homePageTitle = "Pokémon Library";
  }

  async goto() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle(this.homePageTitle);
  }
}
