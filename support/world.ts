import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { CardGrid } from '../components/CardGrid';
import { LibraryPage } from '../pages/LibraryPage';
import { FilterBar } from '../components/FilterBar';
import { DetailHero } from '../components/DetailHero';
import { FloatingCTA } from '../components/FloatingCTA';
import { Stepper } from '../components/Stepper';
import { RelatedUseCases } from '../components/RelatedUseCases';
import { Testimonials } from '../components/Testimonials';
import { FullWidthCTA } from '../components/FullWidthCTA';
import { GoDeeper } from '../components/GoDeeper';
import { SearchBar } from '../components/SearchBar';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  cardGrid!: CardGrid; // add this
  libraryPage!: LibraryPage;
  filterBar!: FilterBar;
  newPage!: Page;
  oldUrl!: string;
  detailHero!: DetailHero;
  floatingCTA!: FloatingCTA;
 stepper!: Stepper;
 relatedUseCases!: RelatedUseCases;
 testimonials!: Testimonials;
 fullWidthCTA!: FullWidthCTA;
 goDeeper!: GoDeeper;
 searchBar!: SearchBar;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);