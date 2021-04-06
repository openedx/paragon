import React from 'react';
import { mount } from 'enzyme';
import FormSwitch from '../FormSwitch';

// A minimal test here since Switch depends on Checkbox

describe('FormSwitch', () => {
  const wrapper = mount((
    <FormSwitch name="color" value="green" description="Describe green">
      Green
    </FormSwitch>
  ));
  const inputNode = wrapper.find('input[value="green"]').first();

  it('renders an input with a name and value and role=switch', () => {
    wrapper.exists('input[value="green"]');
    expect(inputNode.props().name).toBe('color');
    expect(inputNode.props().role).toBe('switch');
  });
});
