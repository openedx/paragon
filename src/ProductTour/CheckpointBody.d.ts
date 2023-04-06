import * as React from 'react';

export interface CheckpointBodyProps {
  children?: React.ReactNode;
}

declare const CheckpointBody: React.ForwardRefExoticComponent<
CheckpointBodyProps & React.RefAttributes<HTMLDivElement>>;

export default CheckpointBody;
