import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import Words from '@src/components/words';
import { guesses } from '@test/utils/test-data';

describe('Words component', () => {
  afterEach(cleanup);

  it('should render the Words component', () => {
    render(<Words correctWord={'HOLA'} guesses={guesses} />);
  });

  it('should display only the correct letters', () => {
    render(<Words correctWord={'HOLA'} guesses={guesses} />);

    expect(screen.getByRole('letter-0').textContent).toEqual('');
    expect(screen.getByRole('letter-1').textContent).toEqual('O');
    expect(screen.getByRole('letter-2').textContent).toEqual('');
    expect(screen.getByRole('letter-3').textContent).toEqual('A');
  });
});
