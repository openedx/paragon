import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import Button from '../Button';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

class StatusAlert extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderDialog = this.renderDialog.bind(this);

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  /* eslint-disable react/no-did-update-set-state */
  componentDidUpdate(prevProps, prevState) {
    if (this.state.open && !prevState.open && this.xButton) {
      this.xButton.focus();
    }

    if (this.props.open !== prevProps.open) {
      this.setState({ open: this.props.open });
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  close() {
    this.setState({ open: false });
    this.props.onClose();
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  focus() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  renderDialog() {
    const { dialog } = this.props;

    return (
      <div className="alert-dialog">
        { dialog }
      </div>
    );
  }

  renderDismissible() {
    const { closeButtonAriaLabel, dismissible } = this.props;

    return (dismissible) ? (
      <Button.Deprecated
        aria-label={closeButtonAriaLabel}
        inputRef={(input) => { this.xButton = input; }}
        onClick={this.close}
        onKeyDown={this.handleKeyDown}
        isClose
      >
        <span aria-hidden="true">&times;</span>
      </Button.Deprecated>
    ) : null;
  }

  render() {
    const { alertType, className, dismissible } = this.props;

    return (
      <div
        className={classNames([
          className,
          'alert',
          'fade',
        ], {
          'alert-dismissible': dismissible,
        }, {
          [`alert-${alertType}`]: alertType !== undefined,
        }, {
          show: this.state.open,
        })}
        role="alert"
        hidden={!this.state.open}
      >
        {this.renderDismissible()}
        {this.renderDialog()}
      </div>
    );
  }
}

StatusAlert.propTypes = {
  /** specifies the type of alert that is being diplayed. It defaults to "warning".
   * See the other available [bootstrap](https://react-bootstrap-v4.netlify.app/components/alerts/) options. */
  alertType: PropTypes.string,
  /** is a string array that defines the classes to be used within the status alert. */
  className: PropTypes.string,
  dialog: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** specifies if the status alert will include the dismissible X button to close the alert. It defaults to true. */
  dismissible: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  closeButtonAriaLabel: PropTypes.string,
  /** is a function that is called on close. It can be used to perform actions upon closing of the status alert,
   * such as restoring focus to the previous logical focusable element.  It is only required if `dismissible`
   * is set to `true` and not required if the alert is not `dismissible`. */
  onClose: isRequiredIf(PropTypes.func, props => props.dismissible),
  /** specifies whether the status alert renders open or closed on the initial render. It defaults to false. */
  open: PropTypes.bool,
};

StatusAlert.defaultProps = {
  alertType: 'warning',
  className: undefined,
  closeButtonAriaLabel: 'Close',
  dismissible: true,
  open: false,
};

export default withDeprecatedProps(StatusAlert, 'StatusAlert', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
