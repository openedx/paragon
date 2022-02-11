import React from 'react';
import PropTypes from 'prop-types';

const CheckpointTitle = React.forwardRef(({ children }, ref) => (
  <h2 id="pgn__checkpoint-title" ref={ref}>
    {children}
  </h2>
));

CheckpointTitle.defaultProps = {
  children: null,
};

CheckpointTitle.propTypes = {
  children: PropTypes.node,
};

export default CheckpointTitle;
