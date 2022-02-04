import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SelectableBox from '../index';
import { getInputType } from '../utils';
import Form from '../../Form';

const checkboxType = 'checkbox';
const checkboxText = 'SelectableCheckbox';

const radioType = 'radio';
const radioText = 'SelectableRadio';

const SelectableCheckbox = (props) => (
  <SelectableBox type={checkboxType} {...props}>{checkboxText}</SelectableBox>
);

const SelectableRadio = (props) => (
  <SelectableBox type={radioType} {...props}>{radioText}</SelectableBox>
);

describe('<SelectableBox />', () => {
  describe('utils', () => {
    it('getInputType returns correct type', () => {
      expect(getInputType('SelectableBox', undefined)).toEqual(Form.Radio);
      expect(getInputType('SelectableBox', 'radio')).toEqual(Form.Radio);
      expect(getInputType('SelectableBox', 'checkbox')).toEqual(Form.Checkbox);
      expect(getInputType('SelectableBoxSet', undefined)).toEqual(Form.RadioSet);
      expect(getInputType('SelectableBoxSet', 'radio')).toEqual(Form.RadioSet);
      expect(getInputType('SelectableBoxSet', 'checkbox')).toEqual(Form.CheckboxSet);
    });
  });
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <SelectableBox>SelectableBox</SelectableBox>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with radio input type if neither checkbox nor radio is passed', () => {
      const wrapper = mount(<SelectableBox type="wrongType" />);
      const selectableBox = wrapper.find('input');
      expect(selectableBox.prop('type')).toEqual(radioType);
    });
    it('renders with checkbox input type', () => {
      const wrapper = mount(<SelectableCheckbox />);
      const selectableBox = wrapper.find('input');
      expect(selectableBox.prop('type')).toEqual(checkboxType);
    });
    it('renders with radio input type', () => {
      const wrapper = mount(<SelectableRadio />);
      const selectableBox = wrapper.find('input');
      expect(selectableBox.prop('type')).toEqual(radioType);
    });
    it('renders with correct children', () => {
      const wrapper = mount(<SelectableRadio />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      expect(selectableBox.text()).toContain(radioText);
    });
    it('renders with correct class', () => {
      const className = 'myClass';
      const wrapper = mount(<SelectableRadio className={className} />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      expect(selectableBox.hasClass(className)).toEqual(true);
    });
    it('renders as active when checked is passed', () => {
      const wrapper = mount(<SelectableRadio checked />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      expect(selectableBox.hasClass('pgn__selectable_box-active')).toEqual(true);
      expect(selectableBox.find('input').prop('checked')).toEqual(true);
    });
    it('renders as invalid when isInvalid is passed', () => {
      const wrapper = mount(<SelectableRadio isInvalid />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      expect(selectableBox.hasClass('pgn__selectable_box-invalid')).toEqual(true);
    });
    it('renders with on click event when onClick is passed', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      selectableBox.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with on key press event when onClick is passed', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(<SelectableCheckbox onClick={onClickSpy} />);
      const selectableBox = wrapper.find('.pgn__selectable_box');
      selectableBox.simulate('keypress', { key: 'Enter' });
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('renders with hidden input when inputHidden is passed', () => {
      const wrapper = mount(<SelectableCheckbox />);
      expect(wrapper.find('.pgn__selectable_box input').prop('hidden')).toEqual(true);
      wrapper.setProps({ inputHidden: false });
      expect(wrapper.find('.pgn__selectable_box input').prop('hidden')).toEqual(false);
    });
  });
  describe('correct interactions', () => {
    it('correct checkbox state change when checked is changed', () => {
      const wrapper = mount(<SelectableCheckbox />);
      wrapper.setProps({ checked: true });
      expect(wrapper.find('.pgn__selectable_box').hasClass('pgn__selectable_box-active')).toEqual(true);
      wrapper.setProps({ checked: false });
      expect(wrapper.find('.pgn__selectable_box').hasClass('pgn__selectable_box-active')).toEqual(false);
    });
    it('correct radio state change when checked is changed', () => {
      const wrapper = mount(<SelectableRadio />);
      wrapper.setProps({ checked: true });
      expect(wrapper.find('.pgn__selectable_box').hasClass('pgn__selectable_box-active')).toEqual(true);
      wrapper.setProps({ checked: false });
      expect(wrapper.find('.pgn__selectable_box').hasClass('pgn__selectable_box-active')).toEqual(true);
    });
    it('ref is passed to onClick function', () => {
      let inputRef;
      const onClick = (ref) => { inputRef = ref; };
      const wrapper = mount(<SelectableRadio onClick={onClick} />);
      wrapper.find('.pgn__selectable_box').simulate('click');
      expect(inputRef).not.toBeFalsy();
    });
  });
});
