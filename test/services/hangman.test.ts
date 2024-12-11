/* Los 3 primeros tests ya fueron hablados con el profe, 
prueba cosas del lenguaje pero no tanto test que da valor a lo que se va a construir (medio redundante)*/
import { test, expect, describe } from 'vitest';
import { Hangman } from '../../src/services/hangman';
import { hangmanMessages } from '@src/utils/messages';

describe('Hangman class tests', () => {
  test('hangman is a class', () => {
    const hangman = new Hangman('guille');
    expect(hangman instanceof Hangman).toBe(true);
  });

  test('hangman has a word', () => {
    const hangman = new Hangman('boli');
    expect(hangman.word).toBeTruthy();
  });

  test('hangman has a method checkLetter()', () => {
    const hangman = new Hangman('guille');
    expect(hangman.checkLetter).toBeDefined();
  });

  test('should throw an error message if guessed more then one letter', () => {
    const hangman = new Hangman('guille');

    expect(() => hangman.checkLetter('is')).toThrow(
      hangmanMessages.onlyOneLetter
    );
  });

  test('should throw an error message if the guess is wrong', () => {
    const hangman = new Hangman('guille');
    expect(() => hangman.checkLetter('k')).toThrow(
      hangmanMessages.letterNotInWord
    );
  });

  test('should return an array with the positions of the correct letter in the word', () => {
    const hangman = new Hangman('iei');
    expect(hangman.checkLetter('i')).toEqual([0, 2]);
  });

  test('should not accept a non-letter character', () => {
    //it also indirectly tests the isLetter() function from hangman
    const hangman = new Hangman('hola');
    expect(() => hangman.checkLetter('@')).toThrow(
      hangmanMessages.invalidCharacter
    );
  });
});
