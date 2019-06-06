import React from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';

import StatusAlert from './index';
import StatusAlertWrapperWithButton from './StatusAlertWrapperWithButton';
import Icon from '../Icon';

import README from './README.md';

const bell = <Icon className={['fa', 'fa-bell']} />;
const alarm = <Icon className={['fa', 'fa-exclamation-triangle']} />;
const cat = <Icon className={['fa', 'fa-cat']} />;

class ExampleStatusWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      open: this.state.open,
      onClose: this.toggleAlert,
    }));

    return (
      <div>
        {children}
      </div>
    );
  }
}


ExampleStatusWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};
storiesOf('StatusAlert', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <ExampleStatusWrapper>
      <StatusAlert icon={bell}>
        You have a status alert!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('success alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="success"
        icon={bell}
      >Success!
      </StatusAlert>
    </ExampleStatusWrapper >
  ))
  .add('danger alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="danger"
        icon={alarm}
      >Error!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('informational alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
        icon={bell}
      >Get some info here!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('alert with a custom aria-label on the close button', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
        icon={bell}
        closeButtonAriaLabel="Dismiss this very specific information."
      >Some very specific information.
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('Non-dismissible alert', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="danger"
        icon={alarm}
        dismissible={false}
      >You cant get rid of me!
      </StatusAlert>
    </ExampleStatusWrapper>
  ))
  .add('alert invoked via a button', () => (
    <StatusAlertWrapperWithButton>
      <StatusAlert
        alertType="success"
        icon={bell}
      >
      Success! You triggered the alert!
      </StatusAlert>
    </StatusAlertWrapperWithButton>
  ))
  .add('alert with a link', () => (
    <ExampleStatusWrapper>
      <StatusAlert
        alertType="info"
        icon={cat}
      >{(
        <span>
          <span>Love cats? </span>
          <a
            href="https://www.factretriever.com/cat-facts"
            target="_blank"
            rel="noopener noreferrer"
          >
        Click me!
          </a>
        </span>
  )}

      </StatusAlert>
    </ExampleStatusWrapper>
  ));
