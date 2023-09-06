import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FormGroup from '../FormGroup';
import FormRadioSet from '../FormRadioSet';
import FormRadio from '../FormRadio';
import FormLabel from '../FormLabel';

describe('FormRadioSet', () => {
  describe('associate element ids and attributes', () => {
    it('has a radiogroup div with the proper id', () => {
      const handleChange = jest.fn();
      const value = 'green';
      const { getByRole } = render(
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
      );
      const radioGroupNode = getByRole('radiogroup', { name: /Which color\?/i });
      expect(radioGroupNode).toBeInTheDocument();
      expect(radioGroupNode).toHaveAttribute('id', 'my-field');
    });

    it('has an element labelling the radiogroup', () => {
      const handleChange = jest.fn();
      const value = 'green';
      const { getByText, getByRole } = render(
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
      );
      const labelNode = getByText('Which color?');
      const radioGroupNode = getByRole('radiogroup', { name: /Which color\?/i });
      const labelNodeId = labelNode.getAttribute('id');
      expect(labelNode).toBeInTheDocument();
      expect(labelNodeId).toBeTruthy();
      expect(radioGroupNode).toHaveAttribute('aria-labelledby', expect.stringContaining(labelNodeId));
    });
  });

  describe('controlled behavior', () => {
    it('checks the right radio button', () => {
      const setValue = jest.fn();
      const { getByLabelText } = render(
        <FormRadioSet
          value="red"
          name="colors"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <FormRadio value="red">red</FormRadio>
          <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
          <FormRadio value="blue">blue</FormRadio>
        </FormRadioSet>,
      );
      const redRadio = getByLabelText('red');
      expect(redRadio).toBeChecked();
    });

    it('calls the change handlers with the right value', () => {
      const setValue = jest.fn();
      const { getByLabelText } = render(
        <FormRadioSet
          value="red"
          name="colors"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <FormRadio value="red">red</FormRadio>
          <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
          <FormRadio value="blue">blue</FormRadio>
        </FormRadioSet>,
      );
      const greenRadio = getByLabelText('green');
      fireEvent.click(greenRadio);
      expect(setValue).toHaveBeenCalledWith('green');
    });
  });

  describe('uncontrolled behavior', () => {
    it('checks the right radio button', () => {
      const { getByLabelText } = render(
        <FormRadioSet
          defaultValue="red"
          name="colors"
          id="my-field"
          label="Which color?"
        >
          <FormRadio value="red">red</FormRadio>
          <FormRadio value="green" isInvalid description="Nope">green</FormRadio>
          <FormRadio value="blue">blue</FormRadio>
        </FormRadioSet>,
      );
      const redRadio = getByLabelText('red');
      expect(redRadio).toBeChecked();
    });
  });

  it('renders radio controls without a context', () => {
    const { getByLabelText } = render(
      <>
        <FormRadio name="trees" value="evergreen">Evergreen</FormRadio>
        <FormRadio name="trees" value="deciduous">Deciduous</FormRadio>
      </>,
    );

    const evergreenRadio = getByLabelText('Evergreen');
    const deciduousRadio = getByLabelText('Deciduous');

    expect(evergreenRadio).toBeInTheDocument();
    expect(deciduousRadio).toBeInTheDocument();
    expect(evergreenRadio).toHaveAttribute('name', 'trees');
    expect(deciduousRadio).toHaveAttribute('name', 'trees');
  });
});
