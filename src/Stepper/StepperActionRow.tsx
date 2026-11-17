import React, { useContext, forwardRef } from 'react';
import { StepperContext } from './StepperContext';
import ActionRow from '../ActionRow';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

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
}

type StepperActionRowComponent = ComponentWithAsProp<'div', StepperActionRowProps> & {
  Spacer: typeof ActionRow.Spacer;
};

const StepperActionRowBase: ComponentWithAsProp<'div', StepperActionRowProps> = forwardRef(({
  as = ActionRow,
  children,
  eventKey,
  ...props
}: StepperActionRowProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { activeKey } = useContext(StepperContext);
  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return React.createElement(as, { ...props, ref }, children);
});

const StepperActionRow = StepperActionRowBase as StepperActionRowComponent;

StepperActionRow.Spacer = ActionRow.Spacer;
StepperActionRow.displayName = 'StepperActionRow';

export default StepperActionRow;
