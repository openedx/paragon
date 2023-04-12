import React from 'react';

export interface ExpandAllProps {
    getToggleAllRowsExpandedProps: () => {
        onClick: React.MouseEventHandler;
    };
    isAllRowsExpanded: boolean;
}

declare const ExpandAll: React.FC<ExpandAllProps>;

export default ExpandAll;
