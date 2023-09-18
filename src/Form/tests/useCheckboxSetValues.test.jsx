/* eslint-disable react/button-has-type */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useCheckboxSetValues from '../useCheckboxSetValues';

const VALUES = 'values';

function Example() {
  const [values, {
    add, remove, set, clear,
  }] = useCheckboxSetValues(['cheddar']);
  return (
    <>
      <span data-testid={VALUES}>{values.join(' ')}</span>
      <button data-testid="add" onClick={() => add('provolone')}>Add</button>
      <button data-testid="remove" onClick={() => remove('provolone')}>Remove</button>
      <button data-testid="set" onClick={() => set(['cheddar', 'swiss', 'provolone'])}>Set</button>
      <button data-testid="clear" onClick={() => clear()}>Clear</button>
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
    const addButton = screen.getByTestId('add');
    const values = screen.getByTestId(VALUES);

    await userEvent.click(addButton);

    expect(values.textContent).toBe('cheddar provolone');
  });

  it('can remove a value', async () => {
    render(<Example />);
    const removeButton = screen.getByTestId('remove');
    const values = screen.getByTestId(VALUES);

    await userEvent.click(removeButton);

    expect(values.textContent).toBe('cheddar');
  });

  it('can replace all values', async () => {
    render(<Example />);
    const setButton = screen.getByTestId('set');
    const values = screen.getByTestId(VALUES);

    await userEvent.click(setButton);

    expect(values.textContent).toBe('cheddar swiss provolone');
  });

  it('can clear all values', async () => {
    render(<Example />);
    const clearButton = screen.getByTestId('clear');
    const values = screen.getByTestId(VALUES);

    await userEvent.click(clearButton);

    expect(values.textContent).toBe('');
  });
});
