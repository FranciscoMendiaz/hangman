import { describe, expect, test } from "vitest";
import { Guess } from "../src/guess";

describe.only('guess class', () => {
  test("game is a class", () => {
    expect(Guess).toBeDefined
  })

  test('game should have the letters guessed saved', () => {
    expect(Guess.letters).toEqual([]);
  })

  test("checkGuess should be a method", () => {
    expect(Guess.checkGuess).toBeDefined
  })

  //test('guess should save the letter if the guess is wrong', () => {
  //   const game = new Game('Buzz')

  //expect(() => game.takeGuess('w')).toThrow();

  //expect(game.guesses).toEqual([{ letter: 'w', belongsToWord: false }]);
  // })





});