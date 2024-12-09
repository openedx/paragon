import React from 'react';

export interface SelectionStatusProps {
    className?: string;
    clearSelectionText: string | React.ReactElement;
}

declare const SelectionStatus: React.FC<SelectionStatusProps>;

export default SelectionStatus;
