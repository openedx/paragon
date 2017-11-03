import React from 'react';
import { shallow, mount } from 'enzyme';

import RadioButtonGroup, { RadioButton } from './index';

describe('<RadioButton />', () => {
  const text = 'text';
  const index = 0;
  const isChecked = false;
  const name = 'name';
  const onBlur = () => {};
  const onClick = () => {};
  const onFocus = () => {};
  const onKeyDown = () => {};
  const value = 'value';
  const props = {
    index,
    isChecked,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    value,
  };

  describe('correct rendering', () => {
    it('renders RadioButton', () => {
      const wrapper = shallow(<RadioButton {...props}>{text}</RadioButton>);

      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('input')).toHaveLength(1);

      const radioButton = wrapper.find('input').at(0);
      expect(radioButton.prop('type')).toEqual('radio');
      expect(radioButton.prop('name')).toEqual(name);
      expect(radioButton.prop('value')).toEqual(value);
      expect(radioButton.prop('defaultChecked')).toEqual(isChecked);
      expect(radioButton.prop('aria-checked')).toEqual(isChecked);
      expect(radioButton.prop('data-index')).toEqual(index);
      expect(wrapper.find('div').text()).toEqual(text);
    });
  });

  describe('event handlers correctly triggered', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    it('should fire onBlur', () => {
      const wrapper = mount(<RadioButton {...props} onBlur={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('input').at(0).simulate('blur');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should fire onClick', () => {
      const wrapper = mount(<RadioButton {...props} onClick={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('input').at(0).simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should fire onFocus', () => {
      const wrapper = mount(<RadioButton {...props} onFocus={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('input').at(0).simulate('focus');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should fire onKeyDown', () => {
      const wrapper = mount(<RadioButton {...props} onKeyDown={spy} />);
      expect(spy).toHaveBeenCalledTimes(0);
      wrapper.find('input').at(0).simulate('keydown');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<RadioButtonGroup />', () => {
  const firstText = 'firstText';
  const secondText = 'secondText';
  const name = 'name';
  const label = 'label';
  const onBlur = () => {};
  const onChange = () => {};
  const onClick = () => {};
  const onFocus = () => {};
  const onKeyDown = () => {};
  const firstValue = 'firstValue';
  const secondValue = 'secondValue';
  const props = {
    name,
    label,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
  };

  describe('renders correctly', () => {
    it('renders RadioButtonGroup', () => {
      const radioButtonGroup = (
        <RadioButtonGroup {...props}>
          <RadioButton value={firstValue}>{firstText}</RadioButton>
          <RadioButton value={secondValue}>{secondText}</RadioButton>
        </RadioButtonGroup>
      );
      const wrapper = shallow(radioButtonGroup);

      wrapper.find(RadioButton).forEach((button, index) => {
        expect(button.prop('name')).toEqual(name);
        expect(button.prop('isChecked')).toEqual(false);
        expect(button.prop('onBlur')).toEqual(onBlur);
        expect(button.prop('onClick')).toEqual(onClick);
        expect(button.prop('onFocus')).toEqual(onFocus);
        expect(button.prop('onKeyDown')).toEqual(onKeyDown);
        expect(button.prop('index')).toEqual(index);

        let value = firstValue;
        if (index === 1) {
          value = secondValue;
        }
        expect(button.prop('value')).toEqual(value);
      });

      const radioButtonGroupDiv = wrapper.find('div');
      expect(radioButtonGroupDiv.prop('role')).toEqual('radiogroup');
      expect(radioButtonGroupDiv.prop('aria-label')).toEqual(label);
      expect(radioButtonGroupDiv.prop('tabIndex')).toEqual(-1);
    });
  });

  describe('updates state when onChange event is fired', () => {
    let spy;

    const index = 7;

    beforeEach(() => {
      spy = jest.fn();
    });

    it('changes state when checked event and target has attribute', () => {
      const event = {
        target: {
          checked: true,
          hasAttribute: () => true,
          getAttribute: () => index,
        },
      };
      const radioButtonGroup = (
        <RadioButtonGroup {...props} onChange={spy}>
          <RadioButton value={firstValue}>{firstText}</RadioButton>
          <RadioButton value={secondValue}>{secondText}</RadioButton>
        </RadioButtonGroup>
      );

      const wrapper = mount(radioButtonGroup);
      wrapper.simulate('change', event);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state('selectedIndex')).toEqual(index);
    });

    it('does not change state if event target is not checked', () => {
      const event = {
        target: {
          checked: false,
          hasAttribute: () => true,
          getAttribute: () => index,
        },
      };
      const radioButtonGroup = (
        <RadioButtonGroup {...props} onChange={spy}>
          <RadioButton value={firstValue}>{firstText}</RadioButton>
          <RadioButton value={secondValue}>{secondText}</RadioButton>
        </RadioButtonGroup>
      );

      const wrapper = mount(radioButtonGroup);
      wrapper.simulate('change', event);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state('selectedIndex')).toEqual(undefined);
    });

    it('does not change state if event target is checked but data-attribute does not exist', () => {
      const event = {
        target: {
          checked: false,
          hasAttribute: () => false,
          getAttribute: () => index,
        },
      };
      const radioButtonGroup = (
        <RadioButtonGroup {...props} onChange={spy}>
          <RadioButton value={firstValue}>{firstText}</RadioButton>
          <RadioButton value={secondValue}>{secondText}</RadioButton>
        </RadioButtonGroup>
      );

      const wrapper = mount(radioButtonGroup);
      wrapper.simulate('change', event);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(wrapper.state('selectedIndex')).toEqual(undefined);
    });
  });
});
