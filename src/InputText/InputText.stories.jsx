/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import InputText from './index';
import StatusAlert from '../StatusAlert';

class FocusInputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };

    this.resetStatusAlertWrapperState = this.resetStatusAlertWrapperState.bind(this);
  }

  resetStatusAlertWrapperState() {
    this.setState({ open: false });
    this.inputForm.focus();
  }

  render() {
    return (
      <div>
        <StatusAlert
          alertType="info"
          open={this.state.open}
          dialog="Close me to input data!"
          onClose={this.resetStatusAlertWrapperState}
        />
        <InputText
          id="data"
          name="data"
          label="Data Input"
          inputRef={(input) => { this.inputForm = input; }}
        />
      </div>
    );
  }
}


storiesOf('InputText', module)
  .add('minimal usage', () => (
    <InputText
      name="name"
      label="First Name"
      value="Foo Bar"
    />
  ))
  .add('validation', () => (
    <InputText
      id="username"
      name="username"
      label="Username"
      description="The unique name that identifies you throughout the site."
      validator={(value) => {
        let feedback = { isValid: true };
        if (value.length < 3) {
          feedback = {
            isValid: false,
            validationMessage: 'Username must be at least 3 characters in length.',
          };
        }
        return feedback;
      }}
    />
  ))
  .add('validation with danger theme', () => (
    <InputText
      name="username"
      label="Username"
      description="The unique name that identifies you throughout the site."
      validator={(value) => {
        let feedback = { isValid: true };
        if (value.length < 3) {
          feedback = {
            isValid: false,
            validationMessage: 'Username must be at least 3 characters in length.',
            dangerIconDescription: 'Error',
          };
        }
        return feedback;
      }}
      themes={['danger']}
    />
  ))
  .add('label as element', () => (
    <InputText
      name="username"
      label={<span lang="en">Element</span>}
      value="Label is wrapped in language span"
    />
  ))
  .add('focus test', () => (
    <FocusInputWrapper />
  ))
  .add('different textual input types', () => (
    <form>
      <InputText
        name="search"
        label="Search"
        value="what is paragon"
        type="search"
      />
      <InputText
        name="email"
        label="Email"
        value="paragon@edx.org"
        type="email"
      />
      <InputText
        name="url"
        label="Url"
        value="https://edx.github.io/paragon"
        type="url"
      />
      <InputText
        name="telephone"
        label="Telephone"
        value="1-(555)-555-5555"
        type="tel"
      />
      <InputText
        name="password"
        label="Password"
        value="hunter2"
        type="password"
      />
      <InputText
        name="number"
        label="Number"
        value="42"
        type="number"
      />
      <InputText
        name="datetime-local"
        label="Date and time"
        value="2017-04-27T13:45:00"
        type="datetime-local"
      />
      <InputText
        name="date"
        label="Date"
        value="2017-04-27"
        type="date"
      />
      <InputText
        name="month"
        label="Month"
        value="2017-04"
        type="month"
      />
      <InputText
        name="week"
        label="Week"
        value="2017-W33"
        type="week"
      />
      <InputText
        name="time"
        label="Time"
        value="13:45:00"
        type="time"
      />
      <InputText
        name="color"
        label="Color"
        value="#BF472C"
        type="color"
      />
    </form>
  ))
  .add('displayed inline', () => (
    <InputText
      name="username"
      label="Username"
      value="foobar"
      inline
    />
  ));
