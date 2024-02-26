import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ShippingPage extends Page {
    get flatRateRadio() { return $('//td[text()="Flat Rate"]/parent::tr//input'); };
    get flatRatePrice() { return $('//tbody/tr[2]/td[2]/span'); };
    get nextButton() { return $('button[data-role=opc-continue]'); };
} 

export default new ShippingPage();