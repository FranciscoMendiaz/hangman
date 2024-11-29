import {
  render,
  screen,
  cleanup,
  renderHook,
  fireEvent,
} from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import App from '../../src/App';
import { Game } from '../../src/services/game';
import { useState } from 'react';
import Words from '../../src/components/words';
import Incorrect from '../../src/components/incorrect';

describe('App component', () => {
  afterEach(cleanup);

  const gameObj = new Game('df');

  it('should render the App component', () => {
    render(<App />);
  });

  it('should render the Words component', () => {
    render(<Words />);
  });

  it('should set the game in the state', () => {
    render(<App />);

    const { result } = renderHook(() => {
      const [game] = useState(gameObj);
      return game;
    });

    screen.getByText(`Vidas restantes: ${result.current.lives}`);
  });

  it('should have the input and try button', () => {
    render(<App />);

    screen.getByRole('letter-input');
    screen.getByRole('try-button');
  });

  it('should have the input and try button', () => {
    render(<App />);

    screen.getByRole('letter-input');
    screen.getByRole('try-button');
  });

  it('should record a letter in the input element (useState also should work)', () => {
    render(<App />);

    const input = screen.getByRole('letter-input');
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input.value).toBe('a');
  });

  it('should restart the game', () => {
    render(<App />);

    const { result } = renderHook(() => {
      const [game] = useState(gameObj);
      return game;
    });

    fireEvent(
      screen.getByRole('new-game-button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(result).not.toEqual(gameObj);
  });
});