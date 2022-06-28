import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const IS_LOADING_HEIGHT_VALUE = 140;
const CAP_LOGO_SKELETON_HEIGHT_VALUE = 41;

const CardImageCap = React.forwardRef(({
  src,
  srcAlt,
  logoSrc,
  logoAlt,
  isLoadingHeight,
  isLoadingWidth,
  capLogoSkeleton,
  capLogoSkeletonHeight,
  capLogoSkeletonWidth,
  className,
}, ref) => {
  const { orientation, isLoading } = useContext(CardContext);
  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  if (isLoading) {
    return (
      <div className={classNames(className, wrapperClassName)}>
        <Skeleton
          containerClassName="pgn__card-image-cap-loader"
          height={isLoadingHeight}
          width={isLoadingWidth}
        />
        {capLogoSkeleton
          && !!logoSrc
          && (
          <Skeleton
            containerClassName="pgn__card-logo-cap"
            height={capLogoSkeletonHeight}
            width={capLogoSkeletonWidth}
          />
          )}
      </div>
    );
  }

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      <img className="pgn__card-image-cap" src={src} alt={srcAlt} />
      {!!logoSrc && <img className="pgn__card-logo-cap" src={logoSrc} alt={logoAlt} />}
    </div>
  );
});

CardImageCap.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies image src. */
  src: PropTypes.string,
  /** Specifies image alt text. */
  srcAlt: PropTypes.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: PropTypes.string,
  /** Specifies logo image alt text. */
  logoAlt: PropTypes.string,
  /** Specifies height skeleton line. */
  isLoadingHeight: PropTypes.number,
  /** Specifies whether the cap should be displayed during loading. */
  capLogoSkeleton: PropTypes.bool,
  /** Specifies height skeleton line cap. */
  capLogoSkeletonHeight: PropTypes.number,
  /** Specifies width skeleton line. */
  isLoadingWidth: PropTypes.number,
  capLogoSkeletonWidth: PropTypes.number,
};

CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: undefined,
  srcAlt: undefined,
  logoAlt: undefined,
  isLoadingHeight: IS_LOADING_HEIGHT_VALUE,
  capLogoSkeleton: true,
  capLogoSkeletonHeight: CAP_LOGO_SKELETON_HEIGHT_VALUE,
  isLoadingWidth: undefined,
  capLogoSkeletonWidth: undefined,
};

export default CardImageCap;
