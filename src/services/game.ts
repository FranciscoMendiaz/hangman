import { gameMessages, hangmanMessages } from '@src/utils/messages';
import { Hangman } from './hangman';

export const maxLives = 6;

export interface Guess {
  letter: string;
  belongsToWord: boolean;
}

export class Game {
  hangman: Hangman;
  lives: number = maxLives;

  // To see if player won
  correctGuesses: number = 0;

  guesses: Guess[] = [];

  constructor(correctWord: string) {
    this.hangman = new Hangman(correctWord);
  }

  takeGuess(letter: string) {
    try {
      letter = letter.toUpperCase().trim();
      if (this.isLetterGuessed(letter)) {
        throw gameMessages.alreadyGuessed;
      }
      const accerted = this.hangman.checkLetter(letter);
      this.correctGuesses = this.correctGuesses + accerted.length;
      this.addCorrectGuess(letter);
      if (this.correctGuesses === this.hangman.word.length) {
        return gameMessages.win;
      }
      return accerted;
    } catch (error) {
      if (error === hangmanMessages.letterNotInWord) {
        this.addIncorrectGuess(letter);
        this.subtractLife();
        if (this.lives === 0) throw gameMessages.gameOver;
      }
      throw error;
    }
  }

  addIncorrectGuess(letter: string) {
    this.guesses.push({ letter: letter, belongsToWord: false });
  }

  addCorrectGuess(letter: string) {
    this.guesses.push({ letter: letter, belongsToWord: true });
  }

  subtractLife() {
    this.lives -= 1;
  }

  isLetterGuessed(letter: string) {
    return this.guesses.some((guess) => guess.letter === letter);
  }
}
