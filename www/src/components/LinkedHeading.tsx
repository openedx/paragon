import React from 'react';
import PropTypes from 'prop-types';

export type LinkedHeadingPropsTypes = {
  h: string,
  children: React.ReactNode,
  id: string,
};

const LinkedHeading = ({
  h,
  children,
  id,
}: LinkedHeadingPropsTypes) => {
  const H: any = `h${h}`;

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
