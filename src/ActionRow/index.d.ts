import { FC, ReactNode } from 'react';

export interface ActionRowProps {
  as?: string;
  className?: string,
  isStacked?: boolean;
  children?: ReactNode;
}

declare const ActionRow: FC<ActionRowProps>;

export default ActionRow;
