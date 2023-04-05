import * as React from 'react';

export type StatefulButtonState = 'default' | 'pending' | 'complete' | 'error';

export type DefaultValuesForLabelsAndIcons = {
  default: React.ReactNode;
  [key: string]: React.ReactNode;
};

export interface StatefulButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  state?: StatefulButtonState;
  labels: DefaultValuesForLabelsAndIcons;
  icons?: DefaultValuesForLabelsAndIcons;
  disabledStates?: StatefulButtonState[];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

declare const StatefulButton: React.FC<StatefulButtonProps>;

export default StatefulButton;
