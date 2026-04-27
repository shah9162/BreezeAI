import { Page } from '@playwright/test';

export class FloatingCTA {
  constructor(private page: Page) {}

  getContainer() {
    return this.page.locator('.breeze-floating-cta');
  }
}