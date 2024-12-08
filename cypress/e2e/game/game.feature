Feature: Regular game functionality

  Scenario: See placeholders
    Given I open the home page
    Then I should see the amount of letters that the word contains

  Scenario: See correct letter in placeholder
    Given A game has started
    When I type a letter that belongs to the word
    Then The correct letter should appear in the placeholder

  Scenario: See incorrect letter in list and figure built
    Given A game has started
    When I type a letter that does no belongs to the word
    Then The letter should appear in the incorrect letters list
    And the figure should have a head
