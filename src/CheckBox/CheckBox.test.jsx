/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import CheckBox from './index';

describe('<CheckBox />', () => {
  it('attributes are set correctly', () => {
    const wrapper = mount(
      <CheckBox
        name="checkbox"
        label="check me out!"
        checked="false"
      />,
  );

    expect(wrapper.find('[name="checkbox"]').exists()).toEqual(true);
    expect(wrapper.find('[type="checkbox"]').exists()).toEqual(true);
    expect(wrapper.find('[defaultChecked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
  });

  it('aria-label changes after click', () => {
    const wrapper = mount(
      <CheckBox
        name="checkbox"
        label="check me out!"
        checked="false"
      />,
      );

    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);

    wrapper.find('[type="checkbox"]').simulate('click');
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(false);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(true);

    wrapper.find('[type="checkbox"]').simulate('click');
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(false);
  });

  it('check that callback function is triggered when clicked', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <CheckBox
        name="checkbox"
        label="check me out!"
        checked="false"
        onChangeState={spy}
      />,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('checks if start state can be set to checked', () => {
    const wrapper = mount(
      <CheckBox
        name="checkbox"
        label="I start checked"
        checked="true"
      />,
    );

    expect(wrapper.find('[defaultChecked=true]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(true);

    wrapper.find('input').simulate('click');
    expect(wrapper.find('[defaultChecked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
  });

  it('checkbox can be disabled', () => {
    const wrapper = mount(
      <CheckBox
        name="checkbox"
        label="I am disabled"
        checked="false"
        disabled
      />,
    );

    expect(wrapper.find('[defaultChecked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);

    wrapper.find('input').simulate('click');
    expect(wrapper.find('[defaultChecked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
  });
});
