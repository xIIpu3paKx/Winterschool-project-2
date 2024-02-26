import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import shippingPage from '../page-objects/shipping.page.js';
import reviewPage from '../page-objects/review.page.js';
import checkoutPage from '../page-objects/checkout.page.js';
import orderPage from '../page-objects/order.page.js';
import headerPage from '../page-objects/header.page.js';
import cartPage from '../page-objects/cart.page.js';
import homePage from '../page-objects/home.page.js';
import { priceStringToNumber } from '../utils/utils.js';

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
    await expect(headerPage.counterNumber).toHaveText("1");
    await headerPage.cartButton.click();
});

When('I click the Proceed to Checkout button', async function() {
    await headerPage.proceedToCheckoutButton.click();
});

When('I select Flat Rate shipping method', async function() {
    this.shippingPrice = await shippingPage.flatRatePrice.getText();
    await shippingPage.flatRateRadio.click();
});

When('I click the Next button', async function() {
    await shippingPage.nextButton.click();
});

When('I click the Place Order button', async function() {
    await reviewPage.placeOrderButton.click();
});

When('I open the order link', async function() {
    const orderNumberLink = await checkoutPage.orderNumberLink;
    this.orderNumber = await orderNumberLink.getText();
    await orderNumberLink.click();
});

Then('A correct order information is displayed', async function() {
    await expect(orderPage.pageTitle)
        .toHaveText(expect.stringContaining(this.orderNumber));

    await expect(orderPage.firstProductName)
        .toHaveText(this.productTitle);

    await expect(orderPage.firstProductPrice)
        .toHaveText(this.productPrice);

    await expect(orderPage.firstProductQty)
        .toHaveText("1");

    await expect(orderPage.firstProductSubtotal)
        .toHaveText(this.productPrice);

    await expect(orderPage.subtotal)
        .toHaveText(this.productPrice);

    await expect(orderPage.shippingPrice)
        .toHaveText(this.shippingPrice);

    const expectedGrandTotal = 
        priceStringToNumber(await orderPage.subtotal.getText()) +
        priceStringToNumber(await orderPage.shippingPrice.getText());

    await expect(orderPage.grandTotal)
        .toHaveText(`$${expectedGrandTotal.toFixed(2)}`);
});

Given('I have no items in my cart', async function() {
    await cartPage.open();
    await cartPage.removeAllProducts();
    await homePage.open();
});