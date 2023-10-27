import React from 'react';
import { render, screen } from '@testing-library/react';

import FormSwitch from '../FormSwitch';

describe('FormSwitch', () => {
  it('renders an input with a name and value and role=switch', () => {
    render(
      <FormSwitch
        name="color"
        value="green"
        helperText="Describe green"
      >
        Green
      </FormSwitch>,
    );
    const switchInput = screen.getByRole('switch');
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toHaveAttribute('name', 'color');

    const helperText = screen.getByText('Describe green');
    expect(helperText).toBeInTheDocument();
  });
});
