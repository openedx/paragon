import React from 'react';

export interface StepperStepProps {
    children: React.ReactNode;
    className?: string;
    eventKey: string;
    title: string;
    description?: string;
    hasError?: boolean;
    index?: number;
}

export default function StepperStep(props: StepperStepProps): JSX.Element;
