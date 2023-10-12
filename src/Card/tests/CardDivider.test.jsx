import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDivider from '../CardDivider';

describe('correct rendering', () => {
  it('renders default divider', () => {
    render(<CardDivider data-testid="card-divider" />);
    const divider = screen.getByTestId('card-divider');

    expect(divider).toBeTruthy();
  });

  it('renders divider with custom className', () => {
    const className = 'my-class-name';
    const { container } = render(<CardDivider className={className} />);
    const divider = container.querySelector('.my-class-name');

    expect(divider).toBeTruthy();
  });
});
