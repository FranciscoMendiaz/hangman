import { hangmanMessages } from '@src/utils/messages';

export class Hangman {
  word: string;

  constructor(wordToSet: string) {
    this.word = wordToSet.toUpperCase();
  }

  checkLetter(l: string) {
    if (!this.isLetter(l)) {
      throw hangmanMessages.invalidCharacter;
    }

    if (l.length !== 1) {
      throw hangmanMessages.onlyOneLetter;
    }

    if (!this.word.includes(l.toUpperCase())) {
      throw hangmanMessages.letterNotInWord;
    }

    const array = [];
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === l.toUpperCase()) {
        array.push(i);
      }
    }
    return array;
  }

  isLetter(l: string): boolean {
    const regex = /^[a-zA-ZñÑ]+$/; //regular expression for a string of only letters
    return regex.test(l);
  }
}
