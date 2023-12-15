import React from 'react';
import { render, screen } from '@testing-library/react';
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
      const checkboxControl = screen.getByText(radioText);
      expect(checkboxControl).toBeTruthy();
      rerender(<SelectableRadio type="radio" />);
      const radioControl = screen.getByText(radioText);
      expect(radioControl).toBeTruthy();
    });
    it('renders with radio input type if neither checkbox nor radio is passed', () => {
      // Mock the `console.error` is intentional because an invalid `type` prop
      // with `wrongType` specified for `ForwardRef` expects one of the ['radio','flag'] parameters.
      // eslint-disable-next-line no-console
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      render(<SelectableRadio type="wrongType" />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox).toBeTruthy();
      consoleErrorSpy.mockRestore();
    });
    it('renders with checkbox input type', () => {
      render(<SelectableCheckbox />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox).toBeTruthy();
    });
    it('renders with radio input type', () => {
      render(<SelectableCheckbox />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox).toBeTruthy();
    });
    it('renders with correct children', () => {
      render(<SelectableRadio />);
      const selectableBox = screen.getByText(radioText);
      expect(selectableBox).toBeTruthy();
    });
    it('renders with correct class', () => {
      const className = 'myClass';
      render(<SelectableRadio className={className} />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox.classList.contains(className)).toEqual(true);
    });
    it('renders as active when checked is passed', () => {
      render(<SelectableRadio checked />);
      const selectableBox = screen.getByRole('button');
      const inputElement = screen.getByRole('radio', { hidden: true });
      expect(selectableBox.classList.contains('pgn__selectable_box-active')).toEqual(true);
      expect(inputElement.checked).toEqual(true);
    });
    it('renders as invalid when isInvalid is passed', () => {
      render(<SelectableRadio isInvalid />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox.classList.contains('pgn__selectable_box-invalid')).toEqual(true);
    });
    it('renders with on click event when onClick is passed', async () => {
      const onClickSpy = jest.fn();
      render(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = screen.getByRole('button');
      await userEvent.click(selectableBox);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with on key press event when onClick is passed', async () => {
      const onClickSpy = jest.fn();
      render(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = screen.getByRole('button');
      selectableBox.focus();
      await userEvent.keyboard('{enter}');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with hidden input when inputHidden is passed', () => {
      const { rerender } = render(<SelectableCheckbox inputHidden />);
      const inputElement = screen.getByRole('checkbox', { hidden: true });
      expect(inputElement.getAttribute('hidden')).toEqual('');
      rerender(<SelectableCheckbox inputHidden={false} />);
      expect(inputElement.getAttribute('hidden')).toBeNull();
    });
    it('renders with active state and updates to inactive when showActiveBoxState is false', async () => {
      const { rerender } = render(<SelectableCheckbox inputHidden={false} checked />);
      const selectableBox = screen.getByRole('button');
      expect(selectableBox.classList.contains('pgn__selectable_box-active')).toEqual(true);
      rerender(<SelectableCheckbox inputHidden={false} showActiveBoxState={false} checked />);
      expect(selectableBox.classList.contains('pgn__selectable_box-active')).toEqual(false);
    });
  });
  describe('correct interactions', () => {
    it('correct checkbox state change when checked is changed', () => {
      const { rerender } = render(<SelectableCheckbox checked={false} />);
      const checkbox = screen.getByRole('button');
      expect(checkbox.className).not.toContain('pgn__selectable_box-active');
      rerender(<SelectableCheckbox checked />);
      expect(checkbox.className).toContain('pgn__selectable_box-active');
    });
    it('correct radio state change when checked is changed', () => {
      const { rerender } = render(<SelectableRadio checked={false} />);
      const radio = screen.getByRole('button');
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
