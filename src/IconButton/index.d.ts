import React from 'react';

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  alt: string;
  invertColors?: boolean;
  icon?: { prefix: string; iconName: string; icon: any[] };
  src?: React.ElementType;
  iconClassNames?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'inline';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';
  iconAs?: React.ElementType;
  isActive?: boolean;
};

export type IconButtonWithTooltipProps = IconButtonProps & {
  tooltipPlacement?: string;
  tooltipContent: React.ReactNode;
};

const IconButton: React.FunctionComponent<IconButtonProps>;
const IconButtonWithTooltip: React.FunctionComponent<IconButtonWithTooltipProps>;

export default IconButton;
export { IconButtonWithTooltip };
