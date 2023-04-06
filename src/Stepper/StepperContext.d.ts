import * as React from 'react';

interface StepperStepProps {
  children: React.ReactNode,
  eventKey: string.isRequired,
  index?: number,
  onClick?: (eventKey: string) => void,
  active?: boolean,
  complete?: boolean,
  disabled?: boolean,
}

declare const StepperStep: React.FC<StepperStepProps>;

export default StepperStep;
