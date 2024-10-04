import { Hangman } from "./hangman";

export const maxLives = 5

export class Game {
  hangman: Hangman
  lives: number = maxLives
  guesses: string[] = []

  constructor(correctWord: string) {
    this.hangman = new Hangman(correctWord)
  }

  takeGuess(letter: string) {
    try {
      return this.hangman.checkLetter(letter)
    } catch (error) {
      this.addIncorrectGuess(letter)
      this.subtractLife()
      throw error
    }
  }

  addIncorrectGuess(letter: string) {
    this.guesses.push(letter)
  }

  subtractLife() {
    this.lives -= 1
  }
}