import React from 'react';
import { ControlledSelectionStatusProps } from './ControlledSelectionStatus';

export interface SelectionStatusProps extends ControlledSelectionStatusProps {}

declare const SelectionStatus: React.FC<SelectionStatusProps>;

export default SelectionStatus;
