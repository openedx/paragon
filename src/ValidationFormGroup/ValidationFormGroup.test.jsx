/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import renderer from 'react-test-renderer';

import ValidationFormGroup from './index';

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
});
