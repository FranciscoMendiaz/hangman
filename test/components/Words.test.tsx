import {
  render,
  screen,
  cleanup,
  renderHook,
  fireEvent,
} from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import Words from '../../src/components/words';

const guesses = [
  { letter: 'a', belongsToWord: true },
  { letter: 'b', belongsToWord: false },
  { letter: 'o', belongsToWord: true },
];

describe('Words component', () => {
  afterEach(cleanup);

  it('should render the Words component', () => {
    render(<Words correctWord={'hola'} guesses={guesses} />);
  });

  it('should display only the correct letters', () => {
    render(<Words correctWord={'hola'} guesses={guesses} />);

    expect(screen.getByRole('letter-0').textContent).toEqual('_');
    expect(screen.getByRole('letter-1').textContent).toEqual('o');
    expect(screen.getByRole('letter-2').textContent).toEqual('_');
    expect(screen.getByRole('letter-3').textContent).toEqual('a');
  });
});
