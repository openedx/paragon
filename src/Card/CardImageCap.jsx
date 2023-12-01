import React, { useContext, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
import cardSrcFallbackImg from './fallback-default.png';
import CardImageWithSkeleton from './CardImageWithSkeleton';

const SKELETON_HEIGHT_VALUE = 140;
const LOGO_SKELETON_HEIGHT_VALUE = 41;

const CardImageCap = memo(React.forwardRef(({
  src,
  fallbackSrc,
  srcAlt,
  logoSrc,
  fallbackLogoSrc,
  logoAlt,
  skeletonHeight,
  skeletonWidth,
  logoSkeleton,
  logoSkeletonHeight,
  logoSkeletonWidth,
  className,
  imageLoadingType,
}, ref) => {
  const { orientation, isLoading } = useContext(CardContext);

  const imageSkeletonHeight = useMemo(() => (
    orientation === 'horizontal' ? '100%' : skeletonHeight
  ), [orientation, skeletonHeight]);

  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  if (isLoading) {
    return (
      <div
        className={classNames(wrapperClassName, className)}
        data-testid="image-loader-wrapper"
      >
        <Skeleton
          containerClassName="pgn__card-image-cap-loader"
          height={imageSkeletonHeight}
          width={skeletonWidth}
        />
        {logoSkeleton && (
          <Skeleton
            containerClassName="pgn__card-logo-cap"
            height={logoSkeletonHeight}
            width={logoSkeletonWidth}
          />
        )}
      </div>
    );
  }

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {!!src && (
        <CardImageWithSkeleton
          src={src}
          alt={srcAlt}
          fallback={fallbackSrc}
          className="pgn__card-image-cap"
          useDefaultSrc
          skeletonWidth={skeletonWidth}
          skeletonHeight={imageSkeletonHeight}
          imageLoadingType={imageLoadingType}
          skeletonClassName="pgn__card-image-cap-loader"
        />
      )}
      {!!logoSrc && (
        <CardImageWithSkeleton
          src={logoSrc}
          alt={logoAlt}
          fallback={fallbackLogoSrc}
          withSkeleton={logoSkeleton}
          className="pgn__card-logo-cap"
          skeletonWidth={logoSkeletonWidth}
          skeletonHeight={logoSkeletonHeight}
          imageLoadingType={imageLoadingType}
          skeletonClassName="pgn__card-logo-cap"
        />
      )}
    </div>
  );
}));

CardImageCap.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies image src. */
  src: PropTypes.string,
  /** Specifies fallback image src. */
  fallbackSrc: PropTypes.string,
  /** Specifies image alt text. */
  srcAlt: PropTypes.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: PropTypes.string,
  /** Specifies fallback image logo src. */
  fallbackLogoSrc: PropTypes.string,
  /** Specifies logo image alt text. */
  logoAlt: PropTypes.string,
  /** Specifies height of Image skeleton in loading state. */
  skeletonHeight: PropTypes.number,
  /** Specifies width of Image skeleton in loading state. */
  skeletonWidth: PropTypes.number,
  /** Specifies whether the cap should be displayed during loading. */
  logoSkeleton: PropTypes.bool,
  /** Specifies height of Logo skeleton in loading state. */
  logoSkeletonHeight: PropTypes.number,
  /** Specifies width of Logo skeleton in loading state. */
  logoSkeletonWidth: PropTypes.number,
  /** Specifies loading type for images */
  imageLoadingType: PropTypes.oneOf(['eager', 'lazy']),
};

CardImageCap.defaultProps = {
  src: undefined,
  fallbackSrc: cardSrcFallbackImg,
  logoSrc: undefined,
  fallbackLogoSrc: undefined,
  className: undefined,
  srcAlt: undefined,
  logoAlt: undefined,
  skeletonHeight: SKELETON_HEIGHT_VALUE,
  logoSkeleton: false,
  logoSkeletonHeight: LOGO_SKELETON_HEIGHT_VALUE,
  skeletonWidth: undefined,
  logoSkeletonWidth: undefined,
  imageLoadingType: 'eager',
};

export default CardImageCap;
