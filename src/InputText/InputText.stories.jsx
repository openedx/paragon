/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

import Button from '../Button';
import Icon from '../Icon';
import InputText from './index';
import StatusAlert from '../StatusAlert';
import README from './README.md';

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
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('minimal usage', () => (
    <InputText
      name="name"
      label="First Name"
      value="Foo Bar"
    />
  ))
  .add('read only', () => (
    <InputText
      name="inputState"
      label="Input State"
      value="Read Only"
      readOnly
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
        id="input-search"
      />
      <InputText
        name="email"
        label="Email"
        value="paragon@edx.org"
        type="email"
        id="input-email"
      />
      <InputText
        name="url"
        label="Url"
        value="https://edx.github.io/paragon"
        type="url"
        id="input-url"
      />
      <InputText
        name="telephone"
        label="Telephone"
        value="1-(555)-555-5555"
        type="tel"
        id="input-tel"
      />
      <InputText
        name="password"
        label="Password"
        value="hunter2"
        type="password"
        id="input-password"
      />
      <InputText
        name="number"
        label="Number"
        value={42}
        type="number"
        id="input-number"
      />
      <InputText
        name="datetime-local"
        label="Date and time"
        value="2017-04-27T13:45:00"
        type="datetime-local"
        id="input-datetime-local"
      />
      <InputText
        name="date"
        label="Date"
        value="2017-04-27"
        type="date"
        id="input-date"
      />
      <InputText
        name="month"
        label="Month"
        value="2017-04"
        type="month"
        id="input-month"
      />
      <InputText
        name="week"
        label="Week"
        value="2017-W33"
        type="week"
        id="input-week"
      />
      <InputText
        name="time"
        label="Time"
        value="13:45:00"
        type="time"
        id="input-time"
      />
      <InputText
        name="color"
        label="Color"
        value="#BF472C"
        type="color"
        id="input-color"
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
  ))
  .add('with input group addons', () => (
    <form>
      <InputText
        name="username"
        label="Username"
        value="foobar"
        inputGroupPrepend={(
          <div className="input-group-text">
            {'@'}
          </div>
        )}
      />
      <InputText
        name="username"
        label="Username"
        value="foobar"
        inputGroupAppend={(
          <div className="input-group-text">
            {'@example.com'}
          </div>
        )}
      />
      <InputText
        name="money"
        label="Money"
        type="number"
        value={1000}
        inputGroupPrepend={(
          <div className="input-group-text">
            {'$'}
          </div>
        )}
        inputGroupAppend={(
          <div className="input-group-text">
            {'.00'}
          </div>
        )}
      />
      <InputText
        name="search"
        label="Search"
        value="what is paragon"
        inputGroupAppend={(
          <Button
            label="Go"
            buttonType="outline-secondary"
          />
        )}
      />
      <InputText
        name="username"
        label="Username"
        value="foobar"
        inputGroupAppend={[
          <div className="input-group-text">
            <Icon
              id="checkmark"
              className={[
                FontAwesomeStyles.fa,
                FontAwesomeStyles['fa-check'],
              ]}
              screenReaderText="Checkmark"
            />
          </div>,
          <Button
            label="Go"
            buttonType="outline-secondary"
          />,
        ]}
      />
      <InputText
        name="password"
        label="Password"
        value="secret"
        inputGroupAppend={(
          <div className="input-group-text">
            <Icon
              id="checkmark"
              className={[
                FontAwesomeStyles.fa,
                FontAwesomeStyles['fa-check'],
              ]}
              screenReaderText="Checkmark"
            />
          </div>
        )}
      />
    </form>
  ));
