import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

import useImageLoader from '../hooks/useImageLoader';

function CardImageWithSkeleton({
  src,
  alt,
  fallback,
  className,
  withSkeleton,
  useDefaultSrc,
  skeletonWidth,
  skeletonHeight,
  imageLoadingType,
  skeletonClassName,
  isLoading = false,
}) {
  const config = useMemo(
    () => ({
      mainSrc: src, fallback, useDefaultSrc,
    }),
    [src, fallback, useDefaultSrc],
  );

  const { ref, isSrcLoading } = useImageLoader(config);

  return (
    <>
      <Skeleton
        containerClassName={classNames(skeletonClassName, { show: (isSrcLoading || isLoading) && withSkeleton })}
        height={skeletonHeight}
        width={skeletonWidth}
      />
      <img
        ref={ref}
        className={classNames(className, { show: !isSrcLoading && !isLoading })}
        alt={alt}
        loading={imageLoadingType}
      />
    </>
  );
}

CardImageWithSkeleton.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string,
  useDefaultSrc: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  skeletonHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  skeletonWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  skeletonClassName: PropTypes.string,
  imageLoadingType: PropTypes.oneOf(['eager', 'lazy']),
  isLoading: PropTypes.bool,
  withSkeleton: PropTypes.bool,
};

CardImageWithSkeleton.defaultProps = {
  className: undefined,
  skeletonClassName: undefined,
  fallback: undefined,
  useDefaultSrc: false,
  imageLoadingType: 'eager',
  skeletonHeight: undefined,
  skeletonWidth: undefined,
  isLoading: false,
  withSkeleton: false,
};

export default CardImageWithSkeleton;
