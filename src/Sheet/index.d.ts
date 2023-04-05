/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export declare const POSITIONS: {
  left: string;
  right: string;
  top: string;
  bottom: string;
};

export declare const VARIANTS: {
  light: string;
  dark: string;
};

export interface SheetProps {
  blocking?: boolean;
  children?: React.ReactNode;
  position?: keyof typeof POSITIONS;
  show?: boolean;
  onClose?: () => void;
  variant?: keyof typeof VARIANTS;
}

// eslint-disable-next-line react/prefer-stateless-function
declare class Sheet extends React.Component<SheetProps> {}

export default Sheet;
