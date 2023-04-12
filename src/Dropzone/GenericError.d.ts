import React from 'react';

export interface GenericErrorProps {
    errorMsgs: { [key: string]: string[] };
}

declare const GenericError: React.FC<GenericErrorProps>;

export default GenericError;
