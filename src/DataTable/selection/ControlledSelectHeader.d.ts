import React from 'react';

export interface ControlledSelectHeaderProps {
    rows: {
        id: string | number;
    };
}

declare const ControlledSelectHeader: React.FC<ControlledSelectHeaderProps>;

export default ControlledSelectHeader;
