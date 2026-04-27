import { Page } from '@playwright/test';

export class CardGrid {
  constructor(private page: Page) {}

  get cards() {
    return this.page.locator('li.csol-filterable-content-item');
  }

  async getCardCount(): Promise<number> {
    return await this.cards.count();
  }

   getFirstCard() {
    return this.cards.first();
  }
}