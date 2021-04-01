import React from 'react';
import { mount } from 'enzyme';
import FormGroup from '../FormGroup';
import FormRadioSet from '../FormRadioSet';
import FormRadio from '../FormRadio';

describe('FormRadioSet', () => {
  describe('associate element ids and attributes', () => {
    const handleChange = jest.fn();
    const value = 'green';
    const wrapper = mount((
      <FormGroup controlId="my-field">
        <FormRadioSet
          name="colors"
          label="Which color?"
          onChange={handleChange}
          value={value}
        >
          <FormRadio value="red">Red</FormRadio>
          <FormRadio value="green">Green</FormRadio>
          <FormRadio value="blue">Blue</FormRadio>
          <FormRadio value="cyan" disabled>Cyan</FormRadio>
        </FormRadioSet>
      </FormGroup>
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
  });

  describe('controlled behavior', () => {
    const setValue = jest.fn();
    const wrapper = mount((
      <FormRadioSet
        value="red"
        name="colors"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        label="Which color?"
      >
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
      </FormRadioSet>
    ));

    it('checks the right radio button', () => {
      const radioNode = wrapper.find('input[value="red"]').first();
      expect(radioNode.props().checked).toBe(true);
    });

    it('calls the change handlers with the right value', () => {
      const radioNode = wrapper.find('input[value="green"]').first();
      const eventData = { target: { value: 'green' } };
      radioNode.simulate('change', eventData);
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  describe('uncontrolled behavior', () => {
    const wrapper = mount((
      <FormRadioSet
        defaultValue="red"
        name="colors"
        id="my-field"
        label="Which color?"
      >
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
      </FormRadioSet>
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
