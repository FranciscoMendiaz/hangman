import { test, expect } from 'vitest';
import { Hangman } from '../../src/services/hangman';

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

  expect(() => hangman.checkLetter('is')).toThrow('Only one letter is allowed');
});

test('hangman.checkLetter() does not have the letter', () => {
  const hangman = new Hangman('feraboli');
  expect(() => hangman.checkLetter('k')).toThrow('Letter not in the word');
});

test('hangman.checkLetter() has a correct letter', () => {
  const hangman = new Hangman('feraboli');
  expect(() => hangman.checkLetter('i')).not.toThrow('Letter not in the word');
});

test('hangman.checkLetter() returns the position of the correct letter in the array', () => {
  const hangman = new Hangman('iei');
  expect(hangman.checkLetter('i')).toEqual([0, 2]);
});

test('hangman.checkLetter() returns all the positions of the correct letter in the array', () => {
  const hangman = new Hangman('iei');
  expect(hangman.checkLetter('i')).not.toEqual([0]);
});
