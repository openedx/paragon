import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StepperHeaderStep from './StepperHeaderStep';
import { StepperContext } from './StepperContext';

const StepperHeader = ({ className }) => {
  const { steps, activeKey } = useContext(StepperContext);

  return (
    <div
      className={classNames(
        'pgn__stepper-header',
        className,
      )}
    >
      <ul className="pgn__stepper-header-step-list">
        {steps.map(({ label, ...stepProps }, index) => (
          <StepperHeaderStep
            {...stepProps}
            key={label}
            index={index}
            isActive={activeKey === stepProps.eventKey}
          >
            {label}
          </StepperHeaderStep>
        ))}
      </ul>
    </div>
  );
};

StepperHeader.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      iconLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};

StepperHeader.defaultProps = {
  className: null,
};

StepperHeader.Step = StepperHeaderStep;

export default StepperHeader;
