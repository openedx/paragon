import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import IconButton from '../IconButton';
import { STYLE_VARIANTS } from './constants';

export type ChipIconProps = {
  className: string,
  src: React.ComponentType,
  variant: typeof STYLE_VARIANTS[keyof typeof STYLE_VARIANTS],
  disabled?: boolean,
} & (
// Either _both_ onClick and alt are provided, or neither is:
  | { onClick: KeyboardEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLButtonElement>, alt: string }
  | { onClick?: undefined, alt?: undefined }
);

function ChipIcon({
  className, src, onClick, alt, variant, disabled,
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

ChipIcon.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  onClick: PropTypes.func,
  alt: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

ChipIcon.defaultProps = {
  onClick: undefined,
  alt: undefined,
  variant: STYLE_VARIANTS.LIGHT,
  disabled: false,
};

export default ChipIcon;
