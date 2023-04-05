import * as React from 'react';

export type ProgressBarVariant = 'dark' | 'warning' | 'success' | 'error';

export interface ProgressBarProps {
  now?: number;
  label?: React.ReactNode;
  variant?: ProgressBarVariant;
  className?: string;
}

export interface ProgressBarAnnotatedProps extends ProgressBarProps {
  threshold?: number;
  thresholdLabel?: React.ReactNode;
  thresholdVariant?: ProgressBarVariant;
  progressHint?: React.ReactNode;
  thresholdHint?: React.ReactNode;
}

declare const ProgressBar: React.FC<ProgressBarProps> & {
  Annotated: React.FC<ProgressBarAnnotatedProps>;
};

export default ProgressBar;
