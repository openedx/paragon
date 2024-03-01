import React from 'react';

export interface CardViewProps {
    className?: string;
    columnSizes?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    CardComponent: React.FC;
    selectionPlacement?: 'left' | 'right';
    SkeletonCardComponent?: React.FC;
    skeletonCardCount?: number;
}

declare function CardView(props: CardViewProps): JSX.Element;

export default CardView;

