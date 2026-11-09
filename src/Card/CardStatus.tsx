import {
  useContext, forwardRef, ReactNode, FC, ForwardedRef,
} from 'react';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import Icon from '../Icon';
import CardContext from './CardContext';

interface CardStatusProps {
  /** The class to append to the base element. */
  className?: string;
  /** Specifies the content of the component. */
  children: ReactNode;
  /** Specifies variant to use. */
  variant?: 'primary' | 'success' | 'danger' | 'warning';
  /** Icon that will be shown in the top-left corner. */
  icon?: FC;
  /** Specifies title for the `Card.Status`. */
  title?: ReactNode | string;
  /** Specifies any optional actions, e.g. button(s). */
  actions?: ReactNode;
}

const CardStatus = forwardRef(({
  className,
  children,
  variant = 'warning',
  icon,
  title,
  actions,
  ...props
}: CardStatusProps, ref: ForwardedRef<HTMLDivElement>) => {
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

export default CardStatus;
