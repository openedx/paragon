import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StepperContext } from './StepperContext';

export default function StepperStep({
  children,
  eventKey,
  className,
  title,
  description,
  hasError,
}) {
  const { activeKey, registerStep, removeStep } = useContext(StepperContext);

  useEffect(() => {
    registerStep({
      title,
      eventKey,
      description,
      hasError,
    });
    return () => removeStep(eventKey);
  }, [title, eventKey, description, hasError]);

  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return (
    <div className={classNames('pgn__stepper-step', className)}>
      {children}
    </div>
  );
}

StepperStep.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  eventKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  hasError: PropTypes.bool,
};

StepperStep.defaultProps = {
  className: undefined,
  description: undefined,
  hasError: false,
};
