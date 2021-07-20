import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ActionRow = ({
  as,
  isStacked,
  children,
  ...props
}) => React.createElement(
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

ActionRow.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  isStacked: PropTypes.bool,
};

ActionRow.defaultProps = {
  as: 'div',
  className: undefined,
  children: null,
  isStacked: false,
};

const ActionRowSpacer = () => <span className="pgn__action-row-spacer" />;

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
