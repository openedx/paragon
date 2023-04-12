import React from 'react';

export interface GenericErrorProps {
    errorMsgs: string[];
}

declare const GenericError: React.FC<GenericErrorProps>;

export default GenericError;
