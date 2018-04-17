import React from 'react';
import { mount } from 'enzyme';

import Fieldset from './index';
import newId from '../utils/newId';
import ValidationMessage from '../ValidationMessage';
import Variant from '../utils/constants';

const dangerVariant = {
  status: Variant.status.DANGER,
};
const id = 'input1';
const legend = 'A Fieldset';
const invalidMessage = 'This is invalid!';
const children = 'Input goes here';
const variant = {
  status: Variant.status.INFO,
};
const variantIconDescription = 'Error';

const baseProps = {
  className: '',
  id,
  isValid: true,
  legend,
  invalidMessage,
  variant,
  variantIconDescription,
};

const mockedNextId = 'fieldset1';

// Cannot reference variables inside of a jest mock function: https://github.com/facebook/jest/issues/2567
jest.mock('../utils/newId', () => jest.fn().mockReturnValue('fieldset1'));

describe('Fieldset', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      ...baseProps,
    };
    wrapper = mount(<Fieldset {...props}>{children}</Fieldset>);
  });
  it('renders', () => {
    const fieldset = wrapper.find('fieldset.form-control');
    expect(fieldset.exists()).toEqual(true);
    expect(fieldset.hasClass('is-invalid-nodanger')).toEqual(true);
    expect(fieldset.prop('aria-describedby')).toEqual(`error-${id}`);
    const legendElem = fieldset.find('legend');
    expect(legendElem.text()).toEqual(legend);
    expect(fieldset.text()).toEqual(legend + children);
    const feedback = wrapper.find(ValidationMessage);
    expect(feedback.prop('id')).toEqual(`error-${id}`);
  });
  it('renders with auto-generated id if not specified', () => {
    const props = {
      ...baseProps,
      id: undefined,
    };
    wrapper = mount(<Fieldset {...props} />);
    const feedback = wrapper.find(ValidationMessage);
    expect(feedback.prop('id')).toEqual('error-fieldset1');
  });
  it('renders invalidMessage when isValid is false', () => {
    wrapper.setProps({ isValid: false });
    const feedback = wrapper.find(ValidationMessage);
    expect(feedback.prop('invalidMessage')).toEqual(invalidMessage);
  });
  it('renders with danger variant when isValid is false and variant is DANGER', () => {
    wrapper.setProps({ isValid: false, variant: dangerVariant });
    const feedback = wrapper.find(ValidationMessage);
    expect(feedback.hasClass('invalid-feedback-nodanger')).toEqual(false);
    expect(feedback.prop('variantIconDescription')).toEqual(variantIconDescription);
    expect(feedback.prop('invalidMessage')).toEqual(invalidMessage);
    expect(feedback.prop('variant')).toEqual(dangerVariant);
  });
  it('receives new id when a valid one is passed to props', () => {
    const nextId = 'new-id';
    let fieldset = wrapper.find('fieldset.form-control');
    let feedback = wrapper.find(ValidationMessage);
    expect(fieldset.prop('aria-describedby')).toEqual(`error-${id}`);
    expect(feedback.prop('id')).toEqual(`error-${id}`);

    wrapper.setProps({ id: nextId });
    fieldset = wrapper.find('fieldset.form-control');
    feedback = wrapper.find(ValidationMessage);
    expect(fieldset.prop('aria-describedby')).toEqual(`error-${nextId}`);
    expect(feedback.prop('id')).toEqual(`error-${nextId}`);
  });
  it('auto-generates new id when an invalid one is passed to props', () => {
    const nextId = '';
    let fieldset = wrapper.find('fieldset.form-control');
    let feedback = wrapper.find(ValidationMessage);
    expect(fieldset.prop('aria-describedby')).toEqual(`error-${id}`);
    expect(feedback.prop('id')).toEqual(`error-${id}`);

    wrapper.setProps({ id: nextId });
    expect(newId).toHaveBeenCalledWith('fieldset');
    fieldset = wrapper.find('fieldset.form-control');
    feedback = wrapper.find(ValidationMessage);
    expect(fieldset.prop('aria-describedby')).toEqual(`error-${mockedNextId}`);
    expect(feedback.prop('id')).toEqual(`error-${mockedNextId}`);
  });
});
