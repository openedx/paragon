import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';


class StatusAlertWrapperWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      toggleAlert: this.toggleAlert,
      isOpen: this.state.isOpen,
    }));

    return (
      <div>
        <div>
          {children}
        </div>
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

export default StatusAlertWrapperWithButton;

StatusAlertWrapperWithButton.propTypes = {
  children: PropTypes.element.isRequired,
};
