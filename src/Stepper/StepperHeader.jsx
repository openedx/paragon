import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';
import { useWindowSize } from '..';

function StepListSeparator() {
  return <li aria-hidden="true" className="pgn__stepper-header-line" />;
}

function StepList({ steps, activeKey, isClickable }) {
  return (
    <ul className="pgn__stepper-header-step-list">
      {steps.map(({ label, ...stepProps }, index) => {
        const handleClick = () => isClickable(stepProps.eventKey);

        return (
          <React.Fragment key={stepProps.eventKey}>

            {index !== 0 && <StepListSeparator />}
            <StepperHeaderStep
              {...stepProps}
              index={index}
              isActive={activeKey === stepProps.eventKey}
              onClick={isClickable && handleClick}
            >
              {label}
            </StepperHeaderStep>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

const PageCount = ({ activeStepIndex, totalSteps }) => `Step ${activeStepIndex + 1} of ${totalSteps}`;

function StepperHeader({ className, PageCountComponent, isClickable }) {
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
      <StepList steps={steps} isClickable={isClickable} activeKey={activeKey} />
    </div>
  );
}

StepperHeader.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A component that receives `activeStepIndex` and `totalSteps` props to display them. */
  PageCountComponent: PropTypes.elementType,
  /** Specifies whether the `Stepper` headers is clickable, if `true` appropriate `hover` and `focus` styling
   * will be added and opportunities toggle content. */
  isClickable: PropTypes.func,
};

StepperHeader.defaultProps = {
  className: null,
  PageCountComponent: PageCount,
  isClickable: null,
};

StepList.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    eventKey: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    hasError: PropTypes.bool,
  })),
  activeKey: PropTypes.string.isRequired,
  isClickable: PropTypes.func,
};

StepList.defaultProps = {
  steps: [],
  isClickable: null,
};

StepperHeader.Step = StepperHeaderStep;

export default StepperHeader;
