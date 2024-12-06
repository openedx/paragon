import React from 'react';

export interface ControlledSelectProps {
    row: {
        id: string | number;
        getToggleRowSelectedProps: () => any;
        isSelected: boolean;
    };
}

declare const ControlledSelect: React.FC<ControlledSelectProps>;

export default ControlledSelect;
