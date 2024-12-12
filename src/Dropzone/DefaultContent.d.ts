import React from 'react';

export interface DefaultContentProps {
    accept?: { [key: string]: string[] };
    maxSize?: number;
    minSize?: number;
}

declare const DefaultContent: React.FC<DefaultContentProps>;

export default DefaultContent;
