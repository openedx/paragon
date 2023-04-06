import * as React from 'react';

type PlacementType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'left-start'
  | 'left'
  | 'left-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end';

export interface CheckpointData {
  advanceButtonText?: React.ReactNode;
  body?: React.ReactNode;
  dismissButtonText?: React.ReactNode;
  endButtonText?: React.ReactNode;
  onAdvance?: () => void;
  onDismiss?: () => void;
  onEnd?: () => void;
  placement?: string; // TODO:  Type 'string' is not assignable to type "top"
  target?: string;
  title?: React.ReactNode;
  showDismissButton?: boolean;
}

export interface TourData {
  advanceButtonText?: React.ReactNode;
  checkpoints?: CheckpointData[];
  dismissButtonText?: React.ReactNode;
  endButtonText?: React.ReactNode;
  enabled?: boolean;
  onDismiss?: () => void;
  onEnd?: (lastCheckpoint: CheckpointData) => void;
  onEscape?: () => void;
  startingIndex?: number;
  tourId: string;
}

export interface ProductTourProps {
  tours: TourData[];
}

declare const ProductTour: React.ForwardRefExoticComponent<
ProductTourProps & React.RefAttributes<HTMLDivElement>>;

export default ProductTour;
