Feature: Calculate Factorial Number

  As an User
  I want to calculate a factorial number
  In order to obtain the right result

  Background: Go to the greatest factorial calculator
    Given I go to the factorial calculator website

  Scenario Outline: Calculate the factorial of <number>
    When I fill out the field with <number>
    And I click on Calculate button
    Then I see that the result is "<factorial>"

    Examples:
      | number | factorial              |
      | 0      | 1                      |
      | 1      | 1                      |
      | 2      | 2                      |
      | 3      | 6                      |
      | 4      | 24                     |
      | 5      | 120                    |
      | 6      | 720                    |
      | 7      | 5040                   |
      | 8      | 40320                  |
      | 20     | 2432902008176640000    |
      | 21     | 51090942171709440000   |
      | 30     | 2.6525285981219107e+32 |
      | 171    | Infinity               |
      | 900    | Infinity               |

  Scenario Outline: Calculate the factorial on "<device>"
    And I change the "<device>"
    When I fill out the field with <number>
    And I click on Calculate button
    Then I see that the result is "<factorial>"

    Examples:
      | number | factorial | device        |
      | 0      | 1         | ipad-2        |
      | 1      | 1         | ipad-mini     |
      | 2      | 2         | iphone-x      |
      | 3      | 6         | samsung-s10   |
      | 4      | 24        | samsung-note9 |
      | 5      | 120       | macbook-15    |