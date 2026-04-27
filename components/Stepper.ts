import { Page } from '@playwright/test';

export class Stepper {
  constructor(private page: Page) {}

  getSteps() {
    return this.page.locator('section#use_case_stepper');
  }
}