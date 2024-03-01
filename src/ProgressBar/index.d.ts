import React from 'react';
import { ProgressBarProps as BaseProgressBarProps } from 'react-bootstrap/ProgressBar';

export interface ProgressBarProps extends BaseProgressBarProps {}

export interface ProgressBarAnnotatedProps extends ProgressBarProps {
    threshold?: number;
    thresholdLabel?: React.ReactNode;
    thresholdVariant?: 'dark' | 'warning' | 'success' | 'error';
    progressHint?: React.ReactNode;
    thresholdHint?: React.ReactNode;
}

declare const ProgressBar: React.FC<ProgressBarProps> & {
    Annotated: React.FC<ProgressBarAnnotatedProps>;
};

export default ProgressBar;
