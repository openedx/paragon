import React from 'react';
import { storiesOf } from '@storybook/react';

import ValidationFormGroup from './index';
import Input from '../Input';
import README from './README.md';

storiesOf('User Input|Validation Form Group', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <ValidationFormGroup
      for="firstName"
      helpText="This is your name."
    >
      <label htmlFor="firstName">First Name</label>
      <Input
        type="text"
        id="firstName"
        name="first-name"
        value="Casey"
        onChange={() => {}}
      />
    </ValidationFormGroup>
  ))
  .add('invalid message', () => (
    <ValidationFormGroup
      for="firstName"
      invalid
      invalidMessage="Wrong!"
    >
      <label htmlFor="firstName">First Name</label>
      <Input
        type="text"
        id="firstName"
        name="first-name"
        value="Casey"
        onChange={() => {}}
      />
    </ValidationFormGroup>
  ))
  .add('valid message', () => (
    <ValidationFormGroup
      for="firstName"
      valid
      validMessage="What a nice name!"
    >
      <label htmlFor="firstName">First Name</label>
      <Input
        type="text"
        id="firstName"
        name="first-name"
        value="Casey"
        onChange={() => {}}
      />
    </ValidationFormGroup>
  ))
  .add('with any kind of input', () => (
    <ValidationFormGroup
      for="weatherToday"
      helpText="Look out the window to see."
      valid
      validMessage="Correct!"
    >
      <label htmlFor="weatherToday">How is the weather today?</label>
      <select
        className="form-control"
        id="weatherToday"
        name="weather"
        value="Sunny"
        onChange={() => {}}
      >
        <option>Sunny</option>
        <option>Cloudy</option>
        <option>Rainy</option>
        <option>Snowy</option>
      </select>
    </ValidationFormGroup>
  ));
