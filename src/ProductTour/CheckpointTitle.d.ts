import * as React from 'react';

export interface CheckpointTitleProps {
  children?: React.ReactNode;
}

declare const CheckpointTitle: React.ForwardRefExoticComponent<
CheckpointTitleProps & React.RefAttributes<HTMLHeadingElement>>;

export default CheckpointTitle;
