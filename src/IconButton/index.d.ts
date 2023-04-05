import * as React from 'react';

export type IconButtonVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
export type IconButtonSizes = 'sm' | 'md' | 'inline';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconAs?: keyof JSX.IntrinsicElements;
  src?: React.ReactElement | React.FC;
  alt: string;
  invertColors?: boolean;
  icon?: {
    prefix: string;
    iconName: string;
    icon: any[];
  };
  iconClassNames?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: IconButtonVariants;
  size?: IconButtonSizes;
  isActive?: boolean;
}

export interface IconButtonWithTooltipProps extends Omit<IconButtonProps, 'onClick'> {
  tooltipPlacement?: string;
  tooltipContent: React.ReactNode;
}

declare const IconButtonWithTooltip: React.ForwardRefExoticComponent<
IconButtonWithTooltipProps & React.RefAttributes<HTMLButtonElement>>;

declare const IconButton: React.ForwardRefExoticComponent<
IconButtonProps & React.RefAttributes<HTMLButtonElement>> & {
  IconButtonWithTooltip: typeof IconButtonWithTooltip;
};

export default IconButton;
export { IconButtonWithTooltip };
