import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useCheckboxSetContext } from './FormCheckboxSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';

const CheckboxControl = React.forwardRef(
  ({ isIndeterminate, asSwitch, ...props }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    const { getControlProps } = useFormGroupContext();
    const checkboxProps = getControlProps({
      ...props,
      className: classNames(
        'pgn__form-checkbox-input',
        props.className,
        { 'pgn__form-switch-input': asSwitch },
      ),
    });

    React.useEffect(() => {
      resolvedRef.current.indeterminate = isIndeterminate;
    }, [resolvedRef, isIndeterminate]);

    return (
      <input
        type="checkbox"
        {...checkboxProps}
        ref={resolvedRef}
      />
    );
  },
);

CheckboxControl.propTypes = {
  isIndeterminate: PropTypes.bool,
  asSwitch: PropTypes.bool,
  className: PropTypes.string,
};

CheckboxControl.defaultProps = {
  isIndeterminate: false,
  asSwitch: false,
  className: undefined,
};

const FormCheckbox = React.forwardRef(({
  children,
  className,
  controlClassName,
  labelClassName,
  description,
  isInvalid,
  isValid,
  asSwitch,
  ...props
}, ref) => {
  const { getCheckboxControlProps, hasCheckboxSetProvider } = useCheckboxSetContext();
  const { hasFormGroupProvider, useSetIsControlGroupEffect, getControlProps } = useFormGroupContext();
  useSetIsControlGroupEffect(true);
  const shouldActAsGroup = hasFormGroupProvider && !hasCheckboxSetProvider;
  const groupProps = shouldActAsGroup ? {
    ...getControlProps({}),
    role: 'group',
  } : {};
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
        {...groupProps}
      >
        <CheckboxControl {...checkboxInputProps} asSwitch={asSwitch} ref={ref} />
        <div className={classNames('pgn__form-checkbox-label-description', controlClassName)}>
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
  asSwitch: PropTypes.bool,
};

FormCheckbox.defaultProps = {
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  asSwitch: false,
};

export { CheckboxControl };
export default FormCheckbox;
