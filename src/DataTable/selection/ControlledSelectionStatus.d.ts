import React from 'react';

export interface ControlledSelectionStatusProps {
    className?: string;
    clearSelectionText?: string | JSX.Element;
}

declare const ControlledSelectionStatus: React.FC<ControlledSelectionStatusProps>;

export default ControlledSelectionStatus;
