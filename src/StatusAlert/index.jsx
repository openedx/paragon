/* eslint-disable max-len */
/** @jsx jsx */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';
import { jsx, withTheme } from '@emotion/react';

import Button from '../Button';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';
import getStyle from './style';

export class StatusAlert extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.style = getStyle(this.props.theme);
    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  // TODO: Move to getDerivedStateFromProps
  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.open && !prevState.open && this.xButton) {
      this.xButton.focus();
    }
  }

  focus() {
    this.xButton.focus();
  }

  close() {
    this.setState({ open: false });
    this.props.onClose();
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
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
        css={{
          ...this.style.alert,
          ...this.style.fade,
          ...(dismissible ? this.style.alertDismissible : {}),
          ...(alertType !== undefined ? this.style.alertColor(alertType) : {}),
        }}

        className={classNames([
          'alert',
          className,
        ], {
          show: this.state.open,
        })}
        role="alert"
        hidden={!this.state.open}
      >
        {this.renderDismissible()}
        <div className="alert-dialog">
          { this.props.dialog }
        </div>
      </div>
    );
  }
}

StatusAlert.propTypes = {
  /** specifies the type of alert that is being diplayed. It defaults to "warning".  See the other available [bootstrap](https://v4-alpha.getbootstrap.com/components/alerts/) options. */
  alertType: PropTypes.string,
  /** is a string array that defines the classes to be used within the status alert. */
  className: PropTypes.string,
  dialog: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** specifies if the status alert will include the dismissible X button to close the alert. It defaults to true. */
  dismissible: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  closeButtonAriaLabel: PropTypes.string,
  /** is a function that is called on close. It can be used to perform actions upon closing of the status alert, such as restoring focus to the previous logical focusable element.  It is only required if `dismissible` is set to `true` and not required if the alert is not `dismissible`. */
  onClose: isRequiredIf(PropTypes.func, props => props.dismissible),
  /** specifies whether the status alert renders open or closed on the initial render. It defaults to false. */
  open: PropTypes.bool,

  theme: PropTypes.shape({
    component: PropTypes.shape({
      borderRadius: PropTypes.number,
    }),
    text: PropTypes.shape({
      fontWeight: PropTypes.shape({
        normal: PropTypes.number,
      }),
      fontSize: PropTypes.shape({
        base: PropTypes.string,
      }),
    }),
    colors: PropTypes.shape({
      primary500: PropTypes.string,
    }),
    getThemeColor: PropTypes.func,
  }),
};

StatusAlert.defaultProps = {
  alertType: 'warning',
  className: undefined,
  closeButtonAriaLabel: 'Close',
  dismissible: true,
  open: false,
};

export default withTheme(withDeprecatedProps(StatusAlert, 'StatusAlert', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));
