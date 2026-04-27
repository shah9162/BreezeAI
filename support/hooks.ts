import { Before, After,BeforeStep, AfterStep,setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
   if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot();
    await this.attach(screenshot, 'image/png');
  }
  await this.close();
});

BeforeStep(async function (this: CustomWorld) {
  // You can add any setup needed before each step here
});

AfterStep(async function ({result}) {
  // You can add any teardown needed after each step here
});
