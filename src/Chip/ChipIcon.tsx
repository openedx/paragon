import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { STYLE_VARIANTS } from './constants';

export type ChipIconProps = {
  /** Additional CSS class name(s) to append to the base element. */
  className: string;
  /** The icon component to render. */
  src: React.ComponentType;
  /** The visual style variant of the chip icon. */
  variant?: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS];
  /** Whether the icon is in a disabled state. */
  disabled?: boolean;
} & (
  // Either _both_ onClick and alt are provided, or neither is:
  | {
    /** Callback for click and keyboard events on the icon button. */
    onClick: KeyboardEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLButtonElement>;
    /** Accessible label for the icon button. Required when `onClick` is provided. */
    alt: string;
  }
  | { onClick?: undefined; alt?: undefined }
);

function ChipIcon({
  className, src, onClick, alt, variant = STYLE_VARIANTS.LIGHT, disabled = false,
}: ChipIconProps) {
  if (onClick) {
    return (
      <IconButton
        className={className}
        src={src}
        onClick={onClick}
        iconAs={Icon}
        alt={alt}
        invertColors={variant === STYLE_VARIANTS.DARK}
        tabIndex={disabled ? -1 : 0}
      />
    );
  }

  return <Icon src={src} className={className} size="sm" />;
}

export default ChipIcon;
