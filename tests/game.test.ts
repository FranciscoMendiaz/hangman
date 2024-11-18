import { describe, expect, test } from "vitest";
import { Game, maxLives } from "../src/game";

describe('class game', () => {
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

    try {
      game.takeGuess("w")
    } catch (error) {
      expect(game.guesses).toEqual([{ letter: "w", belongsToWord: false }])
    }
  })

  test("guess should subtract a life if the guess is wrong", () => {
    const game = new Game('Buzz')

    try {
      game.takeGuess("w")
    } catch (error) {
      expect(game.lives).toEqual(maxLives - 1)
    }
  })

  test("guess should throw given more than one letter", () => {
    expect(() => game.takeGuess("iw")).toThrow()
  })

  test("guess should not subtract a life if the guess has more than one letter", () => {
    const game = new Game('Buzz')

    try {
      game.takeGuess("wi")
    } catch (error) {
      expect(game.lives).toEqual(maxLives)
    }
  })

  test("guess should not save the string if the guess has more than one letter", () => {
    const game = new Game('Buzz')

    try {
      game.takeGuess("wi")
    } catch (error) {
      expect(game.guesses).toEqual([])
    }
  })

  test("guess should throw game over if all lives were substracted", () => {
    const game = new Game('Buzz')

    for (let i = 0; i < 4; i++) {
      expect(() => game.takeGuess("w")).toThrow()
    }

    expect(() => game.takeGuess("w")).toThrow("Game Over")
  })

  test("guess should return a message if the guess is correct", () => {
    expect(game.takeGuess("z")).toEqual([2, 3])
  })

  test("guess should save the letter if the guess is correct", () => {
    const game = new Game('Buzz')

    game.takeGuess("u")

    expect(game.guesses).toEqual([{ letter: "u", belongsToWord: true }])
  })

  test("guess should not subtract a life if the guess is correct", () => {
    const game = new Game('Buzz')

    game.takeGuess("u")

    expect(game.lives).toEqual(maxLives)
  })

  test("guess should return win if the word is accerted", () => {
    const game = new Game('Buzz')

    game.takeGuess("B")
    game.takeGuess("z")

    expect(game.takeGuess("u")).toEqual('Win')
  })
})