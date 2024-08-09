import React from 'react';

export interface AvatarProps {
  alt?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge',
  src?: string,
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
