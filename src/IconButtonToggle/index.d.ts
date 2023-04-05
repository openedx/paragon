import React from 'react';

// eslint-disable-next-line import/extensions
import IconButton from './IconButton';

export interface IconButtonToggleProps {
  activeValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactElement<IconButton>[];
}

const IconButtonToggle: React.FunctionComponent<IconButtonToggleProps>;

export default IconButtonToggle;
