import * as React from 'react';

export interface WrapperPopoverProps extends React.PropsWithChildren<React.RefAttributes<any>> {
  id: string;
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  title?: string;
  arrowProps?: {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    style?: React.CSSProperties;
  };
  content?: boolean;
  popper?: object;
  show?: boolean;
  className?: string;
  variant?: string;
}

export interface PopoverTitleProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  as?: keyof JSX.IntrinsicElements;
  bsPrefix?: string;
}
export interface PopoverContentProps extends PopoverTitleProps {}

declare const WrapperPopover: React.ForwardRefExoticComponent<WrapperPopoverProps> & {
  Title: React.FC<PopoverTitleProps>;
  Content: React.FC<PopoverContentProps>;
};

export default WrapperPopover;
