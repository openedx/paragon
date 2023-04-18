import React from 'react';

export interface AvatarButtonProps {
  alt?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'huge',
  src?: string,
}
declare const AvatarButton: React.FC<AvatarButtonProps>;
export default AvatarButton;
