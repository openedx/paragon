import React from 'react';
import PropTypes from 'prop-types';
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

interface StepperComponent {
  (props: StepperProps): JSX.Element;
  Step: typeof StepperStep;
  Header: typeof StepperHeader;
  ActionRow: typeof StepperActionRow;
  propTypes?: any;
}

const Stepper: StepperComponent = function Stepper({ children, activeKey }: StepperProps) {
  return (
    <StepperContextProvider activeKey={activeKey}>
      {children}
    </StepperContextProvider>
  );
} as StepperComponent;

Stepper.propTypes = {
  children: PropTypes.node.isRequired,
  activeKey: PropTypes.string.isRequired,
};

Stepper.Step = StepperStep;
Stepper.Header = StepperHeader;
Stepper.ActionRow = StepperActionRow;

export default Stepper;
