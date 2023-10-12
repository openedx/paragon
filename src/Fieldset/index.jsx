import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';

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
  className: undefined,
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id !== prevState.id) {
      return { id: nextProps.id || newId('fieldset') };
    }

    return null;
  }

  getVariantClassName() {
    const { variant } = this.props;
    let className;

    switch (variant.status) {
      case Variant.status.INFO:
        className = 'is-invalid-nodanger';
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
      <div className="paragon-fieldset">
        <fieldset
          className={classNames(
            'form-control',
            'p-3',
            { 'is-invalid': !isValid },
            this.getVariantClassName(),
            className,
          )}
          aria-describedby={errorId}
          data-testid="fieldset"
        >
          <legend className="p-1">{legend}</legend>
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
