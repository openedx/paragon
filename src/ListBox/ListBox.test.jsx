import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-test-renderer';

import ListBox from '.';
import ListBoxOption from '../ListBoxOption';

describe('ListBox', () => {
  beforeEach(() => {
    render(
      <ListBox>
        <ListBoxOption>test1</ListBoxOption>
        <ListBoxOption>test2</ListBoxOption>
        <ListBoxOption>test3</ListBoxOption>
      </ListBox>,
    );
  });

  it('should have null aria-activedescendant attribute by default', () => {
    const listBoxElement = screen.getByRole('listbox');
    expect(listBoxElement.getAttribute('aria-activedescendant')).toBeNull();
  });

  it('should have correct aria-activedescendant attribute when selectedOptionIndex state is non-null', async () => {
    const listBoxElement = screen.getByRole('listbox');
    const selectedOptionIndex = 1;

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
  });

  it('selectedOptionIndex prop should override selectedOptionIndex state', async () => {
    const listBoxElement = screen.getByRole('listbox');
    const selectedOptionIndex = 2;

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{arrowdown}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
  });

  it('should render a div by default', () => {
    const listBoxElement = screen.getByRole('listbox');
    expect(listBoxElement.tagName.toLowerCase()).toBe('div');
  });

  it('should render an HTML element when passed tag prop is an HTML element', () => {
    const { container } = render(
      <ListBox tag="li">
        <ListBoxOption>test1</ListBoxOption>
      </ListBox>,
    );
    const listBoxElement = container.querySelector('li');
    expect(listBoxElement).toBeInTheDocument();
  });

  it('should have correct default classNames', () => {
    const listBoxElement = screen.getByRole('listbox');
    expect(listBoxElement).toHaveClass('list-group');
  });

  it('should have listbox role', () => {
    const listBoxElement = screen.getByRole('listbox');
    expect(listBoxElement).toHaveAttribute('role', 'listbox');
  });

  it('should have 0 tabIndex', () => {
    const listBoxElement = screen.getByRole('listbox');
    expect(listBoxElement).toHaveAttribute('tabIndex', '0');
  });

  it('should select first ListBoxOption on focus if not ListBoxOption selected', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await waitFor(() => {
      expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
    });
  });

  it('should not select first ListBoxOption on focus if ListBoxOption selected', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');

    await act(() => {
      listBoxElement.focus();
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-1');
  });

  it('should select next ListBoxOption on down arrow key', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-1');
  });

  it('should not select next ListBoxOption on down arrow key if at end of list', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{arrowdown}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-2');
  });

  it('should select previous ListBoxOption on up arrow key', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{arrowup}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should not select previous ListBoxOption on up arrow key if at start of list', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{arrowup}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should not change ListBoxOption selection on non-supported key', async () => {
    const listBoxElement = screen.getByRole('listbox');

    await act(() => {
      listBoxElement.focus();
    });

    await userEvent.keyboard('{leftarrow}');

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should update state when child\'s onSelect is called', async () => {
    const listBoxElement = screen.getByRole('listbox');
    const listBoxOption2 = screen.getAllByRole('option')[1];

    await userEvent.click(listBoxOption2);

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-1');
  });
});
