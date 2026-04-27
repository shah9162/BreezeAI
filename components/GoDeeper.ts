import {Page} from '@playwright/test';

export class GoDeeper {
  constructor(private page: Page) {}    
  
  get getGoDeeperCards() {
    return this.page.locator('div.breeze-go-deeper__card');
  }

   getGoDeeper() {
    return this.page.locator('div#csol_deeper_section_header');
  }

   async getCardsCount() {
     return await this.getGoDeeperCards.count();
  };
}