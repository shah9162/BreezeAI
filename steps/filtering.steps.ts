import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';


When('user selects persona {string}', async function (this: CustomWorld, persona: string) {
  await this.filterBar.selectPersona(persona);
});

When('user selects readiness {string}', async function (this: CustomWorld, readiness: string) {
  await this.filterBar.selectReadiness(readiness);
});

Then('the URL should contain {string}', async function (this: CustomWorld, value: string) {
  await expect(this.page).toHaveURL(new RegExp(value));
  
});

Then('filtered use case cards should be displayed', async function () {
  await expect(this.cardGrid.cards.first()).toBeVisible(); 
});

Given('user has applied persona {string}', async function (this: CustomWorld, persona: string) {
  await this.filterBar.selectPersona(persona);
});

When('user clears all filters', async function () {
  await this.filterBar.clearFilters();
});

Then('the URL should not contain {string}', async function (this: CustomWorld, value: string) {
  const url = this.page.url();
  expect(url.includes(value)).toBeFalsy();
});

Then('default use case cards should be displayed', async function () {
  const count = await this.cardGrid.getCardCount();
  expect(count).toBeGreaterThan(0);
});