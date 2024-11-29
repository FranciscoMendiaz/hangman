import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, afterEach, expect } from 'vitest';
import Figure from '../../src/components/figure';

const lives = 6;

describe('Figure component tests', () => {
  afterEach(cleanup);

  it('should render the Figure component', () => {
    render(<Figure lives={lives} />);
  });

  it('should render the head in the Figure component', () => {
    render(<Figure lives={lives - 1} />);
    const head = screen.queryByRole('head');
    expect(document.body.contains(head)).toBe(true);
  });

  it('should render the body in the Figure component', () => {
    render(<Figure lives={lives - 2} />);
    const figureBody = screen.queryByRole('figure-body');
    expect(document.body.contains(figureBody)).toBe(true);
  });

  it('should render the left arm in the Figure component', () => {
    render(<Figure lives={lives - 3} />);
    const leftArm = screen.queryByRole('left-arm');
    expect(document.body.contains(leftArm)).toBe(true);
  });

  it('should render the right arm in the Figure component', () => {
    render(<Figure lives={lives - 4} />);
    const rightArm = screen.queryByRole('right-arm');
    expect(document.body.contains(rightArm)).toBe(true);
  });

  it('should render the left leg in the Figure component', () => {
    render(<Figure lives={lives - 5} />);
    const leftLeg = screen.queryByRole('left-leg');
    expect(document.body.contains(leftLeg)).toBe(true);
  });

  it('should render the right leg in the Figure component', () => {
    render(<Figure lives={lives - 6} />);
    const rightLeg = screen.queryByRole('right-leg');
    expect(document.body.contains(rightLeg)).toBe(true);
  });
});
