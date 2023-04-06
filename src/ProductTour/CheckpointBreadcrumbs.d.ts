import * as React from 'react';

export type CheckpointBreadcrumbsProps = {
  currentIndex?: number | null;
  totalCheckpoints?: number | null;
};

const CheckpointBreadcrumbs: React.ForwardRefExoticComponent<
CheckpointBreadcrumbsProps & React.RefAttributes<HTMLSpanElement>>;

export default CheckpointBreadcrumbs;
