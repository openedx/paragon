import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';

const CardStatus = React.forwardRef(({
  className,
  children,
  variant,
  icon,
}, ref) => (
  <div
    className={classNames('pgn__card-status',
      `alert-${variant}`, 'alert', 'alert-content',
      className)}
    ref={ref}
  >
    {icon && <Icon src={icon} className="alert-icon" />}
    {children}
  </div>
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
