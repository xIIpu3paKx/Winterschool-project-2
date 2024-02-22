export class Page {
    get cartButton() { return $('.showcart'); }
    get proceedToCheckoutButton() { return $('#top-cart-btn-checkout'); }
}
export default new Page();