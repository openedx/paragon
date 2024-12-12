import React from 'react';

export interface UploadProgressProps {
    variant: 'spinner' | 'bar';
    percent: number;
    name: string;
    onCancel: () => void;
}

declare const UploadProgress: React.FC<UploadProgressProps>;

export default UploadProgress;
