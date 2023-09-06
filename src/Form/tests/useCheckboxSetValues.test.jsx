/* eslint-disable react/button-has-type */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import useCheckboxSetValues from '../useCheckboxSetValues';

function Example() {
  const [values, {
    add, remove, set, clear,
  }] = useCheckboxSetValues(['cheddar']);
  return (
    <>
      <span data-testid="values">{values.join(' ')}</span>
      <button data-testid="add" onClick={() => add('provolone')}>Add</button>
      <button data-testid="remove" onClick={() => remove('provolone')}>Remove</button>
      <button data-testid="set" onClick={() => set(['cheddar', 'swiss', 'provolone'])}>Set</button>
      <button data-testid="clear" onClick={() => clear()}>Clear</button>
    </>
  );
}

describe('useCheckboxSetValues', () => {
  it('has a default value', () => {
    const { getByTestId } = render(<Example />);
    const values = getByTestId('values');
    expect(values.textContent).toBe('cheddar');
  });

  it('can append a value', () => {
    const { getByTestId } = render(<Example />);
    const addButton = getByTestId('add');
    const values = getByTestId('values');

    fireEvent.click(addButton);

    expect(values.textContent).toBe('cheddar provolone');
  });

  it('can remove a value', () => {
    const { getByTestId } = render(<Example />);
    const removeButton = getByTestId('remove');
    const values = getByTestId('values');

    fireEvent.click(removeButton);

    expect(values.textContent).toBe('cheddar');
  });

  it('can replace all values', () => {
    const { getByTestId } = render(<Example />);
    const setButton = getByTestId('set');
    const values = getByTestId('values');

    fireEvent.click(setButton);

    expect(values.textContent).toBe('cheddar swiss provolone');
  });

  it('can clear all values', () => {
    const { getByTestId } = render(<Example />);
    const clearButton = getByTestId('clear');
    const values = getByTestId('values');

    fireEvent.click(clearButton);

    expect(values.textContent).toBe('');
  });
});
