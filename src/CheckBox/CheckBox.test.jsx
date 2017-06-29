/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { shallow, mount } from 'enzyme';
import CheckBox from './index';

describe('<CheckBox />', () => {
  it('attributes are set correctly', () => {
    const wrapper = shallow(
      <CheckBox
        name="checkbox"
        describedBy="this is a checkbox"
        label="check me out!"
        checked="false"
      />,
  );

    expect(wrapper.find('[name="checkbox"]').exists()).toEqual(true);
    expect(wrapper.find('[type="checkbox"]').exists()).toEqual(true);
    expect(wrapper.find('[defaultChecked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-describedby="this is a checkbox"]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
    expect(wrapper.find('[tabIndex="0"]').exists()).toEqual(true);
  });

  it('aria-label changes after click', () => {
    const wrapper = shallow(
      <CheckBox
        name="checkbox"
        descibedBy="checkbox"
        label="check me out!"
        checked="false"
      />,
      );

    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);

    wrapper.find('input').simulate('click');
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(false);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(true);

    wrapper.find('input').simulate('click');
    expect(wrapper.find('[aria-checked=false]').exists()).toEqual(true);
    expect(wrapper.find('[aria-checked=true]').exists()).toEqual(false);
  });

  it('check that callback function is triggered when clicked', () => {
    const wrapper = shallow(
      <CheckBox
        name="checkbox"
        descibedBy="checkbox"
        label="check me out!"
        checked="false"
        onChange={() => console.log('the checkbox changed state')}
      />,
    );
    const spy = jest.spyOn(wrapper.instance(), 'onChange');

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('input').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('checks if start state can be set to checked', () => {
    const wrapper = shallow(
      <CheckBox
        name="checkbox"
        describedBy="checkbox"
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
        describedBy="checkbox"
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
