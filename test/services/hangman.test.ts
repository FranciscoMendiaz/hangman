import { test, expect, describe } from 'vitest';
import { Hangman } from '../../src/services/hangman';
import { hangmanMessages } from '@src/utils/messages';

describe('Hangman class tests', () => {
  test('hangman is a class', () => {
    const hangman = new Hangman('guille');
    expect(hangman instanceof Hangman).toBe(true);
  });

  test('hangman has a word', () => {
    const hangman = new Hangman('feraboli');
    expect(hangman.word).toBeTruthy();
  });

  test('hangman has a method checkLetter()', () => {
    const hangman = new Hangman('feraboli');
    expect(hangman.checkLetter).toBeDefined();
  });

  test('hangman.checkLetter() receives only one letter', () => {
    const hangman = new Hangman('feraboli');

    expect(() => hangman.checkLetter('is')).toThrow(
      hangmanMessages.onlyOneLetter
    );
  });

  test('hangman.checkLetter() does not have the letter', () => {
    const hangman = new Hangman('feraboli');
    expect(() => hangman.checkLetter('k')).toThrow(
      hangmanMessages.letterNotInWord
    );
  });

  test('hangman.checkLetter() has a correct letter', () => {
    const hangman = new Hangman('feraboli');
    expect(() => hangman.checkLetter('i')).not.toThrow(
      hangmanMessages.letterNotInWord
    );
  });

  test('hangman.checkLetter() returns the position of the correct letter in the array', () => {
    const hangman = new Hangman('iei');
    expect(hangman.checkLetter('i')).toEqual([0, 2]);
  });

  test('hangman.checkLetter() returns all the positions of the correct letter in the array', () => {
    const hangman = new Hangman('iei');
    expect(hangman.checkLetter('i')).not.toEqual([0]);
  });

  test('hangman.checkLetter() should not accept a non-letter character', () => {
    //it also indirectly tests the isLetter() function from hangman
    const hangman = new Hangman('hola');
    expect(() => hangman.checkLetter('@')).toThrow(
      hangmanMessages.invalidCharacter
    );
  });
});
