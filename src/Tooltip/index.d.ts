import * as React from 'react';
import { TooltipProps as BaseTooltipProps } from 'react-bootstrap/Tooltip';

export type PlacementVariant =
| 'auto-start'
| 'auto'
| 'auto-end'
| 'top-start'
| 'top'
| 'top-end'
| 'right-start'
| 'right'
| 'right-end'
| 'bottom-end'
| 'bottom'
| 'bottom-start'
| 'left-end'
| 'left'
| 'left-start';

export interface TooltipProps extends BaseTooltipProps {
  id: string;
  placement?: PlacementVariant;
  arrowProps?: {
    ref?: ((element: HTMLElement | null) => void) | React.RefObject<HTMLElement>;
    style?: React.CSSProperties;
  };
  show?: boolean;
  popper?: Object;
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  bsPrefix?: string;
}

declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLElement>>;

export default Tooltip;
