import React from 'react';
import { storiesOf } from '@storybook/react';
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
          onClose={this.resetStatusAlertWrapperState}
        >
          {this.props.children}
        </StatusAlert>
        <Button
          onClick={this.openStatusAlert}
          buttonType="light"
          inputRef={(input) => { this.button = input; }}
        >
          Click me to open a Status Alert!
        </Button>
      </div>
    );
  }
}

StatusAlertWrapper.propTypes = {
  alertType: PropTypes.string,
  children: PropTypes.string.isRequired,

};

StatusAlertWrapper.defaultProps = {
  alertType: 'warning',
};

storiesOf('StatusAlert', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <StatusAlert
      onClose={() => {}}
      open
    >You have a status alert!
    </StatusAlert>
  ))
  .add('success alert', () => (
    <StatusAlert
      alertType="success"
      onClose={() => {}}
      open
    >Success!
    </StatusAlert>
  ))
  .add('danger alert', () => (
    <StatusAlert
      alertType="danger"
      onClose={() => {}}
      open
    >Error!
    </StatusAlert>
  ))
  .add('informational alert', () => (
    <StatusAlert
      alertType="info"
      onClose={() => {}}
      open
    >Get some info here!
    </StatusAlert>
  ))
  .add('alert with a custom aria-label on the close button', () => (
    <StatusAlert
      alertType="info"
      onClose={() => {}}
      open
      closeButtonAriaLabel="Dismiss this very specific information."
    >Some very specific information.
    </StatusAlert>
  ))
  .add('Non-dismissible alert', () => (
    <StatusAlert
      alertType="danger"
      dismissible={false}
      open
    >You cant get rid of me!
    </StatusAlert>
  ))
  .add('alert invoked via a button', () => (
    <StatusAlertWrapper
      alertType="success"
    > Success! You triggered the alert!
    </StatusAlertWrapper>
  ))
  .add('alert with a link', () => (
    <StatusAlert
      alertType="info"
      onClose={() => {}}
      open
    >{(
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

    </StatusAlert>
  ));
