import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';
import cardSrcFallbackImg from './fallback-default.png';

const SKELETON_HEIGHT_VALUE = 140;
const LOGO_SKELETON_HEIGHT_VALUE = 41;

const CardImageCap = React.forwardRef(({
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
  const [showImageCap, setShowImageCap] = useState(false);
  const [showLogoCap, setShowLogoCap] = useState(false);

  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  if (isLoading) {
    return (
      <div
        className={classNames(wrapperClassName, className)}
        data-testid="image-loader-wrapper"
      >
        <Skeleton
          containerClassName="pgn__card-image-cap-loader"
          height={orientation === 'horizontal' ? '100%' : skeletonHeight}
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

  const handleSrcFallback = (event, altSrc, imageKey) => {
    const { currentTarget } = event;

    if (!altSrc || currentTarget.src.endsWith(altSrc)) {
      if (imageKey === 'imageCap') {
        currentTarget.src = cardSrcFallbackImg;
      } else {
        setShowLogoCap(false);
      }

      return;
    }

    currentTarget.src = altSrc;
  };

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      {!!src && (
        <img
          className={classNames('pgn__card-image-cap', { show: showImageCap })}
          src={src}
          onError={(event) => handleSrcFallback(event, fallbackSrc, 'imageCap')}
          onLoad={() => setShowImageCap(true)}
          alt={srcAlt}
          loading={imageLoadingType}
        />
      )}
      {!!logoSrc && (
        <img
          className={classNames('pgn__card-logo-cap', { show: showLogoCap })}
          src={logoSrc}
          onError={(event) => handleSrcFallback(event, fallbackLogoSrc, 'logoCap')}
          onLoad={() => setShowLogoCap(true)}
          alt={logoAlt}
          loading={imageLoadingType}
        />
      )}
    </div>
  );
});

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
