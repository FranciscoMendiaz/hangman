import {
  render,
  screen,
  cleanup,
  renderHook,
  fireEvent,
} from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import Incorrect from '../../src/components/incorrect';
import { guesses } from '../utils/test-data';

describe('Incorrect component tests', () => {
  afterEach(cleanup);

  it('should render the Incorrect component', () => {
    render(<Incorrect guesses={guesses} />);
  });

  it('should only display the incorrect letters', () => {
    render(<Incorrect guesses={guesses} />);
    expect(
      screen.getByRole('incorrect-letters-container').textContent
    ).toContainEqual('b');
  });
});
