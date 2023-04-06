import * as React from 'react';

export interface ActionRowProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  isStacked?: boolean;
}

declare function ActionRowSpacer(): JSX.Element;

declare const ActionRow: React.FC<ActionRowProps> & {
  Spacer: typeof ActionRowSpacer;
};

export { ActionRowSpacer };
export default ActionRow;
