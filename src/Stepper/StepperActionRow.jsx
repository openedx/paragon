import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StepperContext } from './StepperContext';
import { ActionRow } from '..';

const StepperActionRow = ({
  as,
  children,
  eventKey,
  ...props
}) => {
  const { activeKey } = useContext(StepperContext);
  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return React.createElement(as, props, children);
};

StepperActionRow.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  eventKey: PropTypes.string.isRequired,
};

StepperActionRow.defaultProps = {
  as: ActionRow,
};

StepperActionRow.Spacer = ActionRow.Spacer;

export default StepperActionRow;
