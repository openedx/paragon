import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { StepperContext } from './StepperContext';

export interface StepperStepProps {
  /** Specifies the content of the `Step`. */
  children: React.ReactNode;
  /** Specifies class name to append to the base element */
  className?: string;
  /**
   * An identifier of the `Step`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `Step` will be displayed.
   */
  eventKey: string;
  /** A text of the `Step`. */
  title: string;
  /** A text under the `title`. */
  description?: string;
  /** Informs user if this `Step` has errors. */
  hasError?: boolean;
  /**
   * Position of the `Step`, only required if adding error state
   * or conditionally rendering steps.
   * */
  index?: number;
  /**
   * Click handler for the `Step`. Takes effect only after the `Step` has been visited, making it clickable
   * and invoking this function on click. Should be used to provide navigation between steps.
   */
  onClick?: () => void;
}

export default function StepperStep({
  children,
  eventKey,
  className,
  title,
  index,
  description,
  hasError = false,
  onClick,
}: StepperStepProps) {
  const { activeKey, registerStep, removeStep } = useContext(StepperContext);

  useEffect(() => {
    registerStep({
      title,
      index,
      eventKey,
      description,
      hasError,
      onClick,
    });
    return () => removeStep(eventKey);
  }, [title, eventKey, description, hasError, index, registerStep, removeStep, onClick]);

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