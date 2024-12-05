Feature: Game functionality

  Scenario: Open the game
    Given I visit the home page
    Then I should see the game title

  Scenario: See placeholders
    Given I open the home page
    Then I should see the amount of letters that the word contains



