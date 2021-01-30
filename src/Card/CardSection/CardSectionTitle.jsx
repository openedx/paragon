import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardSectionTitle = ({
  className,
  as: Component,
  children,
  ...attrs
}) => (
  <Component
    {...attrs}
    className={classNames('pgn__card-section-title', className)}
  >
    {children}
  </Component>
);

CardSectionTitle.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardSectionTitle.defaultProps = {
  as: 'h5',
  className: undefined,
};

export default CardSectionTitle;
