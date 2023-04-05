// import * as React from 'react';

// interface StepperProps {
//   children: React.ReactNode;
//   activeKey: string;
// }

// declare function Stepper(props: StepperProps): JSX.Element;

// declare namespace Stepper {
//   export const Step: typeof import('./StepperStep').default;
//   export const Header: typeof import('./StepperHeader').default;
//   export const ActionRow: typeof import('./StepperActionRow').default;
// }

// export default Stepper;

// interface StepperActionRowProps {
//   as?: React.ElementType;
//   children: React.ReactNode;
//   eventKey: string;
// }

// declare function StepperActionRow(props: StepperActionRowProps): JSX.Element;

// declare namespace StepperActionRow {
//   export const Spacer: typeof import('..').ActionRow.Spacer;
// }

// export default StepperActionRow;

// interface Step {
//   eventKey: string;
//   label: string;
//   index?: number;
// }

// interface StepperContextType {
//   activeKey: string;
//   registerStep: (step: Step) => void;
//   steps: Step[];
//   removeStep: (eventKey: string) => void;
//   getIsComplete: (eventKey: string) => boolean;
// }

// declare const StepperContext: React.Context<StepperContextType>;

// interface StepperContextProviderProps {
//   children: React.ReactNode;
//   activeKey: string;
// }

// declare function StepperContextProvider(props: StepperContextProviderProps): JSX.Element;

// export {
//   StepperContext, StepperContextProvider, Step, stepsReducer,
// };

// interface StepperHeaderProps {
//   className?: string;
//   PageCountComponent?: React.FC<{ activeStepIndex: number; totalSteps: number }>;
// }

// declare function StepperHeader(props: StepperHeaderProps): JSX.Element;

// export default StepperHeader;
