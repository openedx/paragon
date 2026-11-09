import React from 'react';
import classNames from 'classnames';

interface ActionRowProps extends React.HTMLAttributes<HTMLElement> {
  /** Specifies the base element */
  as?: React.ElementType;
  /** Specifies the contents of the row */
  children: React.ReactNode;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Specifies whether row should be displayed horizontally */
  isStacked?: boolean;
}

function ActionRow({
  as = 'div',
  isStacked = false,
  children,
  ...props
}: ActionRowProps) {
  // Reverse DOM order when stacked so the primary action (last child) is first
  // in the tab sequence, matching its visual position at the top of the stack.
  const orderedChildren = isStacked
    ? React.Children.toArray(children).reverse()
    : children;

  return React.createElement(
    as,
    {
      ...props,
      className: classNames(props.className, {
        'pgn__action-row': !isStacked,
        'pgn__action-row-stacked': isStacked,
      }),
    },
    orderedChildren,
  );
}

function ActionRowSpacer() {
  return <span className="pgn__action-row-spacer" />;
}

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
