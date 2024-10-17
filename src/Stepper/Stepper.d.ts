import React from 'react';
import { StepperStepProps } from './Stepper.Step';
import { StepperHeaderProps } from './StepperHeader';
import { StepperActionRowProps } from './StepperActionRow';
import ActionRow from '../ActionRow';

export interface StepperTypes {
    children: React.ReactNode;
    activeKey: string;
}

declare const Stepper: React.FC<StepperTypes> & {
    Step: React.FC<StepperStepProps>;
    Header: React.FC<StepperHeaderProps>;
    ActionRow: React.FC<StepperActionRowProps> & {
        Spacer: typeof ActionRow.Spacer;
    };
};

export default Stepper;
