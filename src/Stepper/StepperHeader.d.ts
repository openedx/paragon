import React from 'react';
import { StepperHeaderStepProps } from './StepperHeaderStep';

export interface StepperHeaderProps {
  className?: string;
  PageCountComponent?: keyof JSX.IntrinsicElements;
}

declare const StepperHeader: React.FC<StepperHeaderProps> & {
  Step: React.FC<StepperHeaderStepProps>;
};

export default StepperHeader;
