import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import FormAutosuggest from '../FormAutosuggest';
import FormAutosuggestOption from '../FormAutosuggestOption';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

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
      valueRequiredErrorMessageText="Example value required error message"
      selectionRequiredErrorMessageText="Example selection required error message"
      customErrorMessageText="Example custom error message"
      onChange={props.onChange}
      isValueRequired={props.isValueRequired}
      isSelectionRequired={props.isSelectionRequired}
      hasCustomError={props.hasCustomError}
    >
      <FormAutosuggestOption id="option-1-id">Option 1</FormAutosuggestOption>
      <FormAutosuggestOption onClick={props.onClick}>Option 2</FormAutosuggestOption>
      <FormAutosuggestOption>Learn from more than 160 member universities</FormAutosuggestOption>
    </FormAutosuggestWrapper>
  );
}

function FormAutosuggestLabelTestComponent() {
  return (
    <FormGroup>
      <FormLabel data-testid="autosuggest-label">
        <h3>Label</h3>
      </FormLabel>
      <FormAutosuggestWrapper>
        <FormAutosuggestOption>Option</FormAutosuggestOption>
      </FormAutosuggestWrapper>
    </FormGroup>
  );
}

FormAutosuggestTestComponent.defaultProps = {
  onChange: jest.fn(),
  onClick: jest.fn(),
  isValueRequired: false,
  isSelectionRequired: false,
  hasCustomError: false,
};

FormAutosuggestTestComponent.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  isValueRequired: PropTypes.bool,
  isSelectionRequired: PropTypes.bool,
  hasCustomError: PropTypes.bool,
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
    render(<FormAutosuggestWrapper value={{ userProvidedText: 'Test Value' }} />);
    expect(screen.getByDisplayValue('Test Value')).toBeInTheDocument();
  });

  it('renders component with options', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');
    await user.click(input);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);
  });

  it('renders with value required error msg', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent isValueRequired />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    await user.click(input);
    await user.click(document.body);

    const formControlFeedback = getByText('Example value required error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders with selection required error msg', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent isSelectionRequired />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    await user.click(input);
    await user.type(input, '1');
    await user.click(document.body);

    const formControlFeedback = getByText('Example selection required error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders with custom error msg', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent hasCustomError />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    await user.click(input);
    await user.click(document.body);

    const formControlFeedback = getByText('Example custom error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders component with options that all have IDs', async () => {
    const user = userEvent.setup();
    const { getByTestId, getAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const optionItemIds = getAllByTestId('autosuggest-optionitem').map(item => item.id);

    expect(optionItemIds).not.toContain(null);
    expect(optionItemIds).not.toContain(undefined);
  });

  it('confirms that the value of the aria-live attribute on the wrapper component is assertive', () => {
    const { getByTestId } = render(<FormAutosuggestWrapper />);

    expect(getByTestId('autosuggest-screen-reader-options-count').getAttribute('aria-live')).toEqual('assertive');
  });

  it('displays correct amount of options found to screen readers', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    expect(getByText('0 options found')).toBeInTheDocument();
    await user.click(input);

    expect(getByText('3 options found')).toBeInTheDocument();
  });

  it('associates labels with the input textbox', () => {
    const { getByTestId } = render(<FormAutosuggestLabelTestComponent />);

    expect(getByTestId('autosuggest-label').getAttribute('for')).toEqual(getByTestId('autosuggest-textbox-input').getAttribute('id'));
  });
});

describe('controlled behavior', () => {
  it('sets input value based on clicked option', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const menuItem = getByText('Option 1');
    await user.click(menuItem);

    expect(input.value).toEqual('Option 1');
  });

  it('calls onChange based on clicked option', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onChange={onChange} />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const menuItem = getByText('Option 1');
    await user.click(menuItem);

    expect(onChange).toHaveBeenCalledWith({ selectionId: 'option-1-id', selectionValue: 'Option 1', userProvidedText: 'Option 1' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when the textbox is cleared', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    const { getByTestId } = render(<FormAutosuggestTestComponent onChange={onChange} />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.type(input, '1');
    await user.type(input, '{backspace}');

    expect(onChange).toHaveBeenCalledWith({ selectionId: '', selectionValue: '', userProvidedText: '' });
  });

  it('calls the function passed to onClick when an option with it is selected', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onClick={onClick} />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const menuItem = getByText('Option 2');
    await user.click(menuItem);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when an option without it is selected', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onClick={onClick} />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const menuItem = getByText('Option 1');
    await user.click(menuItem);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should set the correct activedescendant', async () => {
    const user = userEvent.setup();
    const { getByTestId, getAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const expectedOptionId = getAllByTestId('autosuggest-optionitem')[0].id;
    await user.keyboard('{arrowdown}');

    expect(input.getAttribute('aria-activedescendant')).toEqual(expectedOptionId);
  });

  it('filters dropdown based on typed field value with one match', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    await user.type(input, 'Option 1');

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(1);
  });

  it('toggles options list', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const dropdownBtn = getByTestId('autosuggest-iconbutton');

    await user.click(dropdownBtn);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    await user.click(dropdownBtn);
    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);

    await user.click(dropdownBtn);
    const reopenedList = queryAllByTestId('autosuggest-optionitem');
    expect(reopenedList.length).toBe(3);
  });

  it('filters dropdown based on typed field value with multiple matches', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    await user.type(input, '1');

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(2);
  });

  it('closes options list on click outside', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    await user.click(document.body);
    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);
  });

  it('updates screen reader option count based on typed field value with multiple matches', async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    expect(getByText('0 options found')).toBeInTheDocument();
    await user.click(input);

    expect(getByText('3 options found')).toBeInTheDocument();

    await user.click(input);
    await user.type(input, '1');

    expect(getByText('2 options found')).toBeInTheDocument();
  });

  it('closes options list when tabbed out and the input is no longer active', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');

    await user.click(input);
    expect(document.activeElement).toBe(getByTestId('autosuggest-textbox-input'));

    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);

    await user.tab();
    expect(document.activeElement).not.toBe(getByTestId('autosuggest-textbox-input'));

    const updatedList = queryAllByTestId('autosuggest-optionitem');
    expect(updatedList.length).toBe(0);
  });

  it('check focus on input after esc', async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');
    const dropdownBtn = getByTestId('autosuggest-iconbutton');
    await user.click(dropdownBtn);

    await user.keyboard('{Escape}');

    expect(input.matches(':focus')).toBe(true);
  });
});
