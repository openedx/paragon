/* eslint-disable react/require-default-props */
import React, { useCallback, useEffect } from 'react';
import ProgressBarBase from 'react-bootstrap/ProgressBar';
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
] as const;

type Variant = typeof VARIANTS[number];

export interface ProgressBarAnnotatedProps {
  /** Current value of progress. */
  now?: number;
  /** Show label that represents visual percentage. */
  label?: React.ReactNode;
  /** The `ProgressBar` style variant to use. */
  variant?: Variant;
  /** Specifies an additional `className` to add to the base element. */
  className?: string;
  /** Threshold current value. */
  threshold?: number;
  /** Specifies label for `threshold`. */
  thresholdLabel?: React.ReactNode;
  /** Variant for threshold value. */
  thresholdVariant?: Variant;
  /** Text near the progress annotation. */
  progressHint?: React.ReactNode;
  /** Text near the threshold annotation. */
  thresholdHint?: React.ReactNode;
}

function ProgressBar(props: React.ComponentPropsWithoutRef<typeof ProgressBarBase>) {
  return <ProgressBarBase {...props} />;
}

function ProgressBarAnnotated({
  now,
  label,
  variant = PROGRESS_DEFAULT_VARIANT,
  threshold,
  thresholdLabel,
  thresholdVariant = THRESHOLD_DEFAULT_VARIANT,
  progressHint,
  thresholdHint,
  ...props
}: ProgressBarAnnotatedProps) {
  const progressInfoRef = React.useRef<HTMLDivElement>(null);
  const thresholdInfoRef = React.useRef<HTMLDivElement>(null);
  const thresholdPercent = (threshold || 0) - (now || 0);
  const isProgressHintAfter = (now as number) < HINT_SWAP_PERCENT;
  const isThresholdHintAfter = (threshold as number) < HINT_SWAP_PERCENT;
  const progressColor = VARIANTS.includes(variant!) ? variant! : PROGRESS_DEFAULT_VARIANT;
  const thresholdColor = VARIANTS.includes(thresholdVariant!) ? thresholdVariant! : THRESHOLD_DEFAULT_VARIANT;
  const direction = window.getComputedStyle(document.body).getPropertyValue('direction');

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
    observer.observe(progressInfoEl!);
    return () => { if (progressInfoEl) { observer.unobserve(progressInfoEl); } };
  }, [positionAnnotations]);

  const getHint = (text: React.ReactNode) => (
    <span className="pgn__progress-hint" data-testid="progress-hint">
      {text}
    </span>
  );

  return (
    <div className="pgn__progress-annotated">
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
}

interface ProgressBarComponent {
  (props: React.ComponentPropsWithoutRef<typeof ProgressBarBase>): React.JSX.Element;
  Annotated: React.FC<ProgressBarAnnotatedProps>;
}

const ProgressBarWithAnnotated = ProgressBar as unknown as ProgressBarComponent;
ProgressBarWithAnnotated.Annotated = ProgressBarAnnotated;

export default ProgressBarWithAnnotated;
