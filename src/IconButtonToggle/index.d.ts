import * as React from 'react';
import { IconButtonProps } from '../IconButton';

interface IconButtonToggleProps {
  activeValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactElement<IconButtonProps>[];
}

declare const IconButtonToggle: React.FC<IconButtonToggleProps>;

export default IconButtonToggle;
