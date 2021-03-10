import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputSwitch = React.forwardRef(({ indeterminate, className, ...props }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <input
      className={classNames('pgn__switch-input', className)}
      type="checkbox"
      ref={resolvedRef}
      {...props}
    />
  );
});

export default InputSwitch;
