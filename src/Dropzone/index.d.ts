import React from 'react';

export interface DropzoneProps {
    className?: string;
    accept?: { [key: string]: string[] };
    maxSize?: number;
    minSize?: number;
    onUploadProgress?: (percentageUploaded: number, progressEvent: AbortSignal) => void;
    onUploadCancel?: () => void;
    onProcessUpload: (params: {
        fileData: object;
        requestConfig: object;
        handleError: (error: Error) => void;
    }) => void;
    errorMessages?: {
        invalidType?: string | JSX.Element;
        invalidSizeLess?: string | JSX.Element;
        invalidSizeMore?: string | JSX.Element;
        multipleDragged?: string | JSX.Element;
        uploadError?: string | JSX.Element;
    };
    progressVariant?: 'spinner' | 'bar';
    validator?: (file: File) => boolean;
    inputComponent?: React.ReactNode | React.FunctionComponent;
}

declare const Dropzone: React.FC<DropzoneProps>;

export default Dropzone;
