import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Alert from '../Alert';

const CardStatus = React.forwardRef(({
  className,
  children,
  variant,
  icon,
}, ref) => (
  <Alert
    className={classNames('pgn__card-status', className)}
    ref={ref}
    icon={icon}
    variant={variant}
  >
    {children}
  </Alert>
));

CardStatus.propTypes = {
  /** Specifies the content of the component. */
  children: PropTypes.node,
  /** The class to append to the base element. */
  className: PropTypes.string,
  /** Icon that will be shown in the alert */
  icon: PropTypes.func,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

CardStatus.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  variant: 'warning',
};

export default CardStatus;
