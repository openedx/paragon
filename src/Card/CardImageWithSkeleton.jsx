import React, {
  useMemo, memo, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

import useImageLoader from './hooks/useImageLoader';

const CardImageWithSkeleton = memo(({
  src,
  alt,
  fallback,
  className,
  useDefaultSrc,
  withSkeleton,
  skeletonWidth,
  skeletonHeight,
  imageLoadingType,
  skeletonClassName,
}) => {
  const config = useMemo(
    () => ({ mainSrc: src, fallback, useDefaultSrc }),
    [src, fallback, useDefaultSrc],
  );
  const [showSkeleton, setShowSkeleton] = useState(true);

  const { loadedImage, isSrcLoading } = useImageLoader(config);

  useEffect(() => {
    if (!isSrcLoading && !withSkeleton) {
      setShowSkeleton(false);
    } else {
      setShowSkeleton(true);
    }
  }, [isSrcLoading, withSkeleton]);

  return (
    <>
      <Skeleton
        containerClassName={classNames(skeletonClassName, { show: showSkeleton })}
        height={skeletonHeight}
        width={skeletonWidth}
      />
      <img
        className={classNames(className, { show: !showSkeleton })}
        src={loadedImage[src]?.src}
        onLoad={() => setShowSkeleton(false)}
        alt={alt}
        loading={imageLoadingType}
      />
    </>

  );
});

CardImageWithSkeleton.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies image src. */
  src: PropTypes.string.isRequired,
  /** Specifies fallback image src. */
  fallback: PropTypes.string.isRequired,
  /** Specifies whether to use the default fallback source if both the main source and fallback fail to load. */
  useDefaultSrc: PropTypes.bool,
  /** Specifies whether to render skeleton. */
  withSkeleton: PropTypes.bool,
  /** Specifies image alt text. */
  alt: PropTypes.string.isRequired,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: PropTypes.number.isRequired,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: PropTypes.number.isRequired,
  /** Specifies class name to append to the skeleton element. */
  skeletonClassName: PropTypes.string,
  /** Specifies loading type for images */
  imageLoadingType: PropTypes.oneOf(['eager', 'lazy']),
};

CardImageWithSkeleton.defaultProps = {
  className: undefined,
  skeletonClassName: undefined,
  useDefaultSrc: false,
  withSkeleton: true,
  imageLoadingType: 'eager',
};

export default CardImageWithSkeleton;
