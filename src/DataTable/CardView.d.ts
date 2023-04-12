import React from 'react';
import PropTypes from "prop-types";

// export interface CardItemProps<T> {
//     row: T,
//     prepareRow: (row: T) => void;
//     isSelectable: boolean;
//     CardComponent: React.FC<{ row: T }>ж
//     SelectionComponent?: PropTypes.func,
//     selectionPlacement: 'right' | 'left',
// }

export interface CardViewProps<T> {
    className?: string;
    columnSizes?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    CardComponent: React.FC<T>;
    selectionPlacement?: 'left' | 'right';
    SkeletonCardComponent?: React.FC;
    skeletonCardCount?: number;
}

declare function CardView<T>(props: CardViewProps<T>): JSX.Element;

export default CardView;

