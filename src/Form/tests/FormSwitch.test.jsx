import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormSwitch from '../FormSwitch';

describe('FormSwitch', () => {
  it('renders an input with a name and value and role=switch', () => {
    const { getByRole, getByText } = render(
      <FormSwitch
        name="color"
        value="green"
        helperText="Describe green"
      >
        Green
      </FormSwitch>,
    );
    const switchInput = getByRole('switch');
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toHaveAttribute('name', 'color');

    const helperText = getByText('Describe green');
    expect(helperText).toBeInTheDocument();
  });
});
