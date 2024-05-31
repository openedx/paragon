import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
// @ts-ignore
import IconButton from '../IconButton';
// @ts-ignore
import { STYLE_VARIANTS } from './constants';

export interface ChipIconProps {
  className: string,
  src: React.ComponentType,
  onClick?: KeyboardEventHandler & MouseEventHandler,
  alt?: string,
  variant: string,
  disabled?: boolean,
}

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
