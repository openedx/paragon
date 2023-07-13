import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import SelectableBox from '..';

const checkboxType = 'checkbox';
const checkboxText = 'SelectableCheckbox';

const radioType = 'radio';
const radioText = 'SelectableRadio';

function SelectableCheckbox(props) {
  return <SelectableBox type={checkboxType} {...props}>{checkboxText}</SelectableBox>;
}

function SelectableRadio(props) {
  return <SelectableBox type={radioType} {...props}>{radioText}</SelectableBox>;
}

describe('<SelectableBox />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <SelectableBox>SelectableBox</SelectableBox>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('correct render when type prop is changed', () => {
      const { rerender } = render(<SelectableRadio type="checkbox" />);
      const checkboxControl = screen.getByText('SelectableRadio', { type: 'checkbox' });
      expect(checkboxControl).toBeTruthy();
      rerender(<SelectableRadio type="radio" />);
      const radioControl = screen.getByText('SelectableRadio', { type: 'radio' });
      expect(radioControl).toBeTruthy();
    });
    it('renders with radio input type if neither checkbox nor radio is passed', () => {
      // Mock the `console.error` is intentional because an invalid `type` prop
      // with `wrongType` specified for `ForwardRef` expects one of the ['radio','flag'] parameters.
      // eslint-disable-next-line no-console
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const { getByRole } = render(<SelectableRadio type="wrongType" />);
      const selectableBox = getByRole('button');
      expect(selectableBox).toBeTruthy();
      consoleErrorSpy.mockRestore();
    });
    it('renders with checkbox input type', () => {
      render(<SelectableCheckbox />);
      const selectableBox = screen.getByText('SelectableCheckbox', { type: checkboxType });
      expect(selectableBox).toBeTruthy();
    });
    it('renders with radio input type', () => {
      render(<SelectableCheckbox />);
      const selectableBox = screen.getByText('SelectableCheckbox', { type: radioType });
      expect(selectableBox).toBeTruthy();
    });
    it('renders with correct children', () => {
      const { getByText } = render(<SelectableRadio />);
      const selectableBox = getByText(radioText);
      expect(selectableBox).toBeTruthy();
    });
    it('renders with correct class', () => {
      const className = 'myClass';
      const { container } = render(<SelectableRadio className={className} />);
      const selectableBox = container.querySelector('.pgn__selectable_box');
      expect(selectableBox.classList.contains(className)).toEqual(true);
    });
    it('renders as active when checked is passed', () => {
      const { container } = render(<SelectableRadio checked />);
      const selectableBox = container.querySelector('.pgn__selectable_box');
      const inputElement = container.querySelector('.pgn__selectable_box input');
      expect(selectableBox.classList.contains('pgn__selectable_box-active')).toEqual(true);
      expect(inputElement.checked).toEqual(true);
    });
    it('renders as invalid when isInvalid is passed', () => {
      const { container } = render(<SelectableRadio isInvalid />);
      const selectableBox = container.querySelector('.pgn__selectable_box');
      expect(selectableBox.classList.contains('pgn__selectable_box-invalid')).toEqual(true);
    });
    it('renders with on click event when onClick is passed', () => {
      const onClickSpy = jest.fn();
      const { container } = render(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = container.querySelector('.pgn__selectable_box');
      fireEvent.click(selectableBox);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with on key press event when onClick is passed', () => {
      const onClickSpy = jest.fn();
      const { container } = render(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = container.querySelector('.pgn__selectable_box');
      fireEvent.keyPress(selectableBox, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with hidden input when inputHidden is passed', () => {
      const { container, rerender } = render(<SelectableCheckbox inputHidden />);
      const inputElement = container.querySelector('.pgn__selectable_box input');
      expect(inputElement.getAttribute('hidden')).toEqual('');
      rerender(<SelectableCheckbox inputHidden={false} />);
      expect(inputElement.getAttribute('hidden')).toBeNull();
    });
  });
  describe('correct interactions', () => {
    it('correct checkbox state change when checked is changed', () => {
      const { container, rerender } = render(<SelectableCheckbox checked={false} />);
      const checkbox = container.querySelector('.pgn__selectable_box');
      expect(checkbox.className).not.toContain('pgn__selectable_box-active');
      rerender(<SelectableCheckbox checked />);
      expect(checkbox.className).toContain('pgn__selectable_box-active');
    });
    it('correct radio state change when checked is changed', () => {
      const { container, rerender } = render(<SelectableRadio checked={false} />);
      const radio = container.querySelector('.pgn__selectable_box');
      expect(radio.className).toContain('pgn__selectable_box-active');
      rerender(<SelectableRadio checked />);
      expect(radio.className).toContain('pgn__selectable_box-active');
    });
    it('ref is passed to onClick function', () => {
      let inputRef;
      const onClick = (ref) => { inputRef = ref; };
      render(<SelectableRadio onClick={onClick} />);
      const radio = screen.getByRole('button');
      userEvent.click(radio);
      expect(inputRef).not.toBeFalsy();
    });
  });
});
