import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    get signInLink() { return $('//header[@class="page-header"]//a[contains(text(), "Sign In")]'); }
    get greetMessage() { return $('.page-header .logged-in'); }
    
    get dropdownButton() { return $('.page-header button[data-action=customer-menu-toggle]'); }
    dropdownItem(text) {
        return $(`//header//div[@class="customer-menu"]//a[contains(text(), "${text}")]`);
    }

    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/');
    }

    async selectUserDropdown(text) {
        await this.dropdownButton.click();
        await this.dropdownItem(text).click();
    }
}

export default new HomePage();