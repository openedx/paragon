import React from 'react';
import { render, screen } from '@testing-library/react';
import Truncate from '.';

describe('<Truncate />', () => {
  render(
    <Truncate.Deprecated className="pgn__truncate">
      Learners, course teams, researchers, developers.
    </Truncate.Deprecated>,
  );
  it('render with className', () => {
    const element = screen.getByText(/Learners, course teams, researchers, developers./i);
    expect(element).toBeTruthy();
    expect(element.className).toContain('pgn__truncate');
    expect(element.getAttribute('aria-label')).toBe('Learners, course teams, researchers, developers.');
    expect(element.getAttribute('title')).toBe('Learners, course teams, researchers, developers.');
  });
  it('render with onTruncate', () => {
    const mockFn = jest.fn();
    render(
      <Truncate.Deprecated className="pgn__truncate" onTruncate={mockFn}>
        Learners, course teams, researchers, developers.
      </Truncate.Deprecated>,
    );
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
