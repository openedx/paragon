import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useCheckboxSetContext } from './FormCheckboxSetContext';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormLabel from './FormLabel';
import FormControlFeedback from './FormControlFeedback';

const CheckboxControl = React.forwardRef(
  ({ isIndeterminate, ...props }, ref) => {
    const { getCheckboxControlProps, hasCheckboxSetProvider } = useCheckboxSetContext();
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    const { getControlProps } = useFormGroupContext();
    let checkboxProps = getControlProps({
      ...props,
      className: classNames('pgn__form-checkbox-input', props.className),
    });

    if (hasCheckboxSetProvider) {
      checkboxProps = getCheckboxControlProps(checkboxProps);
    }

    React.useEffect(() => {
      // this if(resolvedRef.current) prevents console errors in testing
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = isIndeterminate;
      }
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
  /** Specifies whether the checkbox should be rendered in indeterminate state. */
  isIndeterminate: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

CheckboxControl.defaultProps = {
  isIndeterminate: false,
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
  controlAs,
  floatLabelLeft,
  ...props
}, ref) => {
  const { hasCheckboxSetProvider } = useCheckboxSetContext();
  const { hasFormGroupProvider, useSetIsControlGroupEffect, getControlProps } = useFormGroupContext();
  useSetIsControlGroupEffect(true);
  const shouldActAsGroup = hasFormGroupProvider && !hasCheckboxSetProvider;
  const groupProps = shouldActAsGroup ? {
    ...getControlProps({}),
    role: 'group',
  } : {};

  const control = React.createElement(controlAs, { ...props, className: controlClassName, ref });
  return (
    <FormGroupContextProvider
      controlId={props.id}
      isInvalid={isInvalid}
      isValid={isValid}
    >
      <div
        className={classNames('pgn__form-checkbox', className, {
          'pgn__form-control-valid': isValid,
          'pgn__form-control-invalid': isInvalid,
          'pgn__form-control-disabled': props.disabled,
          'pgn__form-control-label-left': !!floatLabelLeft,
        })}
        {...groupProps}
      >
        {control}
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

FormCheckbox.propTypes = {
  /** Specifies id of the FormCheckbox component. */
  id: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies class name for control component. */
  controlClassName: PropTypes.string,
  /** Specifies class name for label component. */
  labelClassName: PropTypes.string,
  /** Specifies description to show under the checkbox. */
  description: PropTypes.node,
  /** Specifies whether to display checkbox in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,
  /** Specifies whether to display checkbox in valid state, this affects styling. */
  isValid: PropTypes.bool,
  /** Specifies control element. */
  controlAs: PropTypes.elementType,
  /** Specifies whether the floating label should be aligned to the left. */
  floatLabelLeft: PropTypes.bool,
  /** Specifies whether the `FormCheckbox` is disabled. */
  disabled: PropTypes.bool,
};

FormCheckbox.defaultProps = {
  id: undefined,
  className: undefined,
  controlClassName: undefined,
  labelClassName: undefined,
  description: undefined,
  isInvalid: false,
  isValid: false,
  controlAs: CheckboxControl,
  floatLabelLeft: false,
  disabled: false,
};

export { CheckboxControl };
export default FormCheckbox;
