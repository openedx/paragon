/* disable label has for since we are leveraging implicit labeling */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { resolveTextType } from './FormText';
import { useRadioGroupContext } from './FormRadioGroupContext';
import FormRadioFeedback from './FormRadioFeedback';

const FormRadio = React.forwardRef(({
  children,
  className,
  controlClassName,
  labelClassName,
  description,
  isInvalid,
  isValid,
  ...props
}, ref) => {
  const { getRadioInputProps } = useRadioGroupContext();
  const radioInputProps = getRadioInputProps(props);

  return (
    <label
      className={classNames('pgn__form-radio', className, {
        'pgn__form-radio-valid': isValid,
        'pgn__form-radio-invalid': isInvalid,
        'pgn__form-radio-disabled': radioInputProps.disabled,
      })}
    >
      <span className={classNames('pgn__form-radio-lockup', controlClassName)}>
        <input
          {...props}
          {...radioInputProps}
          type="radio"
          ref={ref}
          className={classNames('pgn__form-radio-control', controlClassName)}
        />
        <span className={classNames('pgn__form-radio-label', controlClassName)}>
          {children}
        </span>
      </span>
      {description && (
        <FormRadioFeedback hasIcon={false} type={resolveTextType({ isValid, isInvalid })}>
          {description}
        </FormRadioFeedback>
      )}
    </label>
  );
});

FormRadio.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  description: PropTypes.node,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
};

FormRadio.defaultProps = {
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
};

FormRadio.Feedback = FormRadioFeedback;

export default FormRadio;
