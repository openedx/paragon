import React from 'react';
import { mount } from 'enzyme';

import FormControlDescription, { VARIANTS, VARIANT_ICONS } from './FormControlDescription';
import { FormFieldContext } from './FormFieldContext';

describe('FormControlDescription', () => {
  it('renders a form control with an id', () => {
    const getNewDescriptorId = jest.fn(() => 'descriptor-id');
    const wrapper = mount((
      <FormFieldContext.Provider value={{ getNewDescriptorId }}>
        <FormControlDescription>
          This is a description
        </FormControlDescription>
      </FormFieldContext.Provider>
    ));
    expect(wrapper.exists('[children="This is a description"]')).toBe(true);
    const descriptionNode = wrapper.find(FormControlDescription).first().childAt(0);
    expect(getNewDescriptorId).toHaveBeenCalled();
    expect(descriptionNode.props().id).toContain('descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormControlDescription type={VARIANTS.VALID}>
        This is a description
      </FormControlDescription>
    ));
    expect(wrapper.exists(VARIANT_ICONS[VARIANTS.VALID])).toBe(true);
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const wrapper = mount((
      <FormControlDescription icon={customIcon}>
        This is a description
      </FormControlDescription>
    ));
    expect(wrapper.exists('custom-icon')).toBe(true);
  });
});
