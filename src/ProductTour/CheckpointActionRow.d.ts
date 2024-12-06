import React from 'react';

export interface CheckpointActionRowProps {
    advanceButtonText?: React.ReactNode;
    dismissButtonText?: React.ReactNode;
    endButtonText?: React.ReactNode;
    isLastCheckpoint?: boolean;
    onAdvance?: (index: number) => void;
    onDismiss?: () => void;
    onEnd?: (index: number) => void;
    showDismissButton?: boolean;
    index?: number;
}

declare const CheckpointActionRow: React.ForwardRefExoticComponent<CheckpointActionRowProps>;

export default CheckpointActionRow;
