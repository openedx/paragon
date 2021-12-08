import React from 'react';
import { mount } from 'enzyme';
import FormSwitch from '../FormSwitch';

// A minimal test here since Switch depends on Checkbox

describe('FormSwitch', () => {
  const wrapper = mount((
    <FormSwitch
      name="color"
      value="green"
      helperText="Describe green"
    >
      Green
    </FormSwitch>
  ));
  const inputNode = wrapper.find('input[value="green"]').first();

  it('renders an input with a name and value and role=switch', () => {
    expect(wrapper.exists('input[value="green"]')).toBe(true);
    expect(wrapper.exists('.pgn__form-switch-helper-text')).toBe(true);
    expect(inputNode.props().name).toBe('color');
    expect(inputNode.props().role).toBe('switch');
  });
});
