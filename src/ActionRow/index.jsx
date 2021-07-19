import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ActionRow = ({
  as,
  isStacked,
  isStackedReversed,
  isStackedCentered,
  children,
  className,
  ...props
}) => {
  const stackedDirection = useMemo(
    () => {
      if (!isStacked) {
        return null;
      }
      return isStackedReversed ? 'column-reverse' : 'column';
    },
    [isStacked, isStackedReversed],
  );

  return React.createElement(
    as,
    {
      ...props,
      className: classNames(className, {
        'pgn__action-row': !isStacked,
        'pgn__action-row-stacked': isStacked,
        [`pgn__action-row-stacked-${stackedDirection}`]: stackedDirection,
        'pgn__action-row-stacked-centered': isStackedCentered,
      }),
    },
    children,
  );
};

ActionRow.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  isStacked: PropTypes.bool,
  isStackedReversed: PropTypes.bool,
  isStackedCentered: PropTypes.bool,
};

ActionRow.defaultProps = {
  as: 'div',
  className: undefined,
  children: null,
  isStacked: false,
  isStackedReversed: true,
  isStackedCentered: true,
};

const ActionRowSpacer = () => <span className="pgn__action-row-spacer" />;

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
