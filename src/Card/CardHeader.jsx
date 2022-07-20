import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const SKELETON_HEIGHT_VALUE = 20;

const CardHeader = React.forwardRef(({
  actions,
  className,
  size,
  subtitle,
  title,
  skeletonHeight,
  skeletonWidth,
}, ref) => {
  const { isLoading } = useContext(CardContext);
  const cloneActions = useCallback(
    (Action) => {
      if (React.isValidElement(Action)) {
        const { children } = Action.props;
        const addtlActionProps = {
          size,
          children: Array.isArray(children) ? children.map(cloneActions) : cloneActions(children),
        };
        return React.cloneElement(Action, addtlActionProps);
      }

      return Action;
    },
    [size],
  );

  if (isLoading) {
    return (
      <div className={classNames('pgn__card-header', className)}>
        <Skeleton
          containerClassName="pgn__card-header-loader"
          height={skeletonHeight}
          width={skeletonWidth}
        />
      </div>
    );
  }

  return (
    <div className={classNames('pgn__card-header', className)} ref={ref}>
      <div className="pgn__card-header-content">
        {title && <div className={`pgn__card-header-title-${size}`}>{title}</div>}
        {subtitle && <div className={`pgn__card-header-subtitle-${size}`}>{subtitle}</div>}
      </div>
      {actions && (
        <div className="pgn__card-header-actions">
          {size !== 'md' ? cloneActions(actions) : actions}
        </div>
      )}
    </div>
  );
});

CardHeader.propTypes = {
  /** Optional node to render on the top right of the card header,
   *  i.e. ActionRow or a DropdownMenu.
   * */
  actions: PropTypes.node,
  /** The class name for the CardHeader component */
  className: PropTypes.string,
  /** The title for the CardHeader component */
  title: PropTypes.node,
  /** The size of the CardHeader component */
  size: PropTypes.oneOf(['sm', 'md']),
  /** The subtitle of the CardHeader component */
  subtitle: PropTypes.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: PropTypes.number,
};

CardHeader.defaultProps = {
  actions: null,
  className: null,
  size: 'md',
  title: null,
  subtitle: null,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  skeletonWidth: null,
};

export default CardHeader;
