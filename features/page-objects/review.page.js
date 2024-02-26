import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ReviewPage extends Page {
    get placeOrderButton() { return $('button[title="Place Order"]'); }
}

export default new ReviewPage();