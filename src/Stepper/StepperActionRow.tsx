import React, { useContext } from 'react';
import { StepperContext } from './StepperContext';
import ActionRow from '../ActionRow';

export interface StepperActionRowProps {
  /** Specifies the content of the `ActionRow`. */
  children: React.ReactNode;
  /**
   * An identifier of the `ActionRow`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `ActionRow` will be displayed.
   */
  eventKey: string;
  /** Specifies the base element */
  as?: React.ElementType;
  [key: string]: any; // For additional props passed through
}

interface StepperActionRowComponent extends React.FC<StepperActionRowProps> {
  Spacer: typeof ActionRow.Spacer;
}

const StepperActionRow: StepperActionRowComponent = ({
  as = ActionRow,
  children,
  eventKey,
  ...props
}) => {
  const { activeKey } = useContext(StepperContext);
  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return React.createElement(as, props, children);
};

StepperActionRow.Spacer = ActionRow.Spacer;

export default StepperActionRow;