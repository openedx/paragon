import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

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
}, ref) => {
  const { orientation, isLoading } = useContext(CardContext);
  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  if (isLoading) {
    return (
      <div className={classNames(className, wrapperClassName)}>
        <Skeleton
          containerClassName="pgn__card-image-cap-loader"
          height={skeletonHeight}
          width={skeletonWidth}
        />
        {logoSkeleton
          && (
          <Skeleton
            containerClassName="pgn__card-logo-cap"
            height={logoSkeletonHeight}
            width={logoSkeletonWidth}
          />
          )}
      </div>
    );
  }

  const handleSrcFallback = (currentTarget, altSrc) => {
    const tagImg = currentTarget;
    if (tagImg.src !== altSrc) {
      tagImg.src = altSrc;
    }
  };

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      <img
        className="pgn__card-image-cap"
        src={src}
        onError={(e) => handleSrcFallback(e.currentTarget, fallbackSrc)}
        alt={srcAlt}
      />
      {!!logoSrc && (
        <img
          className="pgn__card-logo-cap"
          src={logoSrc}
          onError={(e) => handleSrcFallback(e.currentTarget, fallbackLogoSrc)}
          alt={logoAlt}
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
};

CardImageCap.defaultProps = {
  src: undefined,
  fallbackSrc: undefined,
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
};

export default CardImageCap;
