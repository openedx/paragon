import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Variant from '../utils/constants';

const inputProps = {
  id: PropTypes.string.isRequired,

  className: PropTypes.string,
  isValid: PropTypes.bool,
  invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.shape({
    status: PropTypes.oneOf(Object.keys(Variant.status).map(k => Variant.status[k])),
  }),
  variantIconDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const defaultProps = {
  className: undefined,
  isValid: true,
  invalidMessage: '',
  variant: {
    status: Variant.status.INFO,
  },
  variantIconDescription: '',
};

class ValidationMessage extends React.Component {
  getVariantFeedbackClassName() {
    const { variant } = this.props;
    let className;

    switch (variant.status) {
      case Variant.status.INFO:
        className = 'invalid-feedback-nodanger';
        break;
      default:
        break;
    }

    return className;
  }

  getVariantIcon() {
    const {
      variantIconDescription,
      variant,
    } = this.props;
    let icon;

    switch (variant.status) {
      case Variant.status.DANGER:
        icon = (
          <>
            <span
              className={classNames(
                'fa',
                'fa-exclamation-circle',
                'fa-icon-spacing',
              )}
              aria-hidden
            />
            <span
              className={classNames('sr-only')}
            >
              {variantIconDescription}
            </span>
          </>
        );
        break;
      default:
        break;
    }

    return icon;
  }

  render() {
    const {
      className,
      id,
      invalidMessage,
      isValid,
    } = this.props;
    return (
      <div
        className={classNames(
          'invalid-feedback',
          this.getVariantFeedbackClassName(),
          className,
        )}
        id={id}
        aria-live="polite"
        data-testid="validation-message"
      >
        { isValid ? (
          <span />
        )
          : (
            <>
              {this.getVariantIcon()}
              {invalidMessage}
            </>
          )}
      </div>
    );
  }
}

ValidationMessage.propTypes = inputProps;
ValidationMessage.defaultProps = defaultProps;

export default ValidationMessage;
