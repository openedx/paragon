import React from 'react';
import PropTypes from 'prop-types';
import StepperStep from './StepperStep';
import StepperHeader from './StepperHeader';
import StepperActionRow from './StepperActionRow';
import { StepperContextProvider } from './StepperContext';

function Stepper({ children, activeKey }) {
  // console.log('activeKey', activeKey);
  return (
    <StepperContextProvider activeKey={activeKey}>
      {children}
    </StepperContextProvider>
  );
}

Stepper.propTypes = {
  /**
   * Specifies the content of the `Stepper`.
   */
  children: PropTypes.node.isRequired,
  /**
   * The eventKey of the step to display.
   */
  activeKey: PropTypes.string.isRequired,
};

Stepper.Step = StepperStep;
Stepper.Header = StepperHeader;
Stepper.ActionRow = StepperActionRow;

export default Stepper;
