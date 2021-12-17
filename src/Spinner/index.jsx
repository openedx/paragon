import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseSpinner from 'react-bootstrap/Spinner';

const Spinner = React.forwardRef(({
  className,
  screenReaderText,
  ...attrs
}, ref) => {
  const spinnerProps = {
    ...attrs,
    className: classNames('pgn__spinner', className),
    role: screenReaderText ? 'status' : undefined,
  };
  return (
    <BaseSpinner {...spinnerProps} ref={ref}>
      {screenReaderText && <span className="sr-only">{screenReaderText}</span>}
    </BaseSpinner>
  );
});

Spinner.propTypes = {
  /** Specifies the class name for the component. */
  className: PropTypes.string,
  /** Specifies the screen reader content for a11y. */
  screenReaderText: PropTypes.node,
};

Spinner.defaultProps = {
  className: undefined,
  screenReaderText: undefined,
};

export default Spinner;
