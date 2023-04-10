import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { PopoverProps } from 'react-bootstrap/Popover';

export interface WrapperPopoverProps extends Omit<PopoverProps, 'placement'> {
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  popper?: {};
  className?: string;
  variant?: string;
}

export interface PopoverTitleProps extends BsPrefixProps {}

export interface PopoverContentProps extends BsPrefixProps {}

declare const WrapperPopover: React.ForwardRefExoticComponent<WrapperPopoverProps> & {
  Title: React.FC<PopoverTitleProps>;
  Content: React.FC<PopoverContentProps>;
};

export default WrapperPopover;
