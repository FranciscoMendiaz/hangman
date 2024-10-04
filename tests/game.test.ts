import { describe, expect, test } from "vitest";
import { Game, maxLives } from "../src/game";

describe.only('class game', () => {
  const game = new Game('Buzz')

  test("game is a class", () => {
    expect(game instanceof Game).toBeTruthy
  });

  test("game has lives", () => {
    expect(game.lives).toBeTruthy
  });

  test("game should have the letters guessed saved", () => {
    expect(game.guesses).toEqual([])
  });

  test("game accepts a word from a method", () => {
    expect(() => game.takeGuess("w")).toBeDefined()
  })

  test("guess should throw given a wrong letter", () => {
    expect(() => game.takeGuess("w")).toThrow()
  })

  test("guess should save the letter if the guess is wrong", () => {
    const game = new Game('Buzz')

    expect(() => game.takeGuess("w")).toThrow()

    expect(game.guesses).toEqual(["w"])
  })

  test("guess should subtract a life if the guess is wrong", () => {
    const game = new Game('Buzz')

    expect(() => game.takeGuess("w")).toThrow()

    expect(game.lives).toEqual(maxLives - 1)
  })
})