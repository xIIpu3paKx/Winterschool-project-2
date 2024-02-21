import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SignInPage extends Page {
    get signInButton() { return $('#send2.login'); }
    input(title) { return $(`input[title="${title}"]`); }
}

export default new SignInPage();