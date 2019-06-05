import React from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';

import StatusAlert from './index';
import Button from '../Button';

import README from './README.md';
import ExampleStatusWrapper from './ExampleStatusWrapper';

class StatusAlertWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <StatusAlert
          alertType={this.props.alertType}
          open={this.state.open}
          onClose={this.toggleAlert}
        >
          {this.props.children}
        </StatusAlert>
        <Button
          onClick={this.toggleAlert}
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
    <ExampleStatusWrapper>
      <StatusAlert>
        You have a status alert!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('success alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="success"
      >Success!
      </StatusAlert>
    </ExampleStatusWrapper >
  ))
  .add('danger alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="danger"
      >Error!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('informational alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
      >Get some info here!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('alert with a custom aria-label on the close button', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
        closeButtonAriaLabel="Dismiss this very specific information."
      >Some very specific information.
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('Non-dismissible alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="danger"
        dismissible={false}
      >You cant get rid of me!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('alert invoked via a button', () => (
    <StatusAlertWrapper
      alertType="success"
    > Success! You triggered the alert!
    </StatusAlertWrapper>
  ))
  .add('alert with a link', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
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
    </ExampleStatusWrapper>
  ));
