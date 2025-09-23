import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

interface CardDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies class name to append to the base element. */
  className?: string;
}

const CardDivider = forwardRef(({ className, ...props }: CardDividerProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={classNames('pgn__card-divider', className)} ref={ref} {...props} />
));

export default CardDivider;
