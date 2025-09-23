import { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

interface AnnotationProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Specifies contents of the component. */
  children: React.ReactNode;
  /** Specifies class name to append to the base element. */
  className?: string;
  /** Specifies variant to use. */
  variant?: 'error' | 'success' | 'warning' | 'light' | 'dark';
  /** Specifies arrow position. */
  arrowPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

const Annotation = forwardRef(({
  className,
  variant = 'success',
  children,
  arrowPlacement = 'bottom',
  ...props
} : AnnotationProps, ref : ForwardedRef<HTMLSpanElement>) => (
  <span
    className={classNames(
      className,
      'pgn__annotation',
      `pgn__annotation-${variant}-${arrowPlacement}`,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </span>
));

export default Annotation;
