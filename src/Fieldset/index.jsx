import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import styles from './Fieldset.scss';
import ValidationMessage from '../ValidationMessage/index';
import Variant from '../utils/constants';

const inputProps = {
  legend: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,

  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  isValid: PropTypes.bool,
  invalidMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  variant: PropTypes.shape({
    status: PropTypes.oneOf(Object.keys(Variant.status).map(k => Variant.status[k])),
  }),
  variantIconDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const defaultProps = {
  children: null,
  className: '',
  id: '',
  isValid: true,
  invalidMessage: '',
  variant: {
    status: Variant.status.INFO,
  },
  variantIconDescription: '',
};

class Fieldset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: props.id || newId('fieldset') };
  }

  componentWillReceiveProps(nextProps) {
    // TODO: use getDerivedStateFromProps when upgraded to React 16.3+
    if (nextProps.id !== this.props.id) {
      this.setState({ id: nextProps.id || newId('fieldset') });
    }
  }

  getVariantClassName() {
    const { variant } = this.props;
    let className;

    switch (variant.status) {
      case Variant.status.INFO:
        className = styles['is-invalid-nodanger'];
        break;
      default:
        break;
    }

    return className;
  }

  render() {
    const {
      className,
      children,
      variantIconDescription,
      invalidMessage,
      isValid,
      legend,
      variant,
    } = this.props;
    const errorId = `error-${this.state.id}`;
    return (
      <div className={styles['paragon-fieldset']}>
        <fieldset
          className={classNames(
            styles['form-control'],
            styles['p-3'],
            { 'is-invalid': !isValid },
            this.getVariantClassName(),
            className,
          )}
          aria-describedby={errorId}
        >
          <legend className={styles['p-1']}>{legend}</legend>
          {children}
        </fieldset>
        <ValidationMessage
          id={errorId}
          isValid={isValid}
          invalidMessage={invalidMessage}
          variant={variant}
          variantIconDescription={variantIconDescription}
        />
      </div>
    );
  }
}

Fieldset.propTypes = inputProps;
Fieldset.defaultProps = defaultProps;

export default Fieldset;
