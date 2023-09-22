import React, { useCallback, useEffect } from 'react';
import ProgressBarBase from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Annotation from '../Annotation';
import { getOffsetStyles, placeInfoAtZero } from './utils';

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

function ProgressBar(props) {
  return <ProgressBarBase {...props} />;
}

const ProgressBarAnnotated = React.forwardRef(({
  now,
  label,
  variant,
  threshold,
  thresholdLabel,
  thresholdVariant,
  progressHint,
  thresholdHint,
  ...props
}, ref) => {
  const [direction, setDirection] = React.useState('ltr');
  const progressInfoRef = React.useRef();
  const thresholdInfoRef = React.useRef();
  const progressAnnotatedRef = React.useRef();
  const resolvedRef = ref || progressAnnotatedRef;
  const thresholdPercent = (threshold || 0) - (now || 0);
  const isProgressHintAfter = now < HINT_SWAP_PERCENT;
  const isThresholdHintAfter = threshold < HINT_SWAP_PERCENT;
  const progressColor = VARIANTS.includes(variant) ? variant : PROGRESS_DEFAULT_VARIANT;
  const thresholdColor = VARIANTS.includes(thresholdVariant) ? thresholdVariant : THRESHOLD_DEFAULT_VARIANT;

  useEffect(() => {
    if (resolvedRef.current) {
      const pageDirection = window.getComputedStyle(resolvedRef.current).getPropertyValue('direction');
      setDirection(pageDirection);
    }
  }, [resolvedRef]);

  const positionAnnotations = useCallback(() => {
    placeInfoAtZero(progressInfoRef, direction, isProgressHintAfter, ANNOTATION_CLASS);
    placeInfoAtZero(thresholdInfoRef, direction, isThresholdHintAfter, ANNOTATION_CLASS);
  }, [direction, isProgressHintAfter, isThresholdHintAfter]);

  useEffect(() => {
    positionAnnotations();
    const observer = new ResizeObserver(() => {
      positionAnnotations();
    });
    const progressInfoEl = progressInfoRef.current;
    observer.observe(progressInfoEl);
    return () => progressInfoEl && observer.unobserve(progressInfoEl);
  }, [positionAnnotations]);

  const getHint = (text) => (
    <span className="pgn__progress-hint">
      {text}
    </span>
  );

  return (
    <div ref={progressAnnotatedRef} className="pgn__progress-annotated">
      {!!label && (
        <div
          className="pgn__progress-info"
          style={getOffsetStyles(now, direction)}
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
      </ProgressBarBase>
      {(!!threshold && !!thresholdLabel) && (
        <div
          className="pgn__progress-info"
          style={getOffsetStyles(threshold, direction)}
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
});

ProgressBarAnnotated.propTypes = {
  /** Current value of progress. */
  now: PropTypes.number,
  /** Show label that represents visual percentage. */
  label: PropTypes.node,
  /** The `ProgressBar` style variant to use. */
  variant: PropTypes.oneOf(VARIANTS),
  /** Specifies an additional `className` to add to the base element. */
  className: PropTypes.string,
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
  threshold: undefined,
  thresholdLabel: undefined,
  thresholdVariant: THRESHOLD_DEFAULT_VARIANT,
  progressHint: undefined,
  thresholdHint: undefined,
};

ProgressBar.Annotated = ProgressBarAnnotated;
export default ProgressBar;
