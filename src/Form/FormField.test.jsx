import React from 'react';
import { mount } from 'enzyme';

import FormField from './FormField';
import FormFieldControl from './FormFieldControl';
import FormFieldLabel from './FormFieldLabel';
import FormFieldDescription from './FormFieldDescription';

/* eslint-disable react/prop-types */
jest.mock('react-bootstrap/FormControl', () => (props) => {
  const { children, ...otherProps } = props;
  return (
    <form-control {...otherProps}>
      {children}
    </form-control>
  );
});

describe('FormField', () => {
  describe('associate element ids and attributes', () => {
    const wrapper = mount((
      <FormField id="my-field">
        <FormFieldLabel>My Field</FormFieldLabel>
        <FormFieldControl />
        <FormFieldDescription>Default help text</FormFieldDescription>
        <FormFieldDescription>Second help text</FormFieldDescription>
      </FormField>
    ));

    it('has a form control with the proper id', () => {
      expect(wrapper.exists('form-control')).toBe(true);
      const formControlNode = wrapper.find('form-control').first();
      expect(formControlNode.props().id).toEqual('my-field');
    });

    it('has a label with the proper htmlFor value', () => {
      expect(wrapper.exists('label')).toBe(true);
      const labelNode = wrapper.find('label').first();
      expect(labelNode.props().htmlFor).toEqual('my-field');
    });

    it('has default description text with a generated id that appears on the form-control', () => {
      const selector = '[children="Default help text"]';
      const node = wrapper.find(selector).first().childAt(0);
      const { id } = node.props();
      const formControlNode = wrapper.find('form-control').first();
      expect(wrapper.exists(selector)).toBe(true);
      expect(id).toBeTruthy();
      expect(formControlNode.props()['aria-describedby']).toContain(id);
    });

    it('has another description text with a generated id that appears on the form-control', () => {
      const selector = '[children="Second help text"]';
      const node = wrapper.find(selector).first().childAt(0);
      const { id } = node.props();
      const formControlNode = wrapper.find('form-control').first();
      expect(wrapper.exists(selector)).toBe(true);
      expect(id).toBeTruthy();
      expect(formControlNode.props()['aria-describedby']).toContain(id);
    });
  });

  it('renders a form control with a generated id', () => {
    const wrapper = mount((
      <FormField>
        <FormFieldControl />
      </FormField>
    ));
    expect(wrapper.exists('form-control')).toBe(true);
    const formControlNode = wrapper.find('form-control').first();
    expect(formControlNode.props().id).toBeTruthy();
  });
});
