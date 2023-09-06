import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchField from './index';

const baseProps = {
  onSubmit: () => {},
};

describe('<SearchField /> with basic usage', () => {
  it('should match the snapshot', () => {
    const { container } = render(<SearchField {...baseProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders SearchField.Advanced component`', () => {
    const { getByTestId } = render(<SearchField {...baseProps} data-testid="advanced-component" />);
    const advancedComponent = getByTestId('advanced-component');
    expect(advancedComponent).toBeInTheDocument();
  });

  it('should pass correct props to `SearchField.Label`', () => {
    const label = 'foobar';
    let props = { ...baseProps, label };
    const { getByText, getByLabelText, rerender } = render(<SearchField {...props} label={label} />);
    const labelElement = getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    props = {
      ...baseProps,
      screenReaderText: { label, submitButton: 'submit foobar' },
    };
    rerender(<SearchField {...props} />);
    const srOnlyLabelElement = getByText(label);
    expect(srOnlyLabelElement).toBeInTheDocument();
    expect(srOnlyLabelElement).toHaveClass('sr-only');
  });

  it('should pass correct props to `SearchField.Input`', () => {
    const placeholder = 'foobar';
    const inputTestId = 'foo';
    const props = { ...baseProps, placeholder, inputProps: { 'data-testid': inputTestId } };
    const { getByTestId } = render(<SearchField {...props} />);
    const inputElement = getByTestId(inputTestId);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', placeholder);
  });

  it('should use passed in initial `value` prop', () => {
    const value = 'foobar';
    const props = { ...baseProps, value };
    const { getByRole } = render(<SearchField {...props} />);
    const inputElement = getByRole('searchbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);
  });

  it('should use passed in `screenReaderText` prop', () => {
    const screenReaderText = {
      label: 'buscar',
      submitButton: 'enviar búsqueda',
      clearButton: 'borrar búsqueda',
    };
    const props = { ...baseProps, screenReaderText };
    const { getByRole, getByLabelText } = render(<SearchField {...props} />);
    const input = getByRole('searchbox', { target: 'submit' });
    const submitLabel = getByLabelText(screenReaderText.label);
    expect(submitLabel).toBeInTheDocument();
    const submitButton = getByRole('button', { name: screenReaderText.submitButton, type: 'submit' });
    expect(submitButton).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'foobar' } });
    const resetButton = getByRole('button', { name: screenReaderText.clearButton, type: 'reset' });
    expect(resetButton).toBeInTheDocument();
  });

  it('should add div if `submitButtonLocation` is passed', () => {
    const { container } = render(<SearchField {...baseProps} />);
    expect(container.querySelector('.pgn__searchfield_wrapper')).toBeNull();
    const { container: containerExternal } = render(<SearchField {...baseProps} submitButtonLocation="external" />);
    expect(containerExternal.querySelector('.pgn__searchfield_wrapper')).toBeInTheDocument();
  });

  describe('should fire', () => {
    it('focus handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onFocus: spy };
      const { getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox');
      fireEvent.focus(inputElement);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('blur handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onBlur: spy };
      const { getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox');
      fireEvent.blur(inputElement);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onChange: spy };
      const { getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox');
      fireEvent.change(inputElement, { target: { value: 'foobar' } });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('clear handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onClear: spy };
      const { getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox');
      fireEvent.change(inputElement, { target: { value: 'foobar' } });

      const resetButton = getByRole('button', { type: 'reset' });
      fireEvent.click(resetButton);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('submit handler on submit button click', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onSubmit: spy };
      const { getByRole } = render(<SearchField {...props} />);
      const submitButton = getByRole('button', { type: 'submit' });
      fireEvent.change(submitButton, { target: { value: 'foobar' } });

      fireEvent.click(submitButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('clear button', () => {
    it('should be visible with input value', () => {
      const props = { ...baseProps };
      const { queryByRole, getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox');
      expect(queryByRole('button', { name: 'clear search', type: 'reset' })).toBeNull();
      fireEvent.change(inputElement, { target: { value: 'foobar' } });
      expect(getByRole('button', { type: 'reset' })).toBeInTheDocument();
    });

    it('should clear input value when clicked', () => {
      const props = { ...baseProps };
      const { getByRole } = render(<SearchField {...props} />);
      const inputElement = getByRole('searchbox', { target: 'submit' });
      fireEvent.change(inputElement, { target: { value: 'foobar' } });
      expect(inputElement).toHaveValue('foobar');
      const clearButton = getByRole('button', { type: 'reset' });
      fireEvent.click(clearButton);
      expect(inputElement).toHaveValue('');
    });
  });

  describe('advanced usage', () => {
    it('should pass props to the clear button', () => {
      const buttonProps = { variant: 'inline' };
      const { getByRole } = render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Input />
          <SearchField.ClearButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      const inputElement = getByRole('searchbox');
      fireEvent.change(inputElement, { target: { value: 'foobar' } });
      const buttonClear = getByRole('button', { type: 'reset', variant: buttonProps.variant });
      expect(buttonClear).toHaveAttribute('variant', 'inline');
    });

    it('should pass props to the label', () => {
      const labelProps = { variant: 'inline' };
      const { getByTestId } = render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Label data-testid="label" {...labelProps}>Labeled</SearchField.Label>
        </SearchField.Advanced>,
      );
      const label = getByTestId('label');
      expect(label).toHaveAttribute('variant', 'inline');
    });

    it('should pass props to the submit button', () => {
      const buttonText = 'Some test text';
      const buttonProps = {
        submitButtonLocation: 'external',
        buttonText,
      };
      const { getByText } = render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      const submitButton = getByText(buttonText);
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveClass('pgn__searchfield__button');
    });

    it('should pass variant to the submit button', () => {
      const buttonText = 'Some test text';
      const buttonProps = {
        submitButtonLocation: 'external',
        buttonText,
      };
      const { getByText } = render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} variant="dark" />
        </SearchField.Advanced>,
      );
      const submitButton = getByText(buttonText);
      expect(submitButton).toHaveClass('btn-brand');
    });
  });
});
