import React from 'react';
import PropTypes from 'prop-types';
import BaseSkeleton from 'react-loading-skeleton';

const Skeleton = React.forwardRef(({
  children,
  skeletonHeight,
  skeletonWidth,
  skeletonCircle,
  skeletonId,
  skeletonWrapper,
  skeletonCount,
}, ref) => (
  <BaseSkeleton
    ref={ref}
    height={skeletonHeight}
    width={skeletonWidth}
    circle={skeletonCircle}
    containerTestId={skeletonId}
    wrapper={skeletonWrapper}
    count={skeletonCount}
    containerClassName="pgn__skeleton"
  >
    {children}
  </BaseSkeleton>
));

Skeleton.defaultProps = {
  skeletonHeight: null,
  skeletonWidth: null,
  skeletonCircle: false,
  skeletonId: null,
  skeletonWrapper: null,
  skeletonCount: undefined,
};

Skeleton.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies height of skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of  skeleton in loading state. */
  skeletonWidth: PropTypes.number,
  skeletonCircle: PropTypes.bool,
  skeletonId: PropTypes.string,
  skeletonWrapper: PropTypes.func,
  skeletonCount: PropTypes.number,
};

export default Skeleton;
