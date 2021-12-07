import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';

const CardImageCap = React.forwardRef(({
  src,
  logoSrc,
  className,
  orientation,
}, ref) => {
  const { horizontal } = useContext(CardContext);
  const dir = horizontal ? 'horizontal' : orientation;
  const wrapperClassName = `pgn__card-wrapper-image-cap ${dir}`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      <img className="pgn__card-image-cap" src={src} alt={`card-cap-${dir}`} />
      {!!logoSrc && <img className="pgn__card-logo-cap" src={logoSrc} alt={`card-logo-cap-${dir}`} />}
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
