import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get firstProductPhoto() { return $('div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img'); }
}

export default new ProductsPage();