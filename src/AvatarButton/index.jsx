import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Avatar } from '..';

const buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

const AvatarButton = React.forwardRef(({
  children,
  size,
  className,
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
      )}
      size={size}
      ref={ref}
    >
      <span className="pgn__avatar-button-avatar-wrap">
        <Avatar src={src} alt="" size={avatarSize} />
      </span>
      {children}
    </Button>
  );
});

AvatarButton.propTypes = {
  /** The button text */
  children: PropTypes.node,
  /** A class name to append to the button */
  className: PropTypes.string,
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
  size: 'md',
  src: undefined,
  variant: 'tertiary',
};

export default AvatarButton;
