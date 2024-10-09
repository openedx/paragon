import React from 'react';

export interface CardCarouselProviderProps {
  columnSizes?: {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
  },
  hasInteractiveChildren?: boolean,
  canScrollHorizontal?: boolean,
  CardCarouselControls?: React.ElementType,
  children: React.ReactNode,
}
declare const CardCarouselProvider: React.FC<CardCarouselProviderProps>;
declare const CardCarouselContext: React.Context<{}>;
export { CardCarouselContext };
export default CardCarouselProvider;
