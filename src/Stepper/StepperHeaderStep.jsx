import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StepperContext } from './StepperContext';
import { Icon } from '..';
import { Check, Error } from '../../icons';

const StepperHeaderStep = ({
  eventKey,
  title,
  isActive,
  hasError,
  description,
  index,
}) => {
  const { getIsComplete } = useContext(StepperContext);
  const isComplete = getIsComplete(eventKey);
  return (
    <li
      className={classNames(
        'pgn__stepper-header-step',
        {
          'pgn__stepper-header-step-active': isActive,
          'pgn__stepper-header-step-has-error': hasError,
          'pgn__stepper-header-step-complete': isComplete,
        },
      )}
    >
      <div className="pgn__stepper-header-step-icon">
        {!isComplete && !hasError && <span>{index + 1}</span>}
        {isComplete && !hasError && <Icon src={Check} />}
        {hasError && <Icon src={Error} />}
      </div>

      <div className="pgn__stepper-header-step-title-description">
        <div className="pgn__stepper-header-step-title">{title}</div>
        <div className="pgn__stepper-header-step-description">{description}</div>
      </div>
    </li>
  );
};

StepperHeaderStep.propTypes = {
  eventKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  hasError: PropTypes.bool,
  description: PropTypes.string,
  index: PropTypes.number,
};

StepperHeaderStep.defaultProps = {
  isActive: false,
  hasError: false,
  description: undefined,
  index: 0,
};

export default StepperHeaderStep;
