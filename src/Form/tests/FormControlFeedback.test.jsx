import React from 'react';
import { mount } from 'enzyme';

import FormControlFeedback from '../FormControlFeedback';
import { FORM_TEXT_TYPES, FORM_TEXT_ICONS } from '../FormText';
import { FormGroupContext } from '../FormGroupContext';

describe('FormControlFeedback', () => {
  it('renders a form control with an id', () => {
    const getDescriptorProps = jest.fn(() => ({ id: 'descriptor-id' }));
    const contextValue = {
      getDescriptorProps,
    };
    const wrapper = mount((
      <FormGroupContext.Provider value={contextValue}>
        <FormControlFeedback>
          This is feedback
        </FormControlFeedback>
      </FormGroupContext.Provider>
    ));
    expect(wrapper.exists('[children="This is feedback"]')).toBe(true);
    const FeedbackNode = wrapper.find(FormControlFeedback).first().childAt(0);
    expect(getDescriptorProps).toHaveBeenCalled();
    expect(FeedbackNode.props().id).toContain('descriptor-id');
  });

  it('renders with a default icon for a variant', () => {
    const wrapper = mount((
      <FormControlFeedback type={FORM_TEXT_TYPES.VALID}>
        This is feedback
      </FormControlFeedback>
    ));
    expect(wrapper.exists(FORM_TEXT_ICONS[FORM_TEXT_TYPES.VALID])).toBe(true);
  });

  it('renders with a custom icon', () => {
    const customIcon = <custom-icon>!</custom-icon>;
    const wrapper = mount((
      <FormControlFeedback icon={customIcon}>
        This is feedback
      </FormControlFeedback>
    ));
    expect(wrapper.exists('custom-icon')).toBe(true);
  });
});
