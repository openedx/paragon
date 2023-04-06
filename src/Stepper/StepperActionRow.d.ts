import * as React from 'react';

export interface StepperActionRowProps {
  children: React.ReactNode;
  eventKey: string;
  as?: keyof JSX.IntrinsicElements;
}

declare const StepperActionRow: React.FC<StepperActionRowProps>;

export default StepperActionRow;
