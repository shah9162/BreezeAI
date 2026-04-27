import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

When('user searches for {string}', async function (this: CustomWorld, keyword: string) {
  await this.searchBar.search(keyword);
  await expect(this.cardGrid.cards.first()).toBeVisible();
});

Then('no use case cards should be displayed', async function (this: CustomWorld) {
  await expect(this.cardGrid.cards).toHaveCount(0);
});

When('user clears the search input', async function (this: CustomWorld) {
  await this.searchBar.searchInput.clear();
});