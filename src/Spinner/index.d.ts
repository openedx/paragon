import React from 'react';
import { SpinnerProps as BaseSpinnerProps } from 'react-bootstrap/Spinner';

export interface SpinnerProps extends BaseSpinnerProps {
    className?: string;
    screenReaderText?: React.ReactNode;
}

declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps>;

export default Spinner;
