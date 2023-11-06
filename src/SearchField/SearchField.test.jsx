import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { act } from 'react-test-renderer';
import SearchField from '.';

const BUTTON_LOCATION_VARIANTS = [
  'internal',
  'external',
];

const baseProps = {
  onSubmit: () => {},
};

describe('<SearchField /> with basic usage', () => {
  it('should match the snapshot', () => {
    const { container } = render(<SearchField {...baseProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders SearchField.Advanced component`', () => {
    render(<SearchField {...baseProps} data-testid="advanced-component" />);
    const advancedComponent = screen.getByTestId('advanced-component');
    expect(advancedComponent).toBeInTheDocument();
  });

  it('should pass correct props to `SearchField.Label`', () => {
    const label = 'foobar';
    let props = { ...baseProps, label };
    const { rerender } = render(<SearchField {...props} label={label} />);
    const labelElement = screen.getByLabelText(label);
    expect(labelElement).toBeInTheDocument();

    props = {
      ...baseProps,
      screenReaderText: { label, submitButton: 'submit foobar' },
    };
    rerender(<SearchField {...props} />);
    const srOnlyLabelElement = screen.getByText(label);
    expect(srOnlyLabelElement).toBeInTheDocument();
    expect(srOnlyLabelElement).toHaveClass('sr-only');
  });

  it('should pass correct props to `SearchField.Input`', () => {
    const placeholder = 'foobar';
    const inputTestId = 'foo';
    const props = { ...baseProps, placeholder, inputProps: { 'data-testid': inputTestId } };
    render(<SearchField {...props} />);
    const inputElement = screen.getByTestId(inputTestId);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', placeholder);
  });

  it('should use passed in initial `value` prop', () => {
    const value = 'foobar';
    const props = { ...baseProps, value };
    render(<SearchField {...props} />);
    const inputElement = screen.getByRole('searchbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);
  });

  it('should use passed in `screenReaderText` prop', async () => {
    const screenReaderText = {
      label: 'buscar',
      submitButton: 'enviar búsqueda',
      clearButton: 'borrar búsqueda',
    };
    const props = { ...baseProps, screenReaderText };
    render(<SearchField {...props} />);
    const input = screen.getByRole('searchbox', { target: 'submit' });
    const submitLabel = screen.getByLabelText(screenReaderText.label);
    expect(submitLabel).toBeInTheDocument();
    const submitButton = screen.getByRole('button', { name: screenReaderText.submitButton, type: 'submit' });
    expect(submitButton).toBeInTheDocument();
    await userEvent.type(input, 'foobar');
    const resetButton = screen.getByRole('button', { name: screenReaderText.clearButton, type: 'reset' });
    expect(resetButton).toBeInTheDocument();
  });

  it('should add div if `submitButtonLocation` is passed', () => {
    const { container } = render(<SearchField {...baseProps} />);
    expect(container.querySelector('.pgn__searchfield_wrapper')).toBeNull();
    const { container: containerExternal } = render(<SearchField {...baseProps} submitButtonLocation="external" />);
    expect(containerExternal.querySelector('.pgn__searchfield_wrapper')).toBeInTheDocument();
  });

  describe('should fire', () => {
    it('focus handler', async () => {
      const spy = jest.fn();
      const props = { ...baseProps, onFocus: spy };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      await act(() => {
        inputElement.focus();
      });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('blur handler', async () => {
      const spy = jest.fn();
      const props = { ...baseProps, onBlur: spy };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      await act(() => {
        inputElement.focus();
      });
      await userEvent.tab();
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', async () => {
      const spy = jest.fn();
      const props = { ...baseProps, onChange: spy };
      const inputText = 'foobar';
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      await userEvent.type(inputElement, inputText);
      expect(spy).toHaveBeenCalledTimes(inputText.length);
    });

    it('clear handler', async () => {
      const spy = jest.fn();
      const props = { ...baseProps, onClear: spy };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      await userEvent.type(inputElement, 'foobar');

      const resetButton = screen.getByRole('button', { type: 'reset' });
      await userEvent.click(resetButton);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('submit handler on submit button click', async () => {
      const spy = jest.fn();
      const props = { ...baseProps, onSubmit: spy, submitButtonLocation: BUTTON_LOCATION_VARIANTS[1] };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      const submitButton = screen.getByRole('button', { type: 'submit' });
      await userEvent.type(inputElement, 'foobar');
      await userEvent.click(submitButton);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('foobar');
    });
  });

  describe('clear button', () => {
    it('should be visible with input value', async () => {
      const props = { ...baseProps };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox');
      expect(screen.queryByRole('button', { name: 'clear search', type: 'reset' })).toBeNull();
      await userEvent.type(inputElement, 'foobar');
      expect(screen.getByRole('button', { type: 'reset' })).toBeInTheDocument();
    });

    it('should clear input value when clicked', async () => {
      const props = { ...baseProps };
      render(<SearchField {...props} />);
      const inputElement = screen.getByRole('searchbox', { target: 'submit' });
      await userEvent.type(inputElement, 'foobar');
      expect(inputElement).toHaveValue('foobar');
      const clearButton = screen.getByRole('button', { type: 'reset' });
      await userEvent.click(clearButton);
      expect(inputElement).toHaveValue('');
    });
  });

  describe('advanced usage', () => {
    it('should pass props to the clear button', async () => {
      const buttonProps = { variant: 'inline' };
      render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Input />
          <SearchField.ClearButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      const inputElement = screen.getByRole('searchbox');
      await userEvent.type(inputElement, 'foobar');
      const buttonClear = screen.getByRole('button', { type: 'reset', variant: buttonProps.variant });
      expect(buttonClear).toHaveAttribute('variant', 'inline');
    });

    it('should pass props to the label', () => {
      const labelProps = { variant: 'inline' };
      render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Label {...labelProps}>Labeled</SearchField.Label>
        </SearchField.Advanced>,
      );
      const label = screen.getByText('Labeled');
      expect(label).toHaveAttribute('variant', 'inline');
    });

    it('should pass props to the submit button', () => {
      const buttonText = 'Some test text';
      const buttonProps = {
        submitButtonLocation: 'external',
        buttonText,
      };
      render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      const submitButton = screen.getByText(buttonText);
      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveClass('pgn__searchfield__button');
    });

    it('should pass variant to the submit button', () => {
      const buttonText = 'Some test text';
      const buttonProps = {
        submitButtonLocation: 'external',
        buttonText,
      };
      render(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} variant="dark" />
        </SearchField.Advanced>,
      );
      const submitButton = screen.getByText(buttonText);
      expect(submitButton).toHaveClass('btn-brand');
    });
  });
});
