Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I click on the Sign In link
        And I enter "whatever@mail.com" into Email input field
        And I enter "Qwer1234" into Password input field
        And I click the Sign In button
        Then I see the welcome message "Welcome, TesterUser TesterLastname"
        And My Account page contains email "whatever@mail.com"