import React from 'react';
import { mount } from 'enzyme';

import { FormGroupContext } from '../FormGroupContext';
import FormControlDecoratorGroup from '../FormControlDecoratorGroup';
import { FORM_CONTROL_SIZES } from '../constants';

describe('FormFieldDecoratorGroup', () => {
  it('renders', () => {
    const wrapper = mount((
      <FormControlDecoratorGroup
        leadingElement="before"
        trailingElement="after"
        floatingLabel="label"
      >
        <span>Form control</span>
      </FormControlDecoratorGroup>
    ));
    expect(wrapper.exists('[children="before"]')).toBe(true);
    expect(wrapper.exists('[children="after"]')).toBe(true);
    expect(wrapper.exists('[children="label"]')).toBe(true);
  });
  it('renders a size reflecting a context', () => {
    const wrapper = mount((
      <FormGroupContext.Provider value={{ size: FORM_CONTROL_SIZES.LARGE }}>
        <FormControlDecoratorGroup
          leadingElement="before"
          trailingElement="after"
          floatingLabel="label"
        >
          <span>Form control</span>
        </FormControlDecoratorGroup>
      </FormGroupContext.Provider>
    ));
    const groupNode = wrapper.find(FormControlDecoratorGroup).first().childAt(0);
    expect(groupNode.props().className).toContain('-lg');
  });
});
