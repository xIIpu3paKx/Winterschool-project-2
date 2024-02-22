import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import shippingPage from '../page-objects/shipping.page.js';

When('I click on a product', async function() {
    await productsPage.firstProductPhoto.click();
});

When('I select size and color', async function() {
    const sizeElement = await productPage.firstSizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getText();

    const colorElement = await productPage.firstColorButton;
    await colorElement.click();
    this.color = await colorElement.getAttribute('option-label');
});

When('I click the Add to Card button', async function() {
    this.productTitle = await productPage.productTitle.getText();
    this.productPrice = await productPage.productPrice.getText();

    await productPage.addToCartButton.click();
});

When('I click on the Cart', async function() {
    await productPage.cartButton.click();
});

When('I click the Proceed to Checkout button', async function() {
    await productPage.proceedToCheckoutButton.click();
});

When('I select Flat Rate shipping method', async function() {
    this.price = await shippingPage.flatRatePrice.getText();
    await shippingPage.flatRateRadio.click();
});