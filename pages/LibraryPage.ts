import {Page,Locator} from "@playwright/test"

export class LibraryPage {
    
    page: Page;
    acceptCookiesButton:Locator;

    constructor( page: Page) {
        this.page = page;
        this.acceptCookiesButton = this.page.locator("button#hs-eu-confirmation-button");

    }  
    
    async acceptCookies() {
    if (await this.acceptCookiesButton.first().isVisible()) {
      await this.acceptCookiesButton.first().click();
    }
  }
}