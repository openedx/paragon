import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import CardContext from './CardContext';

const CardImageCap = React.forwardRef(({
  src,
  srcAlt,
  logoSrc,
  logoAlt,
  skeletonHeight,
  skeletonWidth,
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
          height={skeletonHeight}
          width={skeletonWidth}
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
  skeletonHeight: PropTypes.number,
  /** Specifies whether the cap should be displayed during loading. */
  capLogoSkeleton: PropTypes.bool,
  /** Specifies height skeleton line cap. */
  capLogoSkeletonHeight: PropTypes.number,
  /** Specifies width skeleton line. */
  skeletonWidth: PropTypes.number,
  capLogoSkeletonWidth: PropTypes.number,
};

CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: undefined,
  srcAlt: undefined,
  logoAlt: undefined,
  skeletonHeight: undefined,
  capLogoSkeleton: true,
  capLogoSkeletonHeight: undefined,
  skeletonWidth: undefined,
  capLogoSkeletonWidth: undefined,
};

export default CardImageCap;
