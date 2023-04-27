import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Check, Error } from '../../icons';
import { StepperContext } from './StepperContext';
import Icon from '../Icon';
import Bubble from '../Bubble';

function StepperHeaderStep({
  eventKey,
  title,
  isActive,
  hasError,
  description,
  index,
}) {
  const { getIsComplete } = useContext(StepperContext);
  const isComplete = getIsComplete(eventKey);
  const stepIcon = isComplete ? <Icon src={Check} /> : <span>{index + 1}</span>;
  const errorIcon = <Icon src={Error} />;

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

StepperHeaderStep.propTypes = {
  /**
   * An identifier of the `HeaderStep`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `HeaderStep` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,
  /** A text of the `HeaderStep`. */
  title: PropTypes.string.isRequired,
  /** Specifies that this `HeaderStep` is active. */
  isActive: PropTypes.bool,
  /** Informs user if this `Step` has errors. */
  hasError: PropTypes.bool,
  /** A text under the `title`. */
  description: PropTypes.string,
  /** A number that will be display in the icon of the `HeaderStep`.  */
  index: PropTypes.number,
};

StepperHeaderStep.defaultProps = {
  isActive: false,
  hasError: false,
  description: undefined,
  index: 0,
};

export default StepperHeaderStep;
