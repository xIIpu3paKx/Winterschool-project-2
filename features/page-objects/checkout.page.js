import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CheckoutPage extends Page {
    get orderNumberLink() { return $('.order-number'); }
}

export default new CheckoutPage();