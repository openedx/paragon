import React from 'react';
import { mount } from 'enzyme';

import ValidationMessage from './index';
import Variant from '../utils/constants';

const dangerVariant = {
  status: Variant.status.DANGER,
};
const id = 'error-input1';
const invalidMessage = 'This is invalid!';
const variant = {
  status: Variant.status.INFO,
};
const variantIconDescription = 'Error';

const baseProps = {
  className: '',
  id,
  isValid: true,
  invalidMessage,
  variant,
  variantIconDescription,
};

describe('ValidationMessage', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      ...baseProps,
    };
    wrapper = mount(<ValidationMessage {...props} />);
  });
  it('renders', () => {
    const feedback = wrapper.find('.invalid-feedback');
    expect(feedback.exists()).toEqual(true);
    expect(feedback.hasClass('invalid-feedback-nodanger')).toEqual(true);
    expect(feedback.prop('aria-live')).toEqual('polite');
    expect(feedback.text()).toEqual('');
    expect(feedback.prop('id')).toEqual(id);
  });
  it('renders invalidMessage when isValid is false', () => {
    wrapper.setProps({ isValid: false });
    const feedback = wrapper.find('.invalid-feedback');
    expect(feedback.text()).toEqual(invalidMessage);
  });
  it('renders with danger variant when isValid is false and variant is DANGER', () => {
    wrapper.setProps({ isValid: false, variant: dangerVariant });
    const feedback = wrapper.find('.invalid-feedback');
    expect(feedback.hasClass('invalid-feedback-nodanger')).toEqual(false);
    expect(feedback.text()).toEqual(variantIconDescription + invalidMessage);
    const icon = feedback.find('.fa-exclamation-circle');
    expect(icon.exists()).toEqual(true);
  });
});
