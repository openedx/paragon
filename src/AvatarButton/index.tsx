import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Avatar, { AvatarProps } from '../Avatar';

const buttonSizesToAvatarSize = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

interface AvatarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The button text */
  children?: string;
  /** A class name to append to the button */
  className?: string;
  /** Show the label or only the avatar */
  showLabel?: boolean;
  /** The button size */
  size?: 'sm' | 'md' | 'lg';
  /** Image src of the avatar image */
  src?: string;
  /** The button style variant to use */
  variant?: string;
}

const AvatarButton = forwardRef(({
  children,
  className,
  showLabel = true,
  size = 'md',
  src,
  variant = 'tertiary',
  ...attrs
}: AvatarButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
      variant={variant}
    >
      <Avatar src={src} alt={showLabel ? '' : children} size={avatarSize as AvatarProps['size']} />
      {showLabel && children}
    </Button>
  );
});

export default AvatarButton;
