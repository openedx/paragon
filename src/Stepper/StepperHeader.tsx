import React, { useContext } from 'react';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext, Step } from './StepperContext';
import useWindowSize from '../hooks/useWindowSizeHook';
import breakpoints, { Size } from '../utils/breakpoints';

function StepListSeparator() {
  return <li aria-hidden="true" className="pgn__stepper-header-line" />;
}

export interface StepListProps {
  steps: Step[];
  activeKey: string;
}

function StepList({ steps, activeKey }: StepListProps) {
  return (
    <ul className="pgn__stepper-header-step-list">
      {steps.map(({ title: label, ...stepProps }, index) => (
        <React.Fragment key={stepProps.eventKey}>
          {index !== 0 && <StepListSeparator />}
          <StepperHeaderStep
            {...stepProps}
            title={label}
            index={index}
            isActive={activeKey === stepProps.eventKey}
          />
        </React.Fragment>
      ))}
    </ul>
  );
}

export interface PageCountProps {
  activeStepIndex: number;
  totalSteps: number;
}

const PageCount: React.FC<PageCountProps> = ({ activeStepIndex, totalSteps }) => 
  <>Step {activeStepIndex + 1} of {totalSteps}</>;

export interface StepperHeaderProps {
  /** Specifies class name to append to the base element. */
  className?: string | null;
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent?: React.ComponentType<PageCountProps>;
  /** The max width in which the compact view of the header will switch to display the step number that is
   * currently in progress. Options include 'xs', 'sm', 'md', 'lg', 'xl', and 'xxl'.
   */
  compactWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

interface StepperHeaderComponent extends React.FC<StepperHeaderProps> {
  Step: typeof StepperHeaderStep;
}

const StepperHeader: StepperHeaderComponent = ({ 
  className = null, 
  PageCountComponent = PageCount, 
  compactWidth = 'sm' 
}) => {
  const { steps, activeKey } = useContext(StepperContext);
  const windowDimensions = useWindowSize();
  const size = Size[compactWidth] || 'small';
  const breakpointWidth = breakpoints[size].maxWidth || Infinity;
  const isCompactView = (windowDimensions.width ?? 0) < breakpointWidth;

  if (isCompactView) {
    const activeStepIndex = steps.findIndex(step => step.eventKey === activeKey);
    const activeStep = steps[activeStepIndex];
    
    if (!activeStep) {
      return null;
    }
    
    return (
      <div className={classNames('pgn__stepper-header', className)}>
        <StepperHeaderStep
          {...activeStep}
          title={activeStep.title}
          index={activeStepIndex}
          isActive
        />
        <div className="flex-grow-1" />
        <div>
          <PageCountComponent
            activeStepIndex={activeStepIndex}
            totalSteps={steps.length}
          />
        </div>
      </div>
    );
  }

  // Show all steps
  return (
    <div className={classNames('pgn__stepper-header', className)}>
      <StepList steps={steps} activeKey={activeKey} />
    </div>
  );
};

StepperHeader.Step = StepperHeaderStep;

export default StepperHeader;