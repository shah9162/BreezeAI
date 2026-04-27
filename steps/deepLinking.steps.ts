import { Given,setDefaultTimeout } from '@cucumber/cucumber';
import { ENV } from '../config/env';
import { CustomWorld } from '../support/world';
import { FilterBar } from '../components/FilterBar';
import { CardGrid } from '../components/CardGrid';


Given('user navigates directly to persona filtered URL {string}', async function (this: CustomWorld, persona: string) {
  const url = `${ENV.BASE_URL}/${persona}?${ENV.DEFAULT_QUERY}`;
    console.log('Navigated to URL:', url); // Debug log to verify URL
  await this.page.goto(url);
  this.cardGrid = new CardGrid(this.page);
  this.filterBar = new FilterBar(this.page);
});

Given('user navigates directly to readiness filtered URL {string}', async function (this: CustomWorld, readiness: string) {
  const url = `${ENV.BASE_URL}?maturity=${readiness}&${ENV.DEFAULT_QUERY}`;
  console.log('Navigating to URL:', url); // Debug log to verify URL
  await this.page.goto(url);
  this.cardGrid = new CardGrid(this.page);
  this.filterBar = new FilterBar(this.page);
});

Given(
  'user navigates directly to persona {string} and readiness {string}',
  async function (this: CustomWorld, persona: string, readiness: string) {
    const url = `${ENV.BASE_URL}/${persona}?maturity=${readiness}&${ENV.DEFAULT_QUERY}`;
    console.log('Navigating to URL:', url); // Debug log to verify URL
    await this.page.goto(url);
    this.cardGrid = new CardGrid(this.page);
    this.filterBar = new FilterBar(this.page);
  }
);