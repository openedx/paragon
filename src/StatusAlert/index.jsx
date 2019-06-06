import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

import Button from '../Button';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

class StatusAlert extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      this.close();
    }
  }

  renderDismissibleButton() {
    const { closeButtonAriaLabel, dismissible, onClose } = this.props;

    return (dismissible) ? (
      <Button
        aria-label={closeButtonAriaLabel}
        inputRef={(input) => { this.xButton = input; }}
        onClick={onClose}
        onKeyDown={this.handleKeyDown}
        isClose
      >
        <span aria-hidden="true">&times;</span>
      </Button>
    ) : null;
  }

  render() {
    const {
      alertType, className, dismissible, open, icon,
    } = this.props;

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
          show: open,
        })}
        role="alert"
        hidden={!open}
      >

        {this.renderDismissibleButton()}
        {icon ? <span>{icon}</span> : null}
        <span className="alert-dialog">
          { this.props.children }
        </span>
      </div>
    );
  }
}

StatusAlert.propTypes = {
  alertType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  dismissible: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  closeButtonAriaLabel: PropTypes.string,
  onClose: isRequiredIf(PropTypes.func, props => props.dismissible),
  open: PropTypes.bool,
  icon: PropTypes.string,
};

StatusAlert.defaultProps = {
  alertType: 'warning',
  className: undefined,
  closeButtonAriaLabel: 'Close',
  dismissible: true,
  open: false,
  icon: null,
};

export default withDeprecatedProps(StatusAlert, 'StatusAlert', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
