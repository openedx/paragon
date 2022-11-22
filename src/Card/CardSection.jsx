import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const SKELETON_HEIGHT_VALUE = 100;

const CardSection = React.forwardRef(({
  className,
  children,
  title,
  actions,
  skeletonHeight,
  skeletonWidth,
}, ref) => {
  const { isLoading } = useContext(CardContext);

  if (isLoading) {
    return (
      <div className={classNames('pgn__card-section', className)}>
        <Skeleton
          containerClassName="pgn__card-section-loader"
          height={skeletonHeight}
          width={skeletonWidth}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames('pgn__card-section', className)}
      ref={ref}
    >
      {title && <div className="pgn__card-section-title">{title}</div>}
      {children}
      {actions && <div className="pgn__card-section-actions">{actions}</div>}
    </div>
  );
});

CardSection.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies title of the `Section`. */
  title: PropTypes.node,
  /** Specifies node to render on the bottom right of the `Section` (i.e. `ActionRow`). */
  actions: PropTypes.node,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of skeleton in loading state. */
  skeletonWidth: PropTypes.number,
};

CardSection.defaultProps = {
  children: null,
  className: undefined,
  title: undefined,
  actions: undefined,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  skeletonWidth: undefined,
};

export default CardSection;
