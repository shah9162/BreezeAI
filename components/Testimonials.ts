import { Page } from '@playwright/test';

export class Testimonials {
  constructor(private page: Page) {}

  getTestimonials() {
    return this.page.locator('div.csol-testimonials-single');
  }
}