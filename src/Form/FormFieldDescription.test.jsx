import React from 'react';
import { mount } from 'enzyme';

import FormFieldDescription, { VARIANTS, VARIANT_ICONS } from './FormFieldDescription';
import { FormFieldContext } from './FormFieldContext';

describe('FormFieldDescription', () => {
  it('renders a form control with an id', () => {
    const getNewDescriptorId = jest.fn(() => 'descriptor-id');
    const wrapper = mount((
      <FormFieldContext.Provider value={{ getNewDescriptorId }}>
        <FormFieldDescription>
          This is a description
        </FormFieldDescription>
      </FormFieldContext.Provider>
    ));
    expect(wrapper.exists('[children="This is a description"]')).toBe(true);
    const descriptionNode = wrapper.find(FormFieldDescription).first().childAt(0);
    expect(getNewDescriptorId).toHaveBeenCalled();
    expect(descriptionNode.props().id).toContain('descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormFieldDescription variant={VARIANTS.VALID}>
        This is a description
      </FormFieldDescription>
    ));
    expect(wrapper.exists(VARIANT_ICONS[VARIANTS.VALID])).toBe(true);
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const wrapper = mount((
      <FormFieldDescription icon={customIcon}>
        This is a description
      </FormFieldDescription>
    ));
    expect(wrapper.exists('custom-icon')).toBe(true);
  });
});
