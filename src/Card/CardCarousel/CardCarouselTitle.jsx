import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function CardCarouselTitle({ children, as, className }) {
  const Component = as || 'h2';
  return (
    <Component className={classNames('pgn__card-carousel-title', className)}>
      {children}
    </Component>
  );
}

CardCarouselTitle.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string,
};

CardCarouselTitle.defaultProps = {
  as: undefined,
  className: undefined,
};

export default CardCarouselTitle;
