import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';

const CardStatus = React.forwardRef(({
  className,
  children,
  variant,
  icon,
  title,
}, ref) => (
  <div
    className={classNames('pgn__card-status',
      `alert-${variant}`, 'alert', 'alert-content',
      className)}
    ref={ref}
  >
    {icon && <Icon src={icon} className="alert-icon" />}
    <div className="alert-message-content">
      {title && <div className="alert-heading h4">{title}</div>}
      {children && <p>{children}</p>}
    </div>
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
    'success',
    'danger',
    'warning',
  ]),
  /** Specifies title for the `Card.Status`. */
  title: PropTypes.element,
};

CardStatus.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  variant: 'warning',
  title: undefined,
};

export default CardStatus;
