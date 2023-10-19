import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
// @ts-ignore
import IconButton from '../IconButton';
// @ts-ignore
import { STYLE_VARIANTS } from './constants';

export interface ChipIconProps {
  className: string,
  src: React.ReactElement | Function,
  onClick?: KeyboardEventHandler & MouseEventHandler,
  alt?: string,
  variant: string,
}

function ChipIcon({
  className, src, onClick, alt, variant,
}: ChipIconProps) {
  if (onClick) {
    return (
      <IconButton
        className={className}
        src={src}
        onClick={onClick}
        onKeyPress={onClick}
        iconAs={Icon}
        alt={alt}
        invertColors={variant === STYLE_VARIANTS[2]}
      />
    );
  }

  return <Icon src={src} className={className} />;
}

ChipIcon.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

ChipIcon.defaultProps = {
  onClick: undefined,
  variant: STYLE_VARIANTS[1],
};

export default ChipIcon;
