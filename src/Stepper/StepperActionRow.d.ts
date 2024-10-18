import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface StepperActionRowProps extends BsPrefixProps {
    children: React.ReactNode;
    eventKey: string;
}

declare const StepperActionRow: React.FC<StepperActionRowProps>;

export default StepperActionRow;
