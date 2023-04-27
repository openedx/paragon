import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import Avatar from '../Avatar';

const buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

const AvatarButton = React.forwardRef(({
  children,
  className,
  showLabel,
  size,
  src,
  ...attrs
}, ref) => {
  const avatarSize = buttonSizesToAvatarSize[size] || 'sm';
  return (
    <Button
      {...attrs}
      className={classNames(
        'btn-avatar', // the public class name for custom styling
        'pgn__avatar-button-avatar',
        `pgn__avatar-button-avatar-${size}`,
        className,
        { 'pgn__avatar-button-hide-label': !showLabel },
      )}
      size={size}
      ref={ref}
    >
      <Avatar src={src} alt={showLabel ? '' : children} size={avatarSize} />
      {showLabel && children}
    </Button>
  );
});

AvatarButton.propTypes = {
  /** The button text */
  children: PropTypes.string,
  /** A class name to append to the button */
  className: PropTypes.string,
  /** Show the label or only the avatar */
  showLabel: PropTypes.bool,
  /** The button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Image src of the avatar image */
  src: PropTypes.string,
  /** The button style variant to use */
  variant: PropTypes.string,
};

AvatarButton.defaultProps = {
  children: undefined,
  className: undefined,
  showLabel: true,
  size: 'md',
  src: undefined,
  variant: 'tertiary',
};

export default AvatarButton;
