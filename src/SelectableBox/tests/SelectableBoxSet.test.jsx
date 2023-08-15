import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Form } from '../..';
import SelectableBox from '..';

const checkboxType = 'checkbox';
const checkboxText = (text) => `SelectableCheckbox${text}`;

const radioType = 'radio';
const radioText = (text) => `SelectableRadio${text}`;

const ariaLabel = 'test-default-label';

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
      const tree = renderer.create((<SelectableRadioSet name="testName" />)).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('forwards props', () => {
      render((<SelectableRadioSet name="testName" data-testid="test-radio-set-name" />));
      expect(screen.getByTestId('test-radio-set-name')).toBeInTheDocument();
    });
    it('correct render when type prop is changed', () => {
      const setWrapper = mount(<SelectableRadioSet name="set" />);
      expect(setWrapper.find(Form.RadioSet).length).toBeGreaterThan(0);
      setWrapper.setProps({ type: 'radio' });
      expect(setWrapper.find(Form.RadioSet).length).toBeGreaterThan(0);
      setWrapper.setProps({ type: 'checkbox' });
      expect(setWrapper.find(Form.CheckboxSet).length).toBeGreaterThan(0);
    });
    it('renders with children', () => {
      const wrapper = mount(
        <SelectableCheckboxSet name="testName">{checkboxText(1)}</SelectableCheckboxSet>,
      );
      expect(wrapper.text()).toContain(checkboxText(1));
    });
    it('renders with on change event', () => {
      const onChangeSpy = jest.fn();
      const wrapper = mount(<SelectableCheckboxSet onChange={onChangeSpy} />);
      wrapper.props().onChange();
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with checkbox type', () => {
      const wrapper = mount(<SelectableCheckboxSet />);
      const selectableBoxSet = wrapper.find(Form.CheckboxSet);
      expect(selectableBoxSet.length).toEqual(1);
    });
    it('renders with radio type if neither checkbox nor radio is passed', () => {
      // Mock the `console.error` is intentional because an invalid `type` prop
      // with type `text` specified for `ForwardRef` expects one of the ['radio','checkbox'] parameters.
      // eslint-disable-next-line no-console
      console.error = jest.fn();
      const wrapper = mount(<SelectableCheckboxSet type="text" />);
      const selectableBoxSet = wrapper.find(Form.RadioSet);
      expect(selectableBoxSet.length).toEqual(1);
      // eslint-disable-next-line no-console
      console.error.mockRestore();
    });
    it('renders with radio type', () => {
      const wrapper = mount(<SelectableRadioSet type={radioType} />);
      const selectableBoxSet = wrapper.find(Form.RadioSet);
      expect(selectableBoxSet.length).toEqual(1);
    });
    it('renders with correct number of columns', () => {
      const columns = 10;
      const wrapper = mount(<SelectableRadioSet columns={columns} />);
      const selectableBoxSet = wrapper.find(Form.RadioSet);
      expect(selectableBoxSet.hasClass(`pgn__selectable_box-set--${columns}`)).toBe(true);
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
