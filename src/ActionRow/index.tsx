import React from 'react';
import classNames from 'classnames';

/**
 * Layout utility that arranges action controls in a horizontal row or vertical stack.
 *
 * When ActionRow groups interactive controls (buttons, links), add `role="toolbar"`
 * and `aria-label` so assistive technology users can identify the group and
 * distinguish multiple ActionRows on the same page:
 *
 * ```jsx
 * <ActionRow role="toolbar" aria-label="Form actions">
 *   <Button variant="tertiary">Cancel</Button>
 *   <Button variant="primary">Submit</Button>
 * </ActionRow>
 * ```
 *
 * Both props are accepted via the standard HTML attributes spread; no extra
 * prop definitions are required.
 */
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
  return React.createElement(
    as,
    {
      ...props,
      className: classNames(props.className, {
        'pgn__action-row': !isStacked,
        'pgn__action-row-stacked': isStacked,
      }),
    },
    children,
  );
}

function ActionRowSpacer() {
  return <span className="pgn__action-row-spacer" aria-hidden="true" />;
}

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
