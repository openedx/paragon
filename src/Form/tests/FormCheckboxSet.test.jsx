import React from 'react';
import { mount } from 'enzyme';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import FormGroup from '../FormGroup';
import FormCheckboxSet from '../FormCheckboxSet';
import FormCheckbox from '../FormCheckbox';
import FormLabel from '../FormLabel';

describe('FormCheckboxSet', () => {
  describe('associate element ids and attributes', () => {
    const handleChange = jest.fn();
    const value = ['green'];
    const wrapper = mount((
      <FormGroup controlId="my-field">
        <FormLabel>Which color?</FormLabel>
        <FormCheckboxSet
          name="colors"
          onChange={handleChange}
          value={value}
        >
          <FormCheckbox value="red">Red</FormCheckbox>
          <FormCheckbox value="green">Green</FormCheckbox>
          <FormCheckbox value="blue" description="Blue description">Blue</FormCheckbox>
          <FormCheckbox value="cyan" disabled>Cyan</FormCheckbox>
        </FormCheckboxSet>
      </FormGroup>
    ));

    it('has a group div with the proper id', () => {
      expect(wrapper.exists('div[role="group"]')).toBe(true);
      const groupNode = wrapper.find('div[role="group"]').first();
      expect(groupNode.props().id).toEqual('my-field');
    });

    it('has an element labelling the group', () => {
      expect(wrapper.exists('FormLabel')).toBe(true);
      const labelNode = wrapper.find('FormLabel').first().childAt(0);
      const labelNodeId = labelNode.props().id;
      expect(labelNode.props().id).toBeTruthy();
      const groupNode = wrapper.find('div[role="group"]').first();
      expect(groupNode.props()['aria-labelledby']).toContain(labelNodeId);
    });

    it('has a description for a checkbox value', () => {
      expect(wrapper.exists({ children: 'Blue description' })).toBe(true);
      const checkboxNode = wrapper.find('input[value="blue"]').first();
      const describerIds = checkboxNode.props()['aria-describedby'];
      expect(describerIds).toBeTruthy();
      expect(wrapper.exists(`#${describerIds}`)).toBe(true);
      const descriptionNode = wrapper.find(`#${describerIds}`).first();
      const descriptionNodeContent = descriptionNode.props().children;
      expect(descriptionNodeContent).toBe('Blue description');
    });
  });

  describe('controlled behavior', () => {
    const setValue = jest.fn();
    const wrapper = mount((
      <FormCheckboxSet
        value={['red']}
        name="colors"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <FormCheckbox value="red">red</FormCheckbox>
        <FormCheckbox value="green">green</FormCheckbox>
        <FormCheckbox value="blue">blue</FormCheckbox>
      </FormCheckboxSet>
    ));

    it('checks the right checkbox button', () => {
      const checkboxNode = wrapper.find('input[value="red"]').first();
      expect(checkboxNode.props().checked).toBe(true);
    });

    it('calls the change handlers with the right value', () => {
      const checkboxNode = wrapper.find('input[value="green"]').first();
      const eventData = { target: { value: 'green' } };
      checkboxNode.simulate('change', eventData);
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  describe('event handlers', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const wrapper = mount((
      <FormCheckboxSet
        value={['red']}
        name="colors"
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      >
        <FormCheckbox value="red">red</FormCheckbox>
        <FormCheckbox value="green">green</FormCheckbox>
        <FormCheckbox value="blue">blue</FormCheckbox>
      </FormCheckboxSet>
    ));

    const checkboxNode = wrapper.find('input[value="green"]').first();

    it('calls the change handlers with the right value', () => {
      checkboxNode.simulate('change');
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'change',
        }),
      );
    });
    it('calls the focus handler', () => {
      checkboxNode.simulate('focus');
      expect(onFocus).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'focus',
        }),
      );
    });
    it('calls the blur handler', () => {
      checkboxNode.simulate('blur');
      expect(onBlur).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'blur',
        }),
      );
    });
  });

  describe('uncontrolled behavior', () => {
    const wrapper = mount((
      <FormCheckboxSet
        defaultValue={['red']}
        name="colors"
        id="my-field"
        label="Which color?"
      >
        <FormCheckbox value="red">red</FormCheckbox>
        <FormCheckbox value="green">green</FormCheckbox>
        <FormCheckbox value="blue">blue</FormCheckbox>
      </FormCheckboxSet>
    ));

    it('checks the right checkbox button', () => {
      const checkboxNode = wrapper.find('input[value="red"]').first();
      expect(checkboxNode.props().defaultChecked).toBe(true);
    });
  });

  it('checks if onClick is called once in FormCheckboxSet', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <FormGroup controlId="my-field">
        <FormLabel>Which color?</FormLabel>
        <FormCheckboxSet
          name="colors"
          onChange={handleChange}
        >
          <FormCheckbox value="red">Red</FormCheckbox>
          <FormCheckbox value="green">Green</FormCheckbox>
        </FormCheckboxSet>
      </FormGroup>,
    );

    userEvent.click(getByLabelText('Red'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
