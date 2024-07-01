import React from 'react';

export interface DragErrorProps {
    message: string | keyof JSX.IntrinsicElements;
}

declare const DragError: React.FC<DragErrorProps>;

export default DragError;
