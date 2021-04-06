import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRadioSetContext } from './FormRadioSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';

const RadioControl = React.forwardRef((props, ref) => {
  const { getControlProps } = useFormGroupContext();
  const radioProps = getControlProps(props);
  return (
    <input {...radioProps} type="radio" ref={ref} />
  );
});

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
  const radioInputProps = getRadioControlProps(props);
  return (
    <FormGroupContextProvider
      controlId={radioInputProps.id}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <div
        className={classNames('pgn__form-radio', className, {
          'pgn__form-radio-valid': isValid,
          'pgn__form-radio-invalid': isInvalid,
          'pgn__form-radio-disabled': radioInputProps.disabled,
        })}
      >
        <RadioControl {...radioInputProps} ref={ref} />
        <div className={classNames('pgn__form-radio-label-description', controlClassName)}>
          <FormLabel className={classNames('pgn__form-radio-label', labelClassName)}>
            <span className={classNames('pgn__form-radio-control', controlClassName)} />
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

export default FormRadio;
