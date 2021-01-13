import React from 'react';
import PropTypes from 'prop-types';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <input type="checkbox" ref={resolvedRef} {...rest} />
    );
  },
);

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.bool.isRequired,
};

export default IndeterminateCheckbox;
