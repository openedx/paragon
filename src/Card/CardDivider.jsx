import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardDivider = React.forwardRef(({ className, ...props }, ref) => (
  <div className={classNames('pgn__card-divider', className)} ref={ref} {...props} />
));

CardDivider.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

CardDivider.defaultProps = {
  className: undefined,
};

export default CardDivider;
