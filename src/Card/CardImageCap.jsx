import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';

const CardImageCap = React.forwardRef(({
  src,
  logoSrc,
  className,
}, ref) => {
  const { orientation } = useContext(CardContext);
  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

  return (
    <div className={classNames(className, wrapperClassName)} ref={ref}>
      <img className="pgn__card-image-cap" src={src} alt={`card-cap-${orientation}`} />
      {!!logoSrc && <img className="pgn__card-logo-cap" src={logoSrc} alt={`card-logo-cap-${orientation}`} />}
    </div>
  );
});

CardImageCap.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies image src. */
  src: PropTypes.string,
  /** Specifies logo src to put on top of the image. */
  logoSrc: PropTypes.string,
};

CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: null,
};

export default CardImageCap;
