Feature: Win the game

  Scenario: Win the game
    Given The game has started with a random word
    When I type all the correct letters of the word
    Then I should see the win game toast
