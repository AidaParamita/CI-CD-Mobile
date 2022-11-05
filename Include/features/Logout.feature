Feature: Logout

  Scenario Outline: User logout
    Given I open Application
    When I click icon login
    And I fill correct email <email> and password <password>
    And I click login button
    And I in homepage
    And i click icon logout
    Then I logout

    Examples: 
      | email          | password |
      | olaf@gmail.com | olafaja  |
