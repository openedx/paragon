import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRadioSetContext } from './FormRadioSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';

const RadioControl = React.forwardRef((props, ref) => {
  const { getControlProps } = useFormGroupContext();
  const radioProps = getControlProps({
    ...props,
    className: classNames('pgn__form-radio-input', props.className),
  });
  return (
    <input {...radioProps} type="radio" ref={ref} />
  );
});

RadioControl.propTypes = {
  className: PropTypes.string,
};

RadioControl.defaultProps = {
  className: undefined,
};

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
  const { getRadioControlProps } = useRadioSetContext();
  const radioInputProps = getRadioControlProps({
    ...props,
    className: controlClassName,
  });
  return (
    <FormGroupContextProvider
      controlId={radioInputProps.id}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <div
        className={classNames('pgn__form-radio', className, {
          'pgn__form-control-valid': isValid,
          'pgn__form-control-invalid': isInvalid,
          'pgn__form-control-disabled': radioInputProps.disabled,
        })}
      >
        <RadioControl {...radioInputProps} ref={ref} />
        <div>
          <FormLabel className={labelClassName}>
            {children}
          </FormLabel>
          {description && (
            <FormControlFeedback hasIcon={false}>
              {description}
            </FormControlFeedback>
          )}
        </div>
      </div>
    </FormGroupContextProvider>
  );
});

FormRadio.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies class name for control component. */
  controlClassName: PropTypes.string,
  /** Specifies class name for label component. */
  labelClassName: PropTypes.string,
  /** Specifies description to show under the radio's value. */
  description: PropTypes.node,
  /** Specifies whether to display component in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,
  /** Specifies whether to display component in valid state, this affects styling. */
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

export default FormRadio;
