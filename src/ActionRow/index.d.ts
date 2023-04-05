import * as React from 'react';

export interface ActionRowProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  isStacked?: boolean;
}

declare function ActionRow(props: ActionRowProps): JSX.Element;

declare function ActionRowSpacer(): JSX.Element;

declare namespace ActionRow {
  const Spacer: typeof ActionRowSpacer;
}

export { ActionRowSpacer };
export default ActionRow;
