import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get firstProductPhoto() { return $('.product-image-photo'); }
}

export default new ProductsPage();