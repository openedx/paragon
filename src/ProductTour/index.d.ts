import React from 'react';

export interface CheckpointData {
    advanceButtonText?: React.ReactNode;
    body?: React.ReactNode;
    dismissButtonText?: React.ReactNode;
    endButtonText?: React.ReactNode;
    onAdvance?: () => void;
    onDismiss?: () => void;
    onEnd?: () => void;
    placement?: string;
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

declare const ProductTour: React.ForwardRefExoticComponent<ProductTourProps>;

export default ProductTour;
