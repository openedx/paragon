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

    it('renders the auto-populated value if it exists', () => {
      const wrapper = mount(<FormAutosuggestWrapper value="Test Value" />);

      expect(wrapper.find('input').instance().value).toEqual('Test Value');
      expect(wrapper.props().value).toEqual('Test Value');
    });

    it('renders component with options', () => {
      const { getByTestId, queryAllByTestId } = render(<FormAutosuggestTestComponent />);
    const input = getByTestId('autosuggest-textbox-input');
    userEvent.click(input);
    const list = queryAllByTestId('autosuggest-optionitem');
    expect(list.length).toBe(3);
  });

  it('renders with value required error msg', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent isValueRequired />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    userEvent.click(input);
    userEvent.click(document.body);

    const formControlFeedback = getByText('Example value required error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders with selection required error msg', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent isSelectionRequired />);
      const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    userEvent.click(input);
    userEvent.type(input, '1');
    userEvent.click(document.body);

    const formControlFeedback = getByText('Example selection required error message');

    expect(formControlFeedback).toBeInTheDocument();
  });

  it('renders with custom error msg', () => {
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent hasCustomError />);
    const input = getByTestId('autosuggest-textbox-input');

    // if you click into the input and click outside, you should see the error message
    userEvent.click(input);
    userEvent.click(document.body);

    const formControlFeedback = getByText('Example custom error message');

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

  it('associates labels with the input textbox', () => {
    const { getByTestId } = render(<FormAutosuggestLabelTestComponent />);

    expect(getByTestId('autosuggest-label').getAttribute('for')).toEqual(getByTestId('autosuggest-textbox-input').getAttribute('id'));
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

  it('calls onChange based on clicked option', () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onChange={onChange} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
    const menuItem = getByText('Option 1');
    userEvent.click(menuItem);

    expect(onChange).toHaveBeenCalledWith({ selectionId: 'option-1-id', selectionValue: 'Option 1', userProvidedText: 'Option 1' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onChange when the textbox is cleared', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<FormAutosuggestTestComponent onChange={onChange} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.type(input, '1');
    userEvent.type(input, '{backspace}');

    expect(onChange).toHaveBeenCalledWith({ selectionId: '', selectionValue: '', userProvidedText: '' });
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

    it('renders with error msg', () => {
      container.find('input').simulate('click');
      act(() => {
        const event = new Event('click', { bubbles: true });
        document.dispatchEvent(event);
      });
      container.update();
      const formControlFeedback = container.find('FormControlFeedback');

      expect(formControlFeedback.text()).toEqual('Example error message');
    });

    it('renders with error msg', () => {
      container.find('input').simulate('click');
      act(() => {
        const event = new Event('click', { bubbles: true });
        document.dispatchEvent(event);
      });
      container.update();
      const formControlFeedback = container.find('FormControlFeedback');

      expect(formControlFeedback.text()).toEqual('Example error message');
    });
  });

  describe('controlled behavior', () => {
    it('does not call onClick when an option without it is selected', () => {
    const onClick = jest.fn();
      const { getByText, getByTestId } = render(<FormAutosuggestTestComponent onClick={onClick} />);
    const input = getByTestId('autosuggest-textbox-input');

    userEvent.click(input);
      const menuItem = getByText('Option 1');
    userEvent.click(menuItem);

      expect(onClick).toHaveBeenCalledTimes(0);
      expect(onSelected).toHaveBeenCalledWith('Option 1');
      expect(onSelected).toHaveBeenCalledTimes(1);
    });

    it('when a function is passed to onClick, it is called', () => {
      container.find('input').simulate('change', { target: { value: 'Option 2' } });
      container.find('.pgn__form-autosuggest__dropdown').find('button')
        .at(0).simulate('click');

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('when a function is not passed to onClick, it is not called', () => {
      container.find('input').simulate('change', { target: { value: 'Option 1' } });
      container.find('.pgn__form-autosuggest__dropdown').find('button')
        .at(0).simulate('click');

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
      expect(onSelected).toHaveBeenCalledTimes(0);
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
