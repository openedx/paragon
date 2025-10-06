import React from 'react';
import classNames from 'classnames';
// @ts-ignore
import defaultAvatar from './default-avatar.svg';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Alt text. Usually the user's name */
  alt?: string;
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge';
  /** Image src of the avatar image */
  src?: string;
}

function Avatar({
  alt = '',
  size = 'md',
  src,
  ...attrs
}: AvatarProps) {
  return (
    <img
      {...attrs}
      className={classNames(
        'pgn__avatar',
        `pgn__avatar-${size}`,
        attrs.className,
      )}
      src={src || defaultAvatar}
      alt={alt}
    />
  );
}

export default Avatar;
