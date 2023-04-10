import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconAs?: keyof JSX.IntrinsicElements;
  src?: React.ReactElement;
  alt: string;
  invertColors?: boolean;
  icon?: {
    prefix: string;
    iconName: string;
    icon: any[];
  };
  iconClassNames?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
  size?: 'sm' | 'md' | 'inline';
  isActive?: boolean;
}

export interface IconButtonWithTooltipProps {
  tooltipPlacement?: string;
  tooltipContent: React.ReactNode;
  invertColors?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
}

declare const IconButtonWithTooltip: React.ForwardRefExoticComponent<IconButtonWithTooltipProps>;

declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps> & {
  IconButtonWithTooltip: React.FC<IconButtonWithTooltip>;
};

export default IconButton;
export { IconButtonWithTooltip };
