import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormCheckbox from './FormCheckbox';

const FormSwitch = React.forwardRef(({
  children,
  className,
  ...props
}, ref) => (

  <FormCheckbox
    className={classNames('pgn__form-switch', className)}
    {...props}
    role="switch"
    asSwitch
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

export default FormSwitch;
