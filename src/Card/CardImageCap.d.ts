import React from 'react';

export interface CardImageCapProps {
  src?: string,
  fallbackSrc?: string,
  srcAlt?: string,
  logoSrc?: string,
  fallbackLogoSrc?: string,
  logoAlt?: string,
  skeletonHeight?: number,
  skeletonWidth?: number,
  logoSkeleton?: boolean,
  logoSkeletonHeight?: number,
  logoSkeletonWidth?: number,
  className?: string,
  children?: React.ReactNode,
}
declare const CardImageCap: React.ForwardRefExoticComponent<CardImageCapProps>;
export default CardImageCap;
