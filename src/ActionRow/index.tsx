import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface ActionRowProps {
  as?: React.ElementType;
  isStacked?: boolean;
  children?: React.ReactNode;
  className?: string;
}

function ActionRow({
  as = 'div',
  isStacked,
  children,
  className,
  ...props
}: ActionRowProps) {
  return React.createElement(
    as,
    {
      ...props,
      className: classNames(className, {
        'pgn__action-row': !isStacked,
        'pgn__action-row-stacked': isStacked,
      }),
    },
    children,
  );
}

ActionRow.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies the contents of the row */
  children: PropTypes.node,
  /** Specifies whether row should be displayed horizontally */
  isStacked: PropTypes.bool,
};

ActionRow.defaultProps = {
  as: 'div',
  className: undefined,
  children: null,
  isStacked: false,
};

function ActionRowSpacer(): React.ReactElement {
  return <span className="pgn__action-row-spacer" />;
}

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
