Feature: Add Items to Cart

  Scenario Outline: Add Items to Cart
    Given I open Application
    When I click icon login
    And I fill correct email <email> and password <password>
    And I click login button
    And I in homepage
    And I select product
    And I click button Beli for add to cart
    Then Items add to cart

    Examples: 
      | email          | password |
      | olaf@gmail.com | olafaja  |

  Scenario: Add Items to Cart - without login
    Given I open Application
    And I in homepage
    And I select product
    And I click button Beli for add to cart
    Then Items add to cart
