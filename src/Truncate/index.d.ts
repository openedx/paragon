import React from 'react';

export interface TruncateProps {
    children: string;
    lines?: string | number;
    ellipsis?: string | number | React.ReactNode;
    whiteSpace?: boolean;
    elementType?: string;
    className?: string;
    onTruncate?: (truncated: HTMLElement[]) => void;
}

declare const Truncate: React.FC<TruncateProps>;

export default Truncate;
