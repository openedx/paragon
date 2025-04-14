import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../Button';
import useCheckboxSetValues from '../useCheckboxSetValues';

const VALUES = 'values';

function Example() {
  const [values, {
    add, remove, set, clear,
  }] = useCheckboxSetValues(['cheddar']);
  return (
    <>
      <span data-testid={VALUES}>{values.join(' ')}</span>
      <Button onClick={() => add('provolone')}>
        Add
      </Button>
      <Button onClick={() => remove('provolone')}>
        Remove
      </Button>
      <Button onClick={() => set(['cheddar', 'swiss', 'provolone'])}>
        Set
      </Button>
      <Button onClick={() => clear()}>
        Clear
      </Button>
    </>
  );
}

describe('useCheckboxSetValues', () => {
  it('has a default value', () => {
    render(<Example />);
    const values = screen.getByTestId(VALUES);
    expect(values.textContent).toBe('cheddar');
  });

  it('can append a value', async () => {
    render(<Example />);
    const addButton = screen.getByRole('button', { name: 'Add' });
    const values = screen.getByTestId(VALUES);

    await userEvent.click(addButton);

    expect(values.textContent).toBe('cheddar provolone');
  });

  it('can remove a value', async () => {
    render(<Example />);
    const removeButton = screen.getByRole('button', { name: 'Remove' });
    const values = screen.getByTestId(VALUES);

    await userEvent.click(removeButton);

    expect(values.textContent).toBe('cheddar');
  });

  it('can replace all values', async () => {
    render(<Example />);
    const setButton = screen.getByRole('button', { name: 'Set' });
    const values = screen.getByTestId(VALUES);

    await userEvent.click(setButton);

    expect(values.textContent).toBe('cheddar swiss provolone');
  });

  it('can clear all values', async () => {
    render(<Example />);
    const clearButton = screen.getByRole('button', { name: 'Clear' });
    const values = screen.getByTestId(VALUES);

    await userEvent.click(clearButton);

    expect(values.textContent).toBe('');
  });
});
