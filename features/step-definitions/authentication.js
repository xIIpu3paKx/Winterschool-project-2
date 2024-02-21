import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import signInPage from '../page-objects/signin.page.js';
import myAccountPage from '../page-objects/my-account.page.js';

When('I click on the Sign In link', async function() {
    await homePage.signInLink.click();
});

When('I enter {string} into {word} input field', async function(text, inputTitle) {
    await signInPage.input(inputTitle).setValue(text);
});

When('I click the Sign In button', async function() {
    await signInPage.signInButton.click();
});

Then('My Account page contains email {string}', async function(email) {
    await homePage.selectUserDropdown('My Account');
    await expect(myAccountPage.contactInformationContent)
        .toHaveText(expect.stringContaining(email));
});