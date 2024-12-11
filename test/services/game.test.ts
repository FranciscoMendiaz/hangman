/* Los 4 primeros tests ya fueron hablados con el profe, 
   pruebas cosas del lenguaje pero no tanto test que da valor a lo que se va a construir (medio redundante) */
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

  test('guess should throw game over if all lives were substracted', () => {
    const game = new Game('Buzz');
    game.lives = 1;
    expect(() => game.takeGuess('w')).toThrow(gameMessages.gameOver);
  });

  test('should return a string with the positions of the correct letter', () => {
    expect(game.takeGuess('z')).toEqual([2, 3]);
  });

  test('should save the letter if the guess is correct', () => {
    const game = new Game('Buzz');

    game.takeGuess('u');

    expect(game.guesses).toEqual([{ letter: 'U', belongsToWord: true }]);
  });

  test('guess should return win if the word is accerted', () => {
    const game = new Game('Buzz');

    game.takeGuess('B');
    game.takeGuess('z');

    expect(game.takeGuess('u')).toEqual(gameMessages.win);
  });

  test('should not accept a letter already guessed', () => {
    const game = new Game('hola');
    game.guesses = guesses;
    expect(() => game.takeGuess('o')).toThrow(gameMessages.alreadyGuessed);
  });

});
