Feature: User View Detail

  Scenario Outline: User View Detail
    Given I open Application
    When I click icon login
    And I fill correct email <email> and password <password>
    And I click login button
    And I in homepage
    Then I see detail product

    Examples: 
      | email          | password |
      | olaf@gmail.com | olafaja  |

  Scenario: User View Detail - without login
    Given I open Application
    And I in homepage
    Then I see detail product
