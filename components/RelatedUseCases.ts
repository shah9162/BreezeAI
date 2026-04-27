import { Locator, Page } from '@playwright/test';

export class RelatedUseCases {
  constructor(private page: Page) {}


get relatedUseCasesCards() {
    return this.page.locator('div.csol-cta-cards-card');
  }

     getCards() {
    return this.relatedUseCasesCards
  }
}