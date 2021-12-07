import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardImageCap = React.forwardRef(({
  src,
  logoSrc,
  className,
  orientation,
}, ref) => {
  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      <img className="pgn__card-image-cap" src={src} alt={`card-cap-${orientation}`} />
      {!!logoSrc && <img className="pgn__card-logo-cap" src={logoSrc} alt={`card-logo-cap-${orientation}`} />}
    </div>
  );
});

CardImageCap.propTypes = {
  src: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: null,
  orientation: 'vertical',
};

export default CardImageCap;
