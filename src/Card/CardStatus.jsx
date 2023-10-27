import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import Icon from '../Icon';
import CardContext from './CardContext';

const CardStatus = React.forwardRef(({
  className,
  children,
  variant,
  icon,
  title,
  actions,
  ...props
}, ref) => {
  const { isLoading } = useContext(CardContext);

  if (isLoading) {
    return (
      <div
        className={classNames(
          'pgn__card-status',
          className,
        )}
        data-testid="card-status-skeleton"
        ref={ref}
      >
        <Skeleton />
      </div>
    );
  }

  return (
    <div
      className={classNames(
        'pgn__card-status',
        `pgn__card-status__${variant}`,
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="pgn__card-status__content">
        {icon && <Icon className="pgn__card-status__content-icon" src={icon} />}
        <div className="pgn__card-status__message-content">
          {title && <div className="pgn__card-status__heading">{title}</div>}
          {children}
        </div>
      </div>
      {!!actions && (
        <div className="pgn__card-status__actions">
          {actions}
        </div>
      )}
    </div>
  );
});

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
  /** Specifies any optional actions, e.g. button(s). */
  actions: PropTypes.node,
};

CardStatus.defaultProps = {
  className: undefined,
  icon: undefined,
  variant: 'warning',
  title: undefined,
  actions: undefined,
};

export default CardStatus;
