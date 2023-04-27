import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StepperContext } from './StepperContext';
import ActionRow from '../ActionRow';

function StepperActionRow({
  as,
  children,
  eventKey,
  ...props
}) {
  const { activeKey } = useContext(StepperContext);
  const isActive = activeKey === eventKey;

  if (!isActive) {
    return null;
  }

  return React.createElement(as, props, children);
}

StepperActionRow.propTypes = {
  /** Specifies the content of the `ActionRow`. */
  children: PropTypes.node.isRequired,
  /**
   * An identifier of the `ActionRow`. When `activeKey` on the
   * `Stepper` equals to the `eventKey`, the `ActionRow` will be displayed.
   */
  eventKey: PropTypes.string.isRequired,
  /** Specifies the base element */
  as: PropTypes.elementType,
};

StepperActionRow.defaultProps = {
  as: ActionRow,
};

StepperActionRow.Spacer = ActionRow.Spacer;

export default StepperActionRow;
