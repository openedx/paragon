import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormGroup from '../FormGroup';
import FormRadioSet from '../FormRadioSet';
import FormRadio from '../FormRadio';
import FormLabel from '../FormLabel';

function renderFormGroup() {
  const handleChange = jest.fn();
  const value = 'green';
  return (
    render(
      <FormGroup controlId="my-field">
        <FormLabel>Which color?</FormLabel>
        <FormRadioSet
          name="colors"
          onChange={handleChange}
          value={value}
        >
          <FormRadio value="red">Red</FormRadio>
          <FormRadio value="green">Green</FormRadio>
          <FormRadio value="blue">Blue</FormRadio>
          <FormRadio value="cyan" disabled>Cyan</FormRadio>
        </FormRadioSet>
      </FormGroup>,
    )
  );
}

const setValue = jest.fn();
function renderFormRadioSet(isDefault) {
  return (
    render(
      <FormRadioSet
        {...(isDefault ? { defaultValue: 'red' } : {})}
        {...(!isDefault ? { value: 'red' } : {})}
        name="colors"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <FormRadio value="red">red</FormRadio>
        <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
        <FormRadio value="blue">blue</FormRadio>
      </FormRadioSet>,
    )
  );
}

describe('FormRadioSet', () => {
  describe('associate element ids and attributes', () => {
    it('has a radiogroup div with the proper id', () => {
      renderFormGroup();
      const radioGroupNode = screen.getByRole('radiogroup', { name: /Which color\?/i });
      expect(radioGroupNode).toBeInTheDocument();
      expect(radioGroupNode).toHaveAttribute('id', 'my-field');
    });

    it('has an element labelling the radiogroup', () => {
      renderFormGroup();
      const labelNode = screen.getByText('Which color?');
      const radioGroupNode = screen.getByRole('radiogroup', { name: /Which color\?/i });
      const labelNodeId = labelNode.getAttribute('id');
      expect(labelNode).toBeInTheDocument();
      expect(labelNodeId).toBeTruthy();
      expect(radioGroupNode).toHaveAttribute('aria-labelledby', expect.stringContaining(labelNodeId));
    });
  });

  describe('controlled behavior', () => {
    it('checks the right radio button', () => {
      renderFormRadioSet();
      const redRadio = screen.getByLabelText('red');
      expect(redRadio).toBeChecked();
    });

    it('calls the change handlers with the right value', async () => {
      renderFormRadioSet();
      const greenRadio = screen.getByLabelText('green');
      await userEvent.click(greenRadio);
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  describe('uncontrolled behavior', () => {
    it('checks the right radio button', () => {
      renderFormRadioSet();
      const redRadio = screen.getByLabelText('red');
      expect(redRadio).toBeChecked();
    });
  });

  it('renders radio controls without a context', () => {
    render(
      <>
        <FormRadio name="trees" value="evergreen">Evergreen</FormRadio>
        <FormRadio name="trees" value="deciduous">Deciduous</FormRadio>
      </>,
    );

    const evergreenRadio = screen.getByLabelText('Evergreen');
    const deciduousRadio = screen.getByLabelText('Deciduous');

    expect(evergreenRadio).toBeInTheDocument();
    expect(deciduousRadio).toBeInTheDocument();
    expect(evergreenRadio).toHaveAttribute('name', 'trees');
    expect(deciduousRadio).toHaveAttribute('name', 'trees');
  });

  it('checks if onClick is called once in FormRadioSet', async () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <FormGroup>
        <FormLabel>Which color?</FormLabel>
        <FormRadioSet
          name="colors"
          onChange={handleChange}
        >
          <FormRadio value="red">Red</FormRadio>
          <FormRadio value="green">Green</FormRadio>
        </FormRadioSet>
      </FormGroup>,
    );

    userEvent.click(getByLabelText('Red'));

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
