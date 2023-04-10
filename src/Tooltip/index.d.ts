import React from 'react';
import { TooltipProps as BaseTooltipProps } from 'react-bootstrap/Tooltip';

export interface TooltipProps extends BaseTooltipProps {
  popper?: {};
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  bsPrefix?: string;
}

declare const Tooltip: React.FC<TooltipProps>;

export default Tooltip;
