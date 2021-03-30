import React from 'react';
import { mount } from 'enzyme';

import FormRadioGroup from '../FormRadioGroup';
import FormRadio from '../FormRadio';

describe('FormRadioGroup', () => {
  describe('associate element ids and attributes', () => {
    const wrapper = mount((
      <FormRadioGroup name="colors" id="my-field">
        <FormRadioGroup.Legend>My Field</FormRadioGroup.Legend>
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
        <FormRadioGroup.Feedback>Default help text</FormRadioGroup.Feedback>
        <FormRadioGroup.Feedback>Second help text</FormRadioGroup.Feedback>
      </FormRadioGroup>
    ));

    it('has a fieldset with the proper id', () => {
      expect(wrapper.exists('fieldset')).toBe(true);
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(radioGroupNode.props().id).toEqual('my-field');
    });

    it('has a legend describing the fieldset', () => {
      expect(wrapper.exists('legend')).toBe(true);
      const legendNode = wrapper.find('legend').first();
      const legendNodeId = legendNode.props().id;
      expect(legendNode.props().id).toBeTruthy();
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(radioGroupNode.props()['aria-describedby']).toContain(legendNodeId);
    });

    it('has default description text with a generated id that describes the fieldset', () => {
      const selector = '[children="Default help text"]';
      const node = wrapper.find(selector).first().childAt(0);
      const { id } = node.props();
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(wrapper.exists(selector)).toBe(true);
      expect(id).toBeTruthy();
      expect(radioGroupNode.props()['aria-describedby']).toContain(id);
    });

    it('has another description text with a generated id that describes the fieldset', () => {
      const selector = '[children="Second help text"]';
      const node = wrapper.find(selector).first().childAt(0);
      const { id } = node.props();
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(wrapper.exists(selector)).toBe(true);
      expect(id).toBeTruthy();
      expect(radioGroupNode.props()['aria-describedby']).toContain(id);
    });
  });

  describe('associate elements with explicit ids', () => {
    const wrapper = mount((
      <FormRadioGroup name="colors" id="my-field">
        <FormRadioGroup.Legend id="explicit-legend-id">My Field</FormRadioGroup.Legend>
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
        <FormRadioGroup.Feedback id="explicit-feedback-id">Default help text</FormRadioGroup.Feedback>
        <FormRadioGroup.Feedback>Second help text</FormRadioGroup.Feedback>
      </FormRadioGroup>
    ));

    it('has a legend with an explicit id describing the fieldset', () => {
      expect(wrapper.exists('legend')).toBe(true);
      const legendNode = wrapper.find('legend').first();
      const legendNodeId = legendNode.props().id;
      expect(legendNode.props().id).toBe('explicit-legend-id');
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(radioGroupNode.props()['aria-describedby']).toContain(legendNodeId);
    });

    it('has default description text with an explicit id that describes the fieldset', () => {
      const selector = '[children="Default help text"]';
      const node = wrapper.find(selector).first().childAt(0);
      const { id } = node.props();
      const radioGroupNode = wrapper.find('fieldset').first();
      expect(wrapper.exists(selector)).toBe(true);
      expect(id).toBe('explicit-feedback-id');
      expect(radioGroupNode.props()['aria-describedby']).toContain(id);
    });
  });

  describe('controlled behavior', () => {
    const wrapper = mount((
      <FormRadioGroup value="red" name="colors" onChange={() => {}}>
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
      </FormRadioGroup>
    ));

    it('checks the right radio button', () => {
      const radioNode = wrapper.find('input[value="red"]').first();
      expect(radioNode.props().checked).toBe(true);
    });
  });

  describe('uncontrolled behavior', () => {
    const wrapper = mount((
      <FormRadioGroup defaultValue="red" name="colors" id="my-field">
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
      </FormRadioGroup>
    ));

    it('checks the right radio button', () => {
      const radioNode = wrapper.find('input[value="red"]').first();
      expect(radioNode.props().defaultChecked).toBe(true);
    });
  });

  it('renders radio controls without a context', () => {
    const wrapper = mount((
      <>
        <FormRadio name="trees" value="evergreen">Evergreen</FormRadio>
        <FormRadio name="trees" value="deciduous">Deciduous</FormRadio>
      </>
    ));
    expect(wrapper.exists('input[type="radio"]')).toBe(true);
    const radioNode = wrapper.find('input[type="radio"]').first();
    expect(radioNode.props().name).toBe('trees');
  });
});
