import React, { ForwardedRef } from 'react';
import classNames from 'classnames';

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies the content of the component. */
  children?: React.ReactNode;
  /** The class to append to the base element. */
  className?: string;
}

const CardBody = React.forwardRef(({
  className, children, ...rest
}: CardBodyProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={classNames('pgn__card-body', className)} ref={ref} {...rest}>
    {children}
  </div>
));

export default CardBody;
