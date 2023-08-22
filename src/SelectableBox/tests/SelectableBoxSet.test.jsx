import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SelectableBox from '..';

const boxText = (text) => `SelectableBox${text}`;

const checkboxType = 'checkbox';
const checkboxText = (text) => `SelectableCheckbox${text}`;

const radioType = 'radio';
const radioText = (text) => `SelectableRadio${text}`;

const ariaLabel = 'test-default-label';

function SelectableBoxSet(props) {
  return (
    <SelectableBox.Set name="box" ariaLabel={ariaLabel} {...props}>
      <SelectableBox value={1}>{boxText(1)}</SelectableBox>
      <SelectableBox value={2}>{boxText(2)}</SelectableBox>
      <SelectableBox value={3}>{boxText(3)}</SelectableBox>
    </SelectableBox.Set>
  );
}

function SelectableCheckboxSet(props) {
  return (
    <SelectableBox.Set name={radioType} type={checkboxType} ariaLabel={ariaLabel} {...props}>
      <SelectableBox value={1} type={checkboxType}>{checkboxText(1)}</SelectableBox>
      <SelectableBox value={2} type={checkboxType}>{checkboxText(2)}</SelectableBox>
      <SelectableBox value={3} type={checkboxType}>{checkboxText(3)}</SelectableBox>
    </SelectableBox.Set>
  );
}

function SelectableRadioSet(props) {
  return (
    <SelectableBox.Set name={radioType} type={radioType} ariaLabel={ariaLabel} {...props}>
      <SelectableBox value={1} type={radioType}>{radioText(1)}</SelectableBox>
      <SelectableBox value={2} type={radioType}>{radioText(2)}</SelectableBox>
      <SelectableBox value={3} type={radioType}>{radioText(3)}</SelectableBox>
    </SelectableBox.Set>
  );
}

describe('<SelectableBox.Set />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const { container } = render(<SelectableRadioSet name="testName" />);
      expect(container).toMatchSnapshot();
    });
    it('forwards props', () => {
      render((<SelectableRadioSet name="testName" data-testid="test-radio-set-name" />));
      expect(screen.getByTestId('test-radio-set-name')).toBeInTheDocument();
    });
    it('forwards props', () => {
      render((<SelectableRadioSet name="testName" data-testid="test-radio-set-name" />));
      expect(screen.getByTestId('test-radio-set-name')).toBeInTheDocument();
    });
    it('correct render when type prop is changed', () => {
      const { rerender } = render(<SelectableRadioSet name="set" data-testid="radio-set" />);
      expect(screen.getByTestId('radio-set')).toBeInTheDocument();
      rerender(<SelectableRadioSet name="set" type="radio" data-testid="radio-set" />);
      expect(screen.getByTestId('radio-set')).toBeInTheDocument();
      rerender(<SelectableRadioSet name="set" type="checkbox" data-testid="checkbox-set" />);
      expect(screen.getByTestId('checkbox-set')).toBeInTheDocument();
    });
    it('renders with children', () => {
      render(
        <SelectableCheckboxSet name="testName">{checkboxText(1)}</SelectableCheckboxSet>,
      );
      expect(screen.getByText(checkboxText(1))).toBeInTheDocument();
    });
    it('renders with on change event', async () => {
      const onChangeSpy = jest.fn();
      render(<SelectableCheckboxSet onChange={onChangeSpy} />);
      const checkbox = screen.getByRole('button', { name: checkboxText(1) });
      await userEvent.click(checkbox);
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with checkbox type', () => {
      render(<SelectableCheckboxSet data-testid="checkbox-set" />);
      expect(screen.getByTestId('checkbox-set')).toBeInTheDocument();
    });
    it('renders with radio type if neither checkbox nor radio is passed', () => {
      render(<SelectableBoxSet data-testid="radio-set" />);
      expect(screen.getByTestId('radio-set')).toBeInTheDocument();
    });
    it('renders with radio type', () => {
      render(<SelectableRadioSet type={radioType} data-testid="radio-set" />);
      expect(screen.getByTestId('radio-set')).toBeInTheDocument();
    });
    it('renders with correct number of columns', () => {
      const columns = 10;
      render(<SelectableRadioSet columns={columns} data-testid="selectable-box-set" />);
      const selectableBoxSet = screen.getByTestId('selectable-box-set');
      expect(selectableBoxSet).toHaveClass(`pgn__selectable_box-set--${columns}`);
    });
    it('renders with an aria-label attribute', () => {
      render((<SelectableRadioSet name="testName" ariaLabel="test-radio-set-label" />));
      expect(screen.getByLabelText('test-radio-set-label')).toBeInTheDocument();
    });
    it('renders with an aria-labelledby attribute', () => {
      render((
        <>
          <h2 id="test-radio-set-label">Radio Set Label text</h2>
          <SelectableRadioSet
            name="testName"
            ariaLabelledby="test-radio-set-label"
          />
        </>
      ));
      expect(screen.getByLabelText('Radio Set Label text')).toBeInTheDocument();
    });
    it('renders with an aria-label attribute', () => {
      render((<SelectableRadioSet name="testName" ariaLabel="test-radio-set-label" />));
      expect(screen.getByLabelText('test-radio-set-label')).toBeInTheDocument();
    });
    it('renders with an aria-labelledby attribute', () => {
      render((
        <>
          <h2 id="test-radio-set-label">Radio Set Label text</h2>
          <SelectableRadioSet
            name="testName"
            ariaLabelledby="test-radio-set-label"
          />
        </>
      ));
      expect(screen.getByLabelText('Radio Set Label text')).toBeInTheDocument();
    });
  });
});
