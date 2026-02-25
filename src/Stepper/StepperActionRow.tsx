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

interface StepperActionRowComponent {
  (props: StepperActionRowProps): JSX.Element | null;
  Spacer: typeof ActionRow.Spacer;
}

function StepperActionRow({
  as = ActionRow,
  children,
  eventKey,
  ...props
}: StepperActionRowProps) {
  const { activeKey } = useContext(StepperContext);
  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return React.createElement(as, props, children);
}

(StepperActionRow as StepperActionRowComponent).Spacer = ActionRow.Spacer;

export default StepperActionRow;
