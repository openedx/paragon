import React from 'react';
import { render, screen } from '@testing-library/react';

import Tooltip from '.';

describe('<Tootltip />', () => {
  it('renders with correct class when variant is added', () => {
    render(<Tooltip id="tooltip" variant="light" />);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip.classList.contains('tooltip-light')).toBe(true);
  });
});
