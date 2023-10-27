import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('FormCheckboxSet', () => {
  describe('associate element ids and attributes', () => {
    it('has a group div with the proper id', () => {
      renderFormCheckbox();
      const groupNode = screen.getByRole('group');
      expect(groupNode).toBeInTheDocument();
      expect(groupNode.getAttribute('id')).toEqual('my-field');
    });

    it('has an element labeling the group', () => {
      renderFormCheckbox();
      const labelNode = screen.getByLabelText('Which color?');
      expect(labelNode).toBeInTheDocument();
      const groupNode = screen.getByRole('group');
      expect(groupNode.getAttribute('aria-labelledby')).toContain(labelNode.getAttribute('id'));
    });

    it('has a description for a checkbox value', () => {
      renderFormCheckbox();
      const describerIds = screen.getByDisplayValue('blue');
      expect(describerIds).toBeInTheDocument();
      expect(describerIds.getAttribute('aria-describedby')).toBeTruthy();
      const descriptionNode = screen.getByText('Blue description');
      expect(descriptionNode.textContent).toBe('Blue description');
    });
  });

  describe('controlled behavior', () => {
    it('checks the right checkbox button', () => {
      renderFormWithoutLabel();
      const checkboxNode = screen.getByDisplayValue('red');
      expect(checkboxNode.checked).toBe(true);
    });

    it('calls the change handlers with the right value', async () => {
      renderFormWithoutLabel();
      const checkboxNode = screen.getByLabelText('green');
      await userEvent.type(checkboxNode, 'green');
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  describe('event handlers', () => {
    it('calls the change handlers with the right value', async () => {
      renderFormWithHandlers();
      const checkboxNode = screen.getByLabelText('green');
      await userEvent.type(checkboxNode, 'green');
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'change',
        }),
      );
    });

    it('calls the focus handler', async () => {
      renderFormWithHandlers();
      const checkboxNode = screen.getByLabelText('green');
      checkboxNode.focus();
      await userEvent.tab();
      expect(onFocus).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({ value: 'green' }),
          type: 'focus',
        }),
      );
    });

    it('calls the blur handler', async () => {
      renderFormWithHandlers();
      const checkboxNode = screen.getByLabelText('green');
      checkboxNode.focus();
      await userEvent.tab();
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
      render(
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

      const checkboxNode = screen.getByLabelText('red');
      expect(checkboxNode.defaultChecked).toBe(true);
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
