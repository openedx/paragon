import React, { useContext } from 'react';
import classNames from 'classnames';

import { Check, Error } from '../../icons';
import { StepperContext } from './StepperContext';
import Icon from '../Icon';
import Bubble from '../Bubble';

export interface StepperHeaderStepProps {
  /** A number that will be display in the icon of the `HeaderStep`. */
  index: number;
  /** A text of the `HeaderStep`. */
  title: string;
  /** Specifies that this `HeaderStep` is active. */
  isActive?: boolean;
  /** Informs user if this `Step` has errors. */
  hasError?: boolean;
  /** A text under the `title`. */
  description?: string;
  /** Callback fired when element gets clicked. */
  onClick?: () => void;
}

function StepperHeaderStep({
  title,
  isActive = false,
  hasError = false,
  description,
  index,
  onClick,
}: StepperHeaderStepProps) {
  const { getIsViewed } = useContext(StepperContext);
  const isComplete = getIsViewed(index + 1);
  const isViewed = getIsViewed(index);
  const stepIcon = isComplete ? <Icon src={Check} /> : <span>{index + 1}</span>;
  const errorIcon = <Icon src={Error} data-testid="step-error" />;
  const isClickable = onClick && isViewed && !isActive;

  if (isClickable) {
    return (
      <button
        type="button"
        aria-label={`${title} step`}
        className={classNames(
          'pgn__stepper-header-step',
          {
            'pgn__stepper-header-step-has-error': hasError,
            'pgn__stepper-header-step-complete': isComplete,
          },
        )}
        onClick={onClick}
        onKeyPress={onClick}
      >
        <Bubble variant={hasError ? 'error' : 'primary'} disabled>
          {hasError ? errorIcon : stepIcon}
        </Bubble>
        <div className="pgn__stepper-header-step-title-description">
          <div className="pgn__stepper-header-step-title">{title}</div>
          <div className="pgn__stepper-header-step-description">{description}</div>
        </div>
      </button>
    );
  }

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
      data-testid="step"
    >
      <Bubble variant={hasError ? 'error' : 'primary'} disabled={!isActive}>
        {hasError ? errorIcon : stepIcon}
      </Bubble>
      <div className="pgn__stepper-header-step-title-description">
        <div className="pgn__stepper-header-step-title">{title}</div>
        <div className="pgn__stepper-header-step-description">{description}</div>
      </div>
    </li>
  );
}

export default StepperHeaderStep;
