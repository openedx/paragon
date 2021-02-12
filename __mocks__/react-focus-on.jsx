/* eslint-disable react/prop-types */
import React from 'react';

const FocusOn = (props) => {
  const { children, ...otherProps } = props;
  return (
    <focus-on {...otherProps}>{children}</focus-on>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { FocusOn };
