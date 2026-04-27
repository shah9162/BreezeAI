import { Page } from '@playwright/test';

export class DetailHero {
  constructor(private page: Page) {}


   getTitle() {
    return this.page.locator('div.breeze-use-case-header h1'); 
  }
}