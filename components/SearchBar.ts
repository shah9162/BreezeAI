import { Page, Locator } from '@playwright/test';

export class SearchBar {
  constructor(private page: Page) {}

  get searchInput(): Locator {
    return this.page.getByPlaceholder('Search by'); 
  }

  async search(text: string) {
    await this.searchInput.clear();
    await this.searchInput.fill(text);
   
  }

}