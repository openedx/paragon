/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';

import StatusAlert from './index';
import Button from '../Button';

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
  .add('alert with a custom aria-label on the close button', () => (
    <StatusAlert
      alertType="info"
      dialog="Some very specific information."
      onClose={() => {}}
      open
      closeButtonAriaLabel="Dismiss this very specific information."
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
