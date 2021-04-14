import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';
import { useWindowSize } from '..';

const StepListSeparator = () => (
  <li aria-hidden="true" className="pgn__stepper-header-line" />
);

const StepList = ({ steps, activeKey }) => (
  <ul className="pgn__stepper-header-step-list">
    {steps.map(({ label, ...stepProps }, index) => (
      <React.Fragment key={label}>

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

const PageCount = ({ activeStepIndex, totalSteps }) => `${activeStepIndex + 1} of ${totalSteps}`;

const StepperHeader = ({ className, PageCountComponent }) => {
  const { steps, activeKey } = useContext(StepperContext);
  const windowDimensions = useWindowSize();
  // assume about 200px per step
  const isCompactView = windowDimensions.width < (steps.length * 200);

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
};

StepperHeader.propTypes = {
  className: PropTypes.string,
  PageCountComponent: PropTypes.elementType,
};

StepperHeader.defaultProps = {
  className: null,
  PageCountComponent: PageCount,
};

StepperHeader.Step = StepperHeaderStep;

export default StepperHeader;
