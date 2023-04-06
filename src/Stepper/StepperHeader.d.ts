import * as React from 'react';

export interface StepperHeaderProps {
  className?: string;
  PageCountComponent?: keyof JSX.IntrinsicElements;
}

declare const StepperHeader: React.FC<StepperHeaderProps> & {
  Step: typeof StepperHeaderStep;
};

export default StepperHeader;
