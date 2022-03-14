import React from 'react';
import PropTypes from 'prop-types';

const LinkedHeading = ({
  h,
  children,
  id,
}) => {
  const H = `h${h}`;

  return (
    <H id={id} className="pgn-doc__heading">
      {children}
    </H>
  );
};

LinkedHeading.propTypes = {
  h: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

LinkedHeading.defaultProps = {
};

export default LinkedHeading;
