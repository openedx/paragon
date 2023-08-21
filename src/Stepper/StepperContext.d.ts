import React from 'react';

export interface StepperStepProps {
    children: React.ReactNode;
    eventKey: string;
    index?: number;
    onClick?: (eventKey: string) => void;
    active?: boolean;
    complete?: boolean;
    disabled?: boolean;
}

declare const StepperStep: React.FC<StepperStepProps>;

export default StepperStep;
