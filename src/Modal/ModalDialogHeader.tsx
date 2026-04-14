import React from 'react';
import classNames from 'classnames';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

export interface Props {
  /** Specifies the base element. */
  as?: string;
  /** Specifies the contents of the header. */
  children: React.ReactNode;
  /** Specifies class name to append to the base element. */
  className?: string;
}

type HeaderType = ComponentWithAsProp<'div', Props>;

const ModalDialogHeader: HeaderType = React.forwardRef(({
  as = 'div',
  children,
  ...props
}: Props, ref: React.ForwardedRef<HTMLDivElement>) => (
  React.createElement(
    as,
    {
      ...props,
      ref,
      className: classNames('pgn__modal-header', props.className),
    },
    children,
  )
));

export default ModalDialogHeader;
