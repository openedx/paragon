import React from 'react';

export interface CardCarouselProps {
  ariaLabel: string,
  children: React.ReactNode,
  title?: React.ReactNode,
  subtitle?: React.ReactNode,
  columnSizes?: {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
  },
  hasInteractiveChildren?: boolean,
  canScrollHorizontal?: boolean,
  disableOpacityMasks?: boolean,
  onScrollPrevious?: Function,
  onScrollNext?: Function,
  CardCarouselControls?: React.ElementType,
}
declare const CardCarousel: React.ForwardRefExoticComponent<CardCarouselProps>;
export default CardCarousel;
