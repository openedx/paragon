import React from 'react';
import PropTypes from 'prop-types';

export interface ILinkedHeading {
  h: string,
  children: React.ReactNode,
  id: string,
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const LinkedHeading = ({
  h,
  children,
  id,
}: ILinkedHeading) => {
  const H = `h${h}` as HeadingTag;

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

export default LinkedHeading;
