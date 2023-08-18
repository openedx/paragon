import React from 'react';

export type IconButtonVariants = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'black' | 'brand';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    iconAs?: React.ReactNode;
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
    variant?: IconButtonVariants;
    size?: 'sm' | 'md' | 'inline';
    isActive?: boolean;
}

export interface IconButtonWithTooltipProps {
    tooltipPlacement?: string;
    tooltipContent: React.ReactNode;
    invertColors?: boolean;
    variant?: IconButtonVariants;
}

declare const IconButtonWithTooltip: React.ForwardRefExoticComponent<IconButtonWithTooltipProps>;

declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps> & {
    IconButtonWithTooltip: React.FC<IconButtonWithTooltip>;
};

export { IconButtonWithTooltip };

export default IconButton;
