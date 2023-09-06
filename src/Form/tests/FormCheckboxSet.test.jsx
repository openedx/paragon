import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import FormGroup from '../FormGroup';
import FormCheckboxSet from '../FormCheckboxSet';
import FormCheckbox from '../FormCheckbox';
import FormLabel from '../FormLabel';

function renderFormCheckbox() {
  const handleChange = jest.fn();
  const value = ['green'];
  return render(
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
    </FormGroup>,
  );
}

describe('FormCheckboxSet', () => {
  describe('associate element ids and attributes', () => {
    it('has a group div with the proper id', () => {
      const wrapper = renderFormCheckbox();
      const groupNode = wrapper.container.querySelector('div[role="group"]');
      expect(groupNode).toBeInTheDocument();
      expect(groupNode.getAttribute('id')).toEqual('my-field');
    });

    it('has an element labeling the group', () => {
      const wrapper = renderFormCheckbox();
      const labelNode = wrapper.getByLabelText('Which color?');
      expect(labelNode).toBeInTheDocument();
      const groupNode = wrapper.container.querySelector('div[role="group"]');
      expect(groupNode.getAttribute('aria-labelledby')).toContain(labelNode.getAttribute('id'));
    });

    it('has a description for a checkbox value', () => {
      const wrapper = renderFormCheckbox();
      const describerIds = wrapper.getByDisplayValue('blue');
      expect(describerIds).toBeInTheDocument();
      expect(describerIds.getAttribute('aria-describedby')).toBeTruthy();
      const descriptionNode = wrapper.getByText('Blue description');
      expect(descriptionNode.textContent).toBe('Blue description');
    });
  });

  const setValue = jest.fn();
  function renderFormWithoutLabel() {
    return render(
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
      </FormCheckboxSet>,
    );
  }

  describe('controlled behavior', () => {
    it('checks the right checkbox button', () => {
      const wrapper = renderFormWithoutLabel();
      const checkboxNode = wrapper.getByDisplayValue('red');
      expect(checkboxNode.checked).toBe(true);
    });

    it('calls the change handlers with the right value', async () => {
      const wrapper = renderFormWithoutLabel();
      const checkboxNode = wrapper.getByLabelText('green');
      userEvent.type(checkboxNode, { target: { value: 'green' } });
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  const onChange = jest.fn();
  const onBlur = jest.fn();
  const onFocus = jest.fn();

  function renderFormWithHandlers() {
    return render(
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
      </FormCheckboxSet>,
    );
  }

  describe('event handlers', () => {
    it('calls the change handlers with the right value', () => {
      const { getByLabelText } = renderFormWithHandlers();
      const checkboxNode = getByLabelText('green');
      userEvent.type(checkboxNode, { target: { value: 'green' } });
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'change',
        }),
      );
    });

    it('calls the focus handler', () => {
      const { getByLabelText } = renderFormWithHandlers();
      const checkboxNode = getByLabelText('green');
      fireEvent.focus(checkboxNode);
      expect(onFocus).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'focus',
        }),
      );
    });

    it('calls the blur handler', () => {
      const { getByLabelText } = renderFormWithHandlers();
      const checkboxNode = getByLabelText('green');
      fireEvent.blur(checkboxNode);
      expect(onBlur).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'blur',
        }),
      );
    });
  });

  describe('uncontrolled behavior', () => {
    it('checks the right checkbox button', () => {
      const { getByLabelText } = render(
        <FormCheckboxSet
          defaultValue={['red']}
          name="colors"
          id="my-field"
          label="Which color?"
        >
          <FormCheckbox value="red">red</FormCheckbox>
          <FormCheckbox value="green">green</FormCheckbox>
          <FormCheckbox value="blue">blue</FormCheckbox>
        </FormCheckboxSet>,
      );

      const checkboxNode = getByLabelText('red');
      expect(checkboxNode.defaultChecked).toBe(true);
    });
  });
});
