import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Input from '../Input';
import { FormControl, Form } from '..';
import ValidationFormGroup from '.';

describe('ValidationFormGroup', () => {
  const labelAndInputComponents = (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        className="form-control"
        type="text"
        id="firstName"
        name="first-name"
        value="Adam"
        onChange={() => {}}
      />
    </>
  );

  it('renders', () => {
    const tree = renderer.create((
      <ValidationFormGroup
        for="firstName"
      >
        {labelAndInputComponents}
      </ValidationFormGroup>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with help text', () => {
    const tree = renderer.create((
      <ValidationFormGroup
        for="firstName"
        helpText="This is your first name."
      >
        {labelAndInputComponents}
      </ValidationFormGroup>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an invalid message', () => {
    const tree = renderer.create((
      <ValidationFormGroup
        for="firstName"
        helpText="This is your first name."
        invalid
        invalidMessage="This is not your name."
      >
        {labelAndInputComponents}
      </ValidationFormGroup>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a valid message', () => {
    const tree = renderer.create((
      <ValidationFormGroup
        for="firstName"
        helpText="This is your first name."
        valid
        validMessage="What a nice name."
      >
        {labelAndInputComponents}
      </ValidationFormGroup>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an invalid message with a select input', () => {
    const tree = renderer.create((
      <ValidationFormGroup
        for="weatherToday"
        helpText="Look out the window to see."
        valid
        validMessage="Correct!"
      >
        <label htmlFor="weatherToday">How is the weather today?</label>
        <select id="weatherToday" name="weather" value="Sunny" onChange={() => {}}>
          <option>Sunny</option>
          <option>Cloudy</option>
          <option>Rainy</option>
          <option>Snowy</option>
        </select>
      </ValidationFormGroup>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  [
    { Component: Input, name: 'Input' },
    { Component: FormControl, name: 'FormControl' },
    { Component: Form.Control, name: 'Form.Control' },
  ].forEach(({ Component, name }) => {
    const formControlId = 'bestForm';
    const formControlHelp = 'So helpful';
    const validMessage = 'Valid feedback';
    const invalidMessage = 'Exterminate, Exterminate';

    it(`renders a ${name} child with the correct aria attributes and helptext`, () => {
      render(
        <ValidationFormGroup
          for={formControlId}
          helpText={formControlHelp}
          validMessage={validMessage}
          valid
        >
          <Component id={formControlId} />
        </ValidationFormGroup>,
      );
      const component = screen.getByRole('textbox');
      expect(component.getAttribute('aria-describedby')).toBe(`${formControlId}-help-text ${formControlId}-valid-feedback`);
      expect(screen.getByText(formControlHelp)).toBeTruthy();
    });
    it(`renders a ${name} child with the correct valid message`, () => {
      render(
        <ValidationFormGroup
          for={formControlId}
          helpText={formControlHelp}
          validMessage={validMessage}
          valid
        >
          <Component id={formControlId} />
        </ValidationFormGroup>,
      );
      expect(screen.getByText(validMessage)).toBeTruthy();
    });
    it(`renders a ${name} child with the correct invalid message`, () => {
      render(
        <ValidationFormGroup
          for={formControlId}
          helpText={formControlHelp}
          invalidMessage={invalidMessage}
          invalid
        >
          <Component id={formControlId} />
        </ValidationFormGroup>,
      );
      expect(screen.getByText(invalidMessage)).toBeTruthy();
    });
  });
});
