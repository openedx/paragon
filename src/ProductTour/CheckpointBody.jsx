import React from 'react';
import PropTypes from 'prop-types';

const CheckpointBody = React.forwardRef(({ children }, ref) => {
  if (!children) {
    return null;
  }

  return (
    <div className="pgn__checkpoint-body" ref={ref}>
      {children}
    </div>
  );
});

CheckpointBody.defaultProps = {
  children: null,
};

CheckpointBody.propTypes = {
  children: PropTypes.node,
};

export default CheckpointBody;
