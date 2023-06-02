import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';
import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../utils/breakpoints';
import { Size } from '../utils/constants';

function StepListSeparator() {
  return <li aria-hidden="true" className="pgn__stepper-header-line" />;
}

function StepList({ steps, activeKey }) {
  return (
    <ul className="pgn__stepper-header-step-list">
      {steps.map(({ label, ...stepProps }, index) => (
        <React.Fragment key={stepProps.eventKey}>
          {index !== 0 && <StepListSeparator />}
          <StepperHeaderStep
            {...stepProps}
            index={index}
            isActive={activeKey === stepProps.eventKey}
          >
            {label}
          </StepperHeaderStep>
        </React.Fragment>
      ))}
    </ul>
  );
}

const PageCount = ({ activeStepIndex, totalSteps }) => `Step ${activeStepIndex + 1} of ${totalSteps}`;

function StepperHeader({ className, PageCountComponent, compactWidth }) {
  const { steps, activeKey } = useContext(StepperContext);
  const windowDimensions = useWindowSize();
  const size = Size[compactWidth] || 'small';
  const breakpointWidth = breakpoints[size].maxWidth || Infinity;
  const isCompactView = windowDimensions.width < breakpointWidth;

  if (isCompactView) {
    const activeStepIndex = steps.findIndex(step => step.eventKey === activeKey);
    const activeStep = steps[activeStepIndex];
    return (
      <div className={classNames('pgn__stepper-header', className)}>
        <StepperHeaderStep
          {...activeStep}
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
}

StepperHeader.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: PropTypes.elementType,
  /** The max width in which the compact view of the header will switch to display the step number that is
   * currently in progress. Options include 'xs', 'sm', 'md', 'lg', 'xl', and 'xxl'.
   */
  compactWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

StepperHeader.defaultProps = {
  className: null,
  PageCountComponent: PageCount,
  compactWidth: 'sm',
};

StepList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    eventKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hasError: PropTypes.bool,
  })),
  activeKey: PropTypes.string.isRequired,
};

StepList.defaultProps = {
  steps: [],
};

StepperHeader.Step = StepperHeaderStep;

export default StepperHeader;
