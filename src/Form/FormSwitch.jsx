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
  isIndeterminate: PropTypes.bool,
  className: PropTypes.string,
};

SwitchControl.defaultProps = {
  isIndeterminate: false,
  className: undefined,
};

const FormSwitch = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (

  <FormCheckbox
    className={classNames('pgn__form-switch', className)}
    {...props}
    role="switch"
    controlAs={SwitchControl}
    ref={ref}
  >
    {children}
  </FormCheckbox>
));

FormSwitch.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FormSwitch.defaultProps = {
  className: undefined,
};

export { SwitchControl };
export default FormSwitch;
