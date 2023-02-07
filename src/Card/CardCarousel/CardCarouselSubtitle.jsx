import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CardCarouselSubtitle({ children, as, className }) {
  const Component = as || 'p';
  return (
    <Component className={classNames('pgn__card-carousel-subtitle', className)}>
      {children}
    </Component>
  );
}

CardCarouselSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string,
};

CardCarouselSubtitle.defaultProps = {
  as: undefined,
  className: undefined,
};

export default CardCarouselSubtitle;
