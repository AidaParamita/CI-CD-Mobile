Feature: Login

  Scenario Outline: User log in into website using existing acount
    Given I open Application
    When I click icon login
    And I fill correct email <email> and password <password>
    And I click login button
    Then I in homepage

    Examples: 
      | email          | password |
      | olaf@gmail.com | olafaja  |
      |                | olafaja  |
