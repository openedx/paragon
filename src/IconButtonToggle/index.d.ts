import React from 'react';
import { IconButtonProps } from '../IconButton';

export interface IconButtonToggleProps {
    activeValue?: string;
    onChange?: (value: string) => void;
    children: React.ReactElement<IconButtonProps>[];
}

declare const IconButtonToggle: React.FC<IconButtonToggleProps>;

export default IconButtonToggle;
