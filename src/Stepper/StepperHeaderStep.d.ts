import * as React from 'react';

export interface StepperHeaderStepProps {
  eventKey: string;
  title: string;
  isActive?: boolean;
  description?: string;
  index?: number;
}

declare const StepperHeaderStep = React.FC<StepperHeaderStepProps>;

export default StepperHeaderStep;
