import { FC, ReactNode } from 'react';
import { SpinnerProps } from 'react-bootstrap/Spinner';

export interface SpinnerTypes extends SpinnerProps {
  className?: string;
  screenReaderText?: ReactNode;
}

declare const Spinner: FC<SpinnerTypes>;

export default Spinner;
