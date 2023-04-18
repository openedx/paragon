import React from 'react';

export interface CardGridProps {
  className?: string,
  children?: React.ReactNode,
  columnSizes?: {
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
  },
}
declare const CardGrid: React.FC<CardGridProps>;
export default CardGrid;
