import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productTitle() { return $('.page-title span'); }
    get productPrice() { return $('.product-info-price span.price'); }
    get firstSizeButton() { return $('.swatch-option.text'); }
    get firstColorButton() { return $('.swatch-option.color'); }
    get addToCartButton() { return $('#product-addtocart-button'); }
}

export default new ProductPage();