import React from 'react';

export interface RowStatusProps {
    className?: string;
    statusText: string | React.ReactElement;
}

declare function RowStatus(props: RowStatusProps): JSX.Element;

export default RowStatus;

