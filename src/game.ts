import { Hangman } from "./hangman";

export const maxLives = 5

export class Game {
  hangman: Hangman
  lives: number = maxLives
  correctGuesses: number = 0
  guesses: { letter: string, belongsToWord: boolean }[] = []

  constructor(correctWord: string) {
    this.hangman = new Hangman(correctWord)
  }

  takeGuess(letter: string) {
    try {
      let accerted = this.hangman.checkLetter(letter)
      this.correctGuesses = this.correctGuesses + accerted.length
      this.addCorrectGuess(letter)
      if (this.correctGuesses == this.hangman.word.length)return ("Win")
      return("The letter belongs to the word")
    
    } catch (error) {
      if (error !== "Only one letter is allowed") {
        this.addIncorrectGuess(letter)
        this.subtractLife()
        if (this.lives==0) throw "Game Over"
      }
      throw error
    }
  }

  addIncorrectGuess(letter: string) {
    this.guesses.push({letter: letter, belongsToWord: false})
  }

  addCorrectGuess(letter: string) {
    this.guesses.push({letter: letter, belongsToWord: true})
  }

  subtractLife() {
    this.lives -= 1
  }
}