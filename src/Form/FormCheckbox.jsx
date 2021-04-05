import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useCheckboxSetContext } from './FormCheckboxSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';

const CheckboxControl = React.forwardRef(
  ({ isIndeterminate, ...props }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    const { getControlProps } = useFormGroupContext();
    const checkboxProps = getControlProps(props);

    React.useEffect(() => {
      resolvedRef.current.indeterminate = isIndeterminate;
    }, [resolvedRef, isIndeterminate]);

    return (
      <input type="checkbox" {...checkboxProps} ref={resolvedRef} {...props} />
    );
  },
);

CheckboxControl.propTypes = {
  isIndeterminate: PropTypes.bool,
};

CheckboxControl.defaultProps = {
  isIndeterminate: false,
};

const FormCheckbox = React.forwardRef(({
  children,
  className,
  controlClassName,
  labelClassName,
  description,
  isInvalid,
  isValid,
  ...props
}, ref) => {
  const { getCheckboxControlProps } = useCheckboxSetContext();
  const checkboxInputProps = getCheckboxControlProps(props);
  return (
    <FormGroupContextProvider
      controlId={checkboxInputProps.id}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <div
        className={classNames('pgn__form-checkbox', className, {
          'pgn__form-checkbox-valid': isValid,
          'pgn__form-checkbox-invalid': isInvalid,
          'pgn__form-checkbox-disabled': checkboxInputProps.disabled,
        })}
      >
        <CheckboxControl {...checkboxInputProps} ref={ref} />
        <div className={classNames('pgn__form-checkbox-display', controlClassName)}>
          <FormLabel className={classNames('pgn__form-checkbox-label', labelClassName)}>
            <span className={classNames('pgn__form-checkbox-control', controlClassName)} />
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

FormCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  controlClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  description: PropTypes.node,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
};

FormCheckbox.defaultProps = {
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
};

export default FormCheckbox;
