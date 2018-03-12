import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import PropTypes from 'prop-types';

import StatusAlert from './index';
import Button from '../Button';
import README from './README.md';

class StatusAlertWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openStatusAlert = this.openStatusAlert.bind(this);
    this.resetStatusAlertWrapperState = this.resetStatusAlertWrapperState.bind(this);

    this.state = { open: false };
  }

  openStatusAlert() {
    this.setState({ open: true });
  }

  resetStatusAlertWrapperState() {
    this.setState({ open: false });
    this.button.focus();
  }

  render() {
    return (
      <div>
        <StatusAlert
          alertType={this.props.alertType}
          open={this.state.open}
          dialog={this.props.dialog}
          onClose={this.resetStatusAlertWrapperState}
        />
        <Button
          onClick={this.openStatusAlert}
          label="Click me to open a Status Alert!"
          buttonType="light"
          inputRef={(input) => { this.button = input; }}
        />
      </div>
    );
  }
}

StatusAlertWrapper.propTypes = {
  alertType: PropTypes.string,
  dialog: PropTypes.string.isRequired,

};

StatusAlertWrapper.defaultProps = {
  alertType: 'warning',
};

storiesOf('StatusAlert', module)
  .addDecorator((story, context) => withInfo({}, README)(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('basic usage', () => (
    <StatusAlert
      dialog="You have a status alert!"
      onClose={() => {}}
      open
    />
  ))
  .add('success alert', () => (
    <StatusAlert
      alertType="success"
      dialog="Success!"
      onClose={() => {}}
      open
    />
  ))
  .add('danger alert', () => (
    <StatusAlert
      alertType="danger"
      dialog="Error!"
      onClose={() => {}}
      open
    />
  ))
  .add('informational alert', () => (
    <StatusAlert
      alertType="info"
      dialog="Get some info here!"
      onClose={() => {}}
      open
    />
  ))
  .add('Non-dismissible alert', () => (
    <StatusAlert
      alertType="danger"
      dismissible={false}
      dialog="You can't get rid of me!"
      open
    />
  ))
  .add('alert invoked via a button', () => (
    <StatusAlertWrapper
      alertType="success"
      dialog="Success! You triggered the alert!"
    />
  ))
  .add('alert with a link', () => (
    <StatusAlert
      alertType="info"
      dialog={(
        <div>
          <span>Love cats? </span>
          <a
            href="https://www.factretriever.com/cat-facts"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click me!
          </a>
        </div>
      )}
      onClose={() => {}}
      open
    />
  ));
