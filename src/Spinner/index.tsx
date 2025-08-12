import React from 'react';
import classNames from 'classnames';
import BaseSpinner, { type SpinnerProps as BaseSpinnerProps } from 'react-bootstrap/Spinner';

interface SpinnerProps extends BaseSpinnerProps {
  /** Optionally specify additional CSS classes to give this spinner's `<div>`. */
  className?: string;
  /** Specifies the screen reader content for a11y. */
  screenReaderText?: React.ReactNode;
}

/** A spinning animation that indicates loading. */
const Spinner = React.forwardRef(({
  className,
  screenReaderText,
  ...attrs
}: SpinnerProps, ref: React.ForwardedRef<HTMLDivElement>) => {
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

export default Spinner;
