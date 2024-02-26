Feature: Orders

    @wip
    Scenario: User can make an order
        Given I am on the home page
        And I have logged in as TestUser
        And I have no items in my cart
        When I select "Women -> Tops -> Jackets" menu items
        And I click on a product
        And I select size and color
        And I click the Add to Card button
        And I click on the Cart
        And I click the Proceed to Checkout button
        And I select Flat Rate shipping method
        And I click the Next button
        And I click the Place Order button
        And I open the order link
        Then A correct order information is displayed