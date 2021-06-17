import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...props }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      // this if(resolvedRef.current) prevents console errors in testing
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <input type="checkbox" ref={resolvedRef} {...props} />
    );
  },
);

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool.isRequired,
};

export default IndeterminateCheckbox;
