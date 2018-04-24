import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

import styles from './ValidationMessage.scss';
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
  className: '',
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
        className = styles['invalid-feedback-nodanger'];
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
          <React.Fragment>
            <span
              className={classNames(
                FontAwesomeStyles.fa,
                FontAwesomeStyles['fa-exclamation-circle'],
                styles['fa-icon-spacing'],
              )}
              aria-hidden
            />
            <span
              className={classNames(styles['sr-only'])}
            >
              {variantIconDescription}
            </span>
          </React.Fragment>
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
          styles['invalid-feedback'],
          this.getVariantFeedbackClassName(),
          className,
        )}
        id={id}
        aria-live="polite"
      >
        { isValid ? (
          <span />
        ) :
          <React.Fragment>
            {this.getVariantIcon()}
            {invalidMessage}
          </React.Fragment>
        }
      </div>
    );
  }
}

ValidationMessage.propTypes = inputProps;
ValidationMessage.defaultProps = defaultProps;

export default ValidationMessage;
