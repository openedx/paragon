import React from 'react';
import { mount } from 'enzyme';

import FormGroup from '../FormGroup';
import FormControl from '../FormControl';
import FormLabel from '../FormLabel';
import FormControlFeedback from '../FormControlFeedback';

jest.mock('react-bootstrap/FormControl', () => {
  const { forwardRef } = jest.requireActual('react');
  return forwardRef((props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <form-control {...otherProps} ref={ref}>
        {children}
      </form-control>
    );
  });
});

describe('FormGroup', () => {
  describe('associate element ids and attributes', () => {
    const wrapper = mount((
      <FormGroup controlId="my-field">
        <FormLabel>My Field</FormLabel>
        <FormControl />
        <FormControlFeedback>Default help text</FormControlFeedback>
        <FormControlFeedback>Second help text</FormControlFeedback>
      </FormGroup>
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
      <FormGroup>
        <FormControl />
      </FormGroup>
    ));
    expect(wrapper.exists('form-control')).toBe(true);
    const formControlNode = wrapper.find('form-control').first();
    expect(formControlNode.props().id).toBeTruthy();
  });
});
