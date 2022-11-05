Feature: Registrasi

  Scenario Outline: User create new account
    Given I open Application
    When I click icon login
    And I fill correct fullname <fullname> email <email> and password <password>
    And I click register button
    Then I in homepage

    Examples: 
      | fullname | email             | password   |
      | Nessie3  | nessie3@gmail.com | nessie3aja |
      |          | nessie3@gmail.com | nessie3aja |
