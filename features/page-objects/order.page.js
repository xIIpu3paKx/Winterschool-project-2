import { Page } from './page.js';
import { browser } from '@wdio/globals';

class OrderPage extends Page {
    get pageTitle() { return $('.page-title'); }
    // Selectors for first product
    get firstProductName() { return $('table .product-item-name'); }
    get firstProductSize() { return $('//td[@data-th="Product Name"]//*[text()="Size"]/following-sibling::*'); }
    get firstProductColor() { return $('//td[@data-th="Product Name"]//*[text()="Color"]/following-sibling::*'); }
    get firstProductPrice() { return $('.price .cart-price'); }
    get firstProductQty() { return $('.items-qty .content'); }
    get firstProductSubtotal() { return $('.subtotal .cart-price'); }
    // Selectors for all products
    get subtotal() { return $('.subtotal [data-th=Subtotal]'); }
    get shippingPrice() { return $('[data-th="Shipping & Handling"]'); }
    get grandTotal() { return $('[data-th="Grand Total"]'); }
}

export default new OrderPage();