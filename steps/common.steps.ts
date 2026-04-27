import { Given } from '@cucumber/cucumber';
import { ENV } from '../config/env';
import { CustomWorld } from '../support/world';
import { CardGrid } from '../components/CardGrid';
import { FilterBar } from '../components/FilterBar';
import { LibraryPage } from '../pages/LibraryPage';
import { SearchBar } from '../components/SearchBar';



Given('user navigates to the use case library page', async function (this: CustomWorld) {
  await this.page.goto(`${ENV.BASE_URL}?${ENV.DEFAULT_QUERY}`);
  
    this.cardGrid = new CardGrid(this.page);
    this.libraryPage = new LibraryPage(this.page);
    this.filterBar = new FilterBar(this.page);
    this.searchBar = new SearchBar(this.page);
    await this.libraryPage.acceptCookies();
});