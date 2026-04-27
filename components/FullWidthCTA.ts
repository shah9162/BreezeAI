import { Page, Locator} from '@playwright/test';

export class FullWidthCTA {
  constructor(private page: Page) {}        

   getfullWidthCTA(): Locator {
    return this.page.locator('div#hs_cos_wrapper_full_width_cta');
  }
}