import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ListBox from '.';
import ListBoxOption from '../ListBoxOption';

describe('ListBox', () => {
  let getByTestId;
  let getAllByRole;

  beforeEach(() => {
    const renderResult = render(
      <ListBox data-testid="listbox">
        <ListBoxOption>test1</ListBoxOption>
        <ListBoxOption>test2</ListBoxOption>
        <ListBoxOption>test3</ListBoxOption>
      </ListBox>,
    );
    getByTestId = renderResult.getByTestId;
    getAllByRole = renderResult.getAllByRole;
  });

  it('should have null aria-activedescendant attribute by default', () => {
    const listBoxElement = getByTestId('listbox');
    expect(listBoxElement.getAttribute('aria-activedescendant')).toBeNull();
  });

  it('should have correct aria-activedescendant attribute when selectedOptionIndex state is non-null', () => {
    const listBoxElement = getByTestId('listbox');
    const selectedOptionIndex = 1;

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
  });

  it('selectedOptionIndex prop should override selectedOptionIndex state', () => {
    const listBoxElement = getByTestId('listbox');
    const selectedOptionIndex = 2;

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
  });

  it('should render a div by default', () => {
    const listBoxElement = getByTestId('listbox');
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
    const listBoxElement = getByTestId('listbox');
    expect(listBoxElement).toHaveClass('list-group');
  });

  it('should have listbox role', () => {
    const listBoxElement = getByTestId('listbox');
    expect(listBoxElement).toHaveAttribute('role', 'listbox');
  });

  it('should have 0 tabIndex', () => {
    const listBoxElement = getByTestId('listbox');
    expect(listBoxElement).toHaveAttribute('tabIndex', '0');
  });

  it('should select first ListBoxOption on focus if not ListBoxOption selected', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should not select first ListBoxOption on focus if ListBoxOption selected', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    fireEvent.focus(listBoxElement);

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-1');
  });

  it('should select next ListBoxOption on down arrow key', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-1');
  });

  it('should not select next ListBoxOption on down arrow key if at end of list', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-2');
  });

  it('should select previous ListBoxOption on up arrow key', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowDown',
      preventDefault: () => {},
    });

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowUp',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should not select previous ListBoxOption on up arrow key if at start of list', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'ArrowUp',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should not change ListBoxOption selection on non-supported key', () => {
    const listBoxElement = getByTestId('listbox');

    fireEvent.focus(listBoxElement);

    fireEvent.keyDown(listBoxElement, {
      key: 'leftArrow',
      preventDefault: () => {},
    });

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });

  it('should update state when child\'s onSelect is called', () => {
    const listBoxElement = getByTestId('listbox');
    const listBoxOption2 = getAllByRole('option')[1];

    fireEvent.focus(listBoxElement.firstChild);
    fireEvent.click(listBoxOption2);

    expect(listBoxElement.getAttribute('aria-activedescendant')).toEqual('list-box-option-0');
  });
});
