/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export interface TransitionReplaceProps {
  children?: React.ReactElement;
  enterDuration?: number;
  exitDuration?: number;
  className?: string;
  onChildEnter?: (node: HTMLElement) => void;
  onChildEntering?: (node: HTMLElement) => void;
  onChildEntered?: (node: HTMLElement) => void;
  onChildExit?: (node: HTMLElement) => void;
  onChildExiting?: (node: HTMLElement) => void;
  onChildExited?: (node: HTMLElement) => void;
  transitionClassNames?: string;
  transitionStyles?: {
    entering?: React.CSSProperties;
    entered?: React.CSSProperties;
    exiting?: React.CSSProperties;
    exited?: React.CSSProperties;
  };
}

// eslint-disable-next-line react/prefer-stateless-function
declare class TransitionReplace extends React.Component<TransitionReplaceProps> {}

export default TransitionReplace;
