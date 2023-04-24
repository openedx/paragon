import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const CardStatus = React.forwardRef(({
  className,
  children,
  variant,
  icon,
  title,
}, ref) => (
  <div
    className={classNames(
      'pgn__card-status',
      `pgn__card-status__${variant}`,
      className,
    )}
    ref={ref}
  >
    {icon && <Icon src={icon} />}
    <div className="pgn__card-status__message-content">
      {title && <div className="pgn__card-status__heading">{title}</div>}
      {children}
    </div>
  </div>
));

CardStatus.propTypes = {
  /** Specifies the content of the component. */
  children: PropTypes.node.isRequired,
  /** The class to append to the base element. */
  className: PropTypes.string,
  /** Icon that will be shown in the top-left corner. */
  icon: PropTypes.func,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf([
    'primary',
    'success',
    'danger',
    'warning',
  ]),
  /** Specifies title for the `Card.Status`. */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

CardStatus.defaultProps = {
  className: undefined,
  icon: undefined,
  variant: 'warning',
  title: undefined,
};

export default CardStatus;
