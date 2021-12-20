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
  /** Specifies the content of the `Step`. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /**
   * An identifier of the `Step`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `Step` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,
  /** A text of the `Step`. */
  title: PropTypes.string.isRequired,
  /** A text under the `title`. */
  description: PropTypes.string,
  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,
};

StepperStep.defaultProps = {
  className: undefined,
  description: undefined,
  hasError: false,
};
