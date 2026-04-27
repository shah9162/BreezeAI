import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Then('the detail page should be loaded successfully', async function (this: CustomWorld) {
  await this.newPage.waitForLoadState();
  const newUrl = this.newPage.url();
  const parts = newUrl.split('/use-cases/');
  expect(parts[1]).toBeTruthy();
});

Then('the hero section should be visible', async function (this: CustomWorld) {
  await expect(this.detailHero.getTitle()).toBeVisible();
});

Then('the floating CTA section should be visible', async function (this: CustomWorld) {
  await expect(this.floatingCTA.getContainer()).toBeVisible();
});

Then('the testimonials section should be visible', async function (this: CustomWorld) {
  await expect(this.detailHero.getTitle()).toBeVisible();
  await expect(this.testimonials.getTestimonials()).toBeVisible();
});

Then('the stepper section should be visible', async function (this: CustomWorld) {
  await expect(this.stepper.getSteps().first()).toBeVisible();
});

Then('the full width CTA section should be visible', async function (this: CustomWorld) {
  await expect(this.fullWidthCTA.getfullWidthCTA()).toBeVisible();
});

Then('Go Deeper section should be visible', async function (this: CustomWorld) {
  await expect(this.goDeeper.getGoDeeper()).toBeVisible();
});

Then('Go Deeper section should have at least one card', async function (this: CustomWorld) {
  const count = await this.goDeeper.getCardsCount();
  expect(count).toBeGreaterThan(0);
});

Then('related use cases section should be visible', async function (this: CustomWorld) {
  await expect((this.relatedUseCases.getCards()).first()).toBeVisible();

});

Then('only three related use case cards should be displayed', async function (this: CustomWorld) {
  await expect(this.relatedUseCases.getCards()).toHaveCount(3);
 
});