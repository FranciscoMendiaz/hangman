import { describe, expect, test } from 'vitest';
import { Game, maxLives } from '../../src/services/game';
import { guesses } from '@test/utils/test-data';
import { gameMessages } from '@src/utils/messages';

describe('class game', () => {
  const game = new Game('Buzz');

  test('game is a class', () => {
    expect(game instanceof Game).toBeTruthy();
  });

  test('game has lives', () => {
    expect(game.lives).toBeTruthy();
  });

  test('game should have the letters guessed saved', () => {
    expect(game.guesses).toEqual([]);
  });

  test('game accepts a word from a method', () => {
    expect(() => game.takeGuess('w')).toBeDefined();
  });

  test('guess should throw given a wrong letter', () => {
    expect(() => game.takeGuess('w')).toThrow();
  });

  test('guess should save the letter if the guess is wrong', () => {
    const game = new Game('Buzz');

    try {
      game.takeGuess('w');
    } catch {
      expect(game.guesses).toEqual([{ letter: 'W', belongsToWord: false }]);
    }
  });

  test('guess should subtract a life if the guess is wrong', () => {
    const game = new Game('Buzz');

    try {
      game.takeGuess('w');
    } catch {
      expect(game.lives).toEqual(maxLives - 1);
    }
  });

  test('guess should throw given more than one letter', () => {
    expect(() => game.takeGuess('iw')).toThrow();
  });

  test('guess should not subtract a life if the guess has more than one letter', () => {
    const game = new Game('Buzz');

    try {
      game.takeGuess('wi');
    } catch {
      expect(game.lives).toEqual(maxLives);
    }
  });

  test('guess should not save the string if the guess has more than one letter', () => {
    const game = new Game('Buzz');

    try {
      game.takeGuess('wi');
    } catch {
      expect(game.guesses).toEqual([]);
    }
  });

  test('guess should throw game over if all lives were substracted', () => {
    const game = new Game('Buzz');
    game.lives = 1;
    expect(() => game.takeGuess('w')).toThrow(gameMessages.gameOver);
  });

  test('guess should return a message if the guess is correct', () => {
    expect(game.takeGuess('z')).toEqual([2, 3]);
  });

  test('guess should save the letter if the guess is correct', () => {
    const game = new Game('Buzz');

    game.takeGuess('u');

    expect(game.guesses).toEqual([{ letter: 'U', belongsToWord: true }]);
  });

  test('guess should not subtract a life if the guess is correct', () => {
    const game = new Game('Buzz');

    game.takeGuess('u');

    expect(game.lives).toEqual(maxLives);
  });

  test('guess should return win if the word is accerted', () => {
    const game = new Game('Buzz');

    game.takeGuess('B');
    game.takeGuess('z');

    expect(game.takeGuess('u')).toEqual(gameMessages.win);
  });

  test('should not accept a correct letter already guessed', () => {
    const game = new Game('hola');
    game.guesses = guesses;
    expect(() => game.takeGuess('o')).toThrow(gameMessages.alreadyGuessed);
  });

  test('should not accept an incorrect letter already guessed', () => {
    const game = new Game('hola');
    game.guesses = guesses;
    expect(() => game.takeGuess('b')).toThrow(gameMessages.alreadyGuessed);
  });
});
