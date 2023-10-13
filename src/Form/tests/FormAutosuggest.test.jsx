import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import FormAutosuggest from '../FormAutosuggest';
import FormAutosuggestOption from '../FormAutosuggestOption';

function FormAutosuggestWrapper(props) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <FormAutosuggest {...props} />
    </IntlProvider>
  );
}

function FormAutosuggestTestComponent(props) {
  return (
    <FormAutosuggestWrapper
      name="FormAutosuggest"
      floatingLabel="floatingLabel text"
      helpMessage="Example help message"
      errorMessageText="Example error message"
      onSelected={props.onSelected}
    >
      <FormAutosuggestOption>Option 1</FormAutosuggestOption>
      <FormAutosuggestOption onClick={props.onClick}>Option 2</FormAutosuggestOption>
      <FormAutosuggestOption>Learn from more than 160 member universities</FormAutosuggestOption>
    </FormAutosuggestWrapper>
  );
}

FormAutosuggestTestComponent.defaultProps = {
  onSelected: jest.fn(),
  onClick: jest.fn(),
};

FormAutosuggestTestComponent.propTypes = {
  /** Specifies onSelected event handler. */
  onSelected: PropTypes.func,
  /** Specifies onClick event handler. */
  onClick: PropTypes.func,
};

describe('render behavior', () => {
  it('renders component without error', () => {
    render(<FormAutosuggestWrapper />);
  });

  it('renders without loading state', () => {
    const { queryByTestId } = render(<FormAutosuggestTestComponent />);
    const spinner = queryByTestId('autosuggest-loading-spinner');
    expect(spinner).not.toBeInTheDocument();
  });

  it('render with loading state', () => {
    const { queryByTestId } = render(<FormAutosuggestWrapper isLoading />);
    const spinner = queryByTestId('autosuggest-loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('renders the auto-populated value if it exists', () => {
    render(<FormAutosuggestWrapper value="Test Value" />);
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  it('renders component with options', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');
    userEvent.click(input);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);
  });

  it('renders with error msg', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    userEvent.click(input);
    userEvent.click(document.body);

    const formControlFeedback = getByText('Example error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders component with options that all have IDs', () => {
    const { getByTestId, getAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const optionItemIds = getAllByTestId('autosuggest-optionitem').map(item => item.id);

    expect(optionItemIds).not.toContain(null);
    expect(optionItemIds).not.toContain(undefined);
  });

  it('confirms that the value of the aria-live attribute on the wrapper component is assertive', () => {
    const { getByTestId } = render(<FormAutosuggestWrapper />);

    expect(getByTestId('autosuggest-screen-reader-options-count').getAttribute('aria-live')).toEqual('assertive');
  });

  it('displays correct amount of options found to screen readers', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    expect(getByText('0 options found')).toBeInTheDocument();
    userEvent.click(input);

    expect(getByText('3 options found')).toBeInTheDocument();
  });
});

describe('controlled behavior', () => {
  it('sets input value based on clicked option', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const menuItem = getByText('Option 1');
    userEvent.click(menuItem);

    expect(input.value).toEqual('Option 1');
  });

  it('calls onSelected based on clicked option', () => {
    const onSelected = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onSelected={onSelected} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const menuItem = getByText('Option 1');
    userEvent.click(menuItem);

    expect(onSelected).toHaveBeenCalledWith('Option 1');
    expect(onSelected).toHaveBeenCalledTimes(1);
  });

  it('calls the function passed to onClick when an option with it is selected', () => {
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onClick={onClick} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const menuItem = getByText('Option 2');
    userEvent.click(menuItem);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when an option without it is selected', () => {
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onClick={onClick} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const menuItem = getByText('Option 1');
    userEvent.click(menuItem);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should set the correct activedescendant', () => {
    const { getByTestId, getAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const expectedOptionId = getAllByTestId('autosuggest-optionitem')[0].id;
    userEvent.keyboard('{arrowdown}');

    expect(input.getAttribute('aria-activedescendant')).toEqual(expectedOptionId);
  });

  it('filters dropdown based on typed field value with one match', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    userEvent.type(input, 'Option 1');

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(1);
  });

  it('toggles options list', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const dropdownBtn = getByTestId('autosuggest-iconbutton');

    userEvent.click(dropdownBtn);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    userEvent.click(dropdownBtn);
    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);

    userEvent.click(dropdownBtn);
    const reopenedList = queryAllByTestId('autosuggest-optionitem');
    expect(reopenedList.length).toBe(3);
  });

  it('filters dropdown based on typed field value with multiple matches', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    userEvent.type(input, '1');

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(2);
  });

  it('closes options list on click outside', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    userEvent.click(document.body);
    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);
  });

  it('updates screen reader option count based on typed field value with multiple matches', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    expect(getByText('0 options found')).toBeInTheDocument();
    userEvent.click(input);

    expect(getByText('3 options found')).toBeInTheDocument();

    userEvent.click(input);
    userEvent.type(input, '1');

    expect(getByText('2 options found')).toBeInTheDocument();
  });

  it('closes options list when tabbed out and the input is no longer active', () => {
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    expect(document.activeElement).toBe(getByTestId('autosuggest-textbox-input'));

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    userEvent.tab();
    expect(document.activeElement).not.toBe(getByTestId('autosuggest-textbox-input'));

    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);
  });

  it('check focus on input after esc', () => {
    const { getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');
    const dropdownBtn = getByTestId('autosuggest-iconbutton');
    userEvent.click(dropdownBtn);

    userEvent.keyboard('{esc}');

    expect(input.matches(':focus')).toBe(true);
  });
});
