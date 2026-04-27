import { Page } from '@playwright/test';

export class FilterBar {
  constructor(private page: Page) {}


  get personaDropdown() {
    return this.page.locator('select#csol_filterable_content-filter-1');
  }

  get readinessDropdown() {
    return this.page.locator('select#csol_filterable_content-filter-2');
  }

  get clearButton() {
    return this.page.locator("button[type='reset']");
  }

  async selectPersona(persona: string) {
    await this.personaDropdown.click();
    await this.personaDropdown.selectOption({ label: persona });
  }

  async selectReadiness(readiness: string) {
    await this.readinessDropdown.click();
    await this.readinessDropdown.selectOption({label:readiness});
  }

  async clearFilters() {
    await this.clearButton.click();
  }
}