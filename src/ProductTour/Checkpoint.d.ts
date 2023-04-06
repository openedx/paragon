import * as React from 'react';

export type CheckpointPlacements = 'top' | 'top-start' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'left-start' | 'left'
| 'left-end' | 'bottom' | 'bottom-start' | 'bottom-end';

export interface CheckpointProps {
  advanceButtonText?: React.ReactNode;
  body?: React.ReactNode;
  dismissButtonText?: React.ReactNode;
  endButtonText?: React.ReactNode;
  index: number;
  onAdvance: () => void;
  onDismiss: () => void;
  onEnd: () => void;
  placement?: CheckpointPlacements;
  showDismissButton?: boolean;
  target: string;
  title?: React.ReactNode;
  totalCheckpoints: number;
}

declare const Checkpoint: React.ForwardRefExoticComponent<CheckpointProps & React.RefAttributes<HTMLDivElement>>;

export default Checkpoint;
