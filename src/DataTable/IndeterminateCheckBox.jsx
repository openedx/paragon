import React from 'react';
import PropTypes from 'prop-types';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...props }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
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
