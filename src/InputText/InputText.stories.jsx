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
  .add('focus test', () => (
    <FocusInputWrapper />
  ));
