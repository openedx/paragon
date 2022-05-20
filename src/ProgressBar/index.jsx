import React, { useEffect } from 'react';
import ProgressBarBase from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Annotation from '../Annotation';
import { placeInfoAtZero } from './utils';

export const ANNOTATION_CLASS = 'pgn__annotation';
const HINT_SWAP_PERCENT = 50;
const PROGRESS_DEFAULT_VARIANT = 'warning';
const THRESHOLD_DEFAULT_VARIANT = 'dark';
const VARIANTS = [
  'dark',
  'warning',
  'success',
  'error',
];

const ProgressBar = (props) => <ProgressBarBase {...props} />;

const ProgressBarAnnotated = ({
  now,
  label,
  variant,
  threshold,
  thresholdLabel,
  thresholdVariant,
  progressHint,
  thresholdHint,
  ...props
}) => {
  const progressInfoRef = React.useRef();
  const thresholdInfoRef = React.useRef();
  const thresholdPercent = (threshold || 0) - (now || 0);
  const isProgressHintAfter = now < HINT_SWAP_PERCENT;
  const isThresholdHintAfter = threshold < HINT_SWAP_PERCENT;
  const progressColor = VARIANTS.includes(variant) ? variant : PROGRESS_DEFAULT_VARIANT;
  const thresholdColor = VARIANTS.includes(thresholdVariant) ? thresholdVariant : THRESHOLD_DEFAULT_VARIANT;

  useEffect(() => {
    placeInfoAtZero(progressInfoRef, isProgressHintAfter, ANNOTATION_CLASS);
    placeInfoAtZero(thresholdInfoRef, isThresholdHintAfter, ANNOTATION_CLASS);
  }, [isProgressHintAfter, isThresholdHintAfter]);

  const getHint = (text) => (
    <span className="pgn__progress-hint">
      {text}
    </span>
  );

  return (
    <div className="pgn__progress-annotated">
      {!!label && (
        <div
          className="pgn__progress-info"
          style={{ left: `${now}%` }}
          ref={progressInfoRef}
        >
          {!isProgressHintAfter && getHint(progressHint)}
          <Annotation variant={progressColor}>
            {label}
          </Annotation>
          {isProgressHintAfter && getHint(progressHint)}
        </div>
      )}
      <ProgressBarBase>
        <ProgressBarBase
          {...props}
          now={now}
          className={classNames(
            `pgn__progress-bar--${progressColor}`,
            thresholdPercent > 0 ? 'pgn__progress-tick--white' : 'pgn__progress-tick--black',
          )}
          srOnly
        />
        {!!threshold && (
          <ProgressBarBase
            now={thresholdPercent}
            className={`pgn__progress-bar--${thresholdColor}`}
            srOnly
          />
        )}
        {!!threshold && (
          <div
            className={`pgn__progress-threshold-dot--${thresholdColor}`}
            style={{ left: `${threshold}%` }}
          />
        )}
      </ProgressBarBase>
      {(!!threshold && !!thresholdLabel) && (
        <div
          className="pgn__progress-info"
          style={{ left: `${threshold}%` }}
          ref={thresholdInfoRef}
        >
          {!isThresholdHintAfter && getHint(thresholdHint)}
          <Annotation
            arrowPlacement="top"
            variant={thresholdColor}
          >
            {thresholdLabel}
          </Annotation>
          {isThresholdHintAfter && getHint(thresholdHint)}
        </div>
      )}
    </div>
  );
};

ProgressBarAnnotated.propTypes = {
  /** Current value of progress. */
  now: PropTypes.number,
  /** Show label that represents visual percentage. */
  label: PropTypes.node,
  /** The `ProgressBar` style variant to use. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
  /** Hide's the label visually. */
  visuallyHidden: PropTypes.bool,
  /** Threshold current value. */
  threshold: PropTypes.number,
  /** Specifies label for `threshold`. */
  thresholdLabel: PropTypes.node,
  /** Variant for threshold value. */
  thresholdVariant: PropTypes.oneOf(VARIANTS),
  /** Text near the progress annotation. */
  progressHint: PropTypes.node,
  /** Text near the threshold annotation. */
  thresholdHint: PropTypes.node,
};

ProgressBarAnnotated.defaultProps = {
  now: undefined,
  label: undefined,
  variant: PROGRESS_DEFAULT_VARIANT,
  className: undefined,
  visuallyHidden: false,
  threshold: undefined,
  thresholdLabel: undefined,
  thresholdVariant: THRESHOLD_DEFAULT_VARIANT,
  progressHint: undefined,
  thresholdHint: undefined,
};

ProgressBar.Annotated = ProgressBarAnnotated;
export default ProgressBar;
