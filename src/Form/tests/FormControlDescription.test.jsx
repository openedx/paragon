import React from 'react';
import { mount } from 'enzyme';

import FormControlDescription, { DESCRIPTION_TYPES, DESCRIPTION_TYPE_ICONS } from '../FormControlDescription';
import { FormGroupContext } from '../FormGroupContext';

describe('FormControlDescription', () => {
  it('renders a form control with an id', () => {
    const getNewDescriptorId = jest.fn(() => 'descriptor-id');
    const wrapper = mount((
      <FormGroupContext.Provider value={{ getNewDescriptorId }}>
        <FormControlDescription>
          This is a description
        </FormControlDescription>
      </FormGroupContext.Provider>
    ));
    expect(wrapper.exists('[children="This is a description"]')).toBe(true);
    const descriptionNode = wrapper.find(FormControlDescription).first().childAt(0);
    expect(getNewDescriptorId).toHaveBeenCalled();
    expect(descriptionNode.props().id).toContain('descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormControlDescription type={DESCRIPTION_TYPES.VALID}>
        This is a description
      </FormControlDescription>
    ));
    expect(wrapper.exists(DESCRIPTION_TYPE_ICONS[DESCRIPTION_TYPES.VALID])).toBe(true);
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
