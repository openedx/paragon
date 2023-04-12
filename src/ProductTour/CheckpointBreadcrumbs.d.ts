import React from 'react';

export type CheckpointBreadcrumbsProps = {
    currentIndex?: number;
    totalCheckpoints?: number;
};

declare const CheckpointBreadcrumbs: React.ForwardRefExoticComponent<CheckpointBreadcrumbsProps>;

export default CheckpointBreadcrumbs;
