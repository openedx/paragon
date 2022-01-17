import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardContext from './CardContext';

const CardImageCap = React.forwardRef(({
  src,
  srcAlt,
  logoSrc,
  logoAlt,
  className,
}, ref) => {
  const { orientation } = useContext(CardContext);
  const wrapperClassName = `pgn__card-wrapper-image-cap ${orientation}`;

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
};

CardImageCap.defaultProps = {
  src: undefined,
  logoSrc: undefined,
  className: undefined,
  srcAlt: 'Card background',
  logoAlt: 'Card logo',
};

export default CardImageCap;
