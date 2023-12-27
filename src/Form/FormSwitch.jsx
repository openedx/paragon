import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormCheckbox from './FormCheckbox';
import { useFormGroupContext } from './FormGroupContext';

const SwitchControl = React.forwardRef(
  ({ isIndeterminate, ...props }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;
    const { getControlProps } = useFormGroupContext();
    const checkboxProps = getControlProps({
      ...props,
      className: classNames(
        'pgn__form-switch-input',
        props.className,
      ),
    });

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

SwitchControl.propTypes = {
  /** Specifies whether input should be rendered in indeterminate state. */
  isIndeterminate: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

SwitchControl.defaultProps = {
  isIndeterminate: false,
  className: undefined,
};

const FormSwitch = React.forwardRef(({
  children,
  className,
  helperText,
  ...props
}, ref) => (
  <div className="d-inline-flex flex-column">
    <FormCheckbox
      className={classNames('pgn__form-switch', className)}
      {...props}
      role="switch"
      ref={ref}
      controlAs={SwitchControl}
      // ignore the following props for form switch
      isValid={null}
      isInvalid={null}
      description={null}
    >
      {children}
    </FormCheckbox>
    {helperText && (
      <div className="pgn__form-switch-helper-text">
        {helperText}
      </div>
    )}
  </div>
));

FormSwitch.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies class name to append to the label element. */
  labelClassName: PropTypes.string,
  /** Specifies helper text to display below the switch. */
  helperText: PropTypes.node,
  /** Determines whether the label should float to the left when the switch is active. */
  floatLabelLeft: PropTypes.bool,
};

FormSwitch.defaultProps = {
  className: undefined,
  labelClassName: undefined,
  helperText: undefined,
  floatLabelLeft: false,
};

export { SwitchControl };
export default FormSwitch;
