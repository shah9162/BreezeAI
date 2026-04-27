import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { DetailHero } from '../components/DetailHero';
import { FloatingCTA } from '../components/FloatingCTA';
import { Stepper } from '../components/Stepper';
import { RelatedUseCases } from '../components/RelatedUseCases';
import { Testimonials } from '../components/Testimonials';
import { FullWidthCTA } from '../components/FullWidthCTA';
import { GoDeeper } from '../components/GoDeeper';
import { ENV } from '../config/env';


//let newPage: Page;
//let oldUrl: string;


When('user clicks on the first use case card', async function (this: CustomWorld) {
  const context = this.page.context();
  this.oldUrl = this.page.url();
  //const firstCard = this.cardGrid.getFirstCard();
  const firstCard = this.cardGrid.cards.nth(2);

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    firstCard.click()
  ]);

    this.newPage = newPage;

   const currentUrl = this.newPage.url();
   const debugUrl = currentUrl.includes('?')
  ? `${currentUrl}&${ENV.DEBUG_PARAMS}`
  : `${currentUrl}?${ENV.DEBUG_PARAMS}`;

  await this.newPage.goto(debugUrl);

  this.detailHero = new DetailHero(this.newPage);
  this.floatingCTA = new FloatingCTA(this.newPage);
  this.stepper = new Stepper(this.newPage);
  this.relatedUseCases = new RelatedUseCases(this.newPage);
  this.testimonials = new Testimonials(this.newPage);
  this.fullWidthCTA = new FullWidthCTA(this.newPage);
  this.goDeeper = new GoDeeper(this.newPage);
});

Then('a new tab should be opened', async function () {
  expect(this.newPage).toBeTruthy();
});

Then('the new tab URL should be different from the current page', async function () {
  const newUrl = this.newPage.url();
  expect(newUrl).not.toBe(this.oldUrl);
});

Then('the new tab URL should contain a valid use case slug', async function () {
  const newUrl = this.newPage.url();

  const parts = newUrl.split('/use-cases/');
  expect(parts[1]).toBeTruthy(); // ensures slug exists
});