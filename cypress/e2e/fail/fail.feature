Feature: Fail the game

  Scenario: Fail the game
    Given The game has started with a random word
    When I type all the incorrect letters of the word
    Then I should see the game over toast
