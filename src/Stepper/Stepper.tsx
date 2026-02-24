import React from 'react';
import StepperStep from './StepperStep';
import StepperHeader from './StepperHeader';
import StepperActionRow from './StepperActionRow';
import { StepperContextProvider } from './StepperContext';

export interface StepperProps {
  /**
   * Specifies the content of the `Stepper`.
   */
  children: React.ReactNode;
  /**
   * The eventKey of the step to display.
   */
  activeKey: string;
}

interface StepperComponent extends React.FC<StepperProps> {
  Step: typeof StepperStep;
  Header: typeof StepperHeader;
  ActionRow: typeof StepperActionRow;
}

const Stepper: StepperComponent = ({ children, activeKey }) => {
  return (
    <StepperContextProvider activeKey={activeKey}>
      {children}
    </StepperContextProvider>
  );
};

Stepper.Step = StepperStep;
Stepper.Header = StepperHeader;
Stepper.ActionRow = StepperActionRow;

export default Stepper;