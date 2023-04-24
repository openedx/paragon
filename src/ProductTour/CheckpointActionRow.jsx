import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CheckpointActionRow = React.forwardRef(({
  advanceButtonText,
  dismissButtonText,
  endButtonText,
  isLastCheckpoint,
  onAdvance,
  onDismiss,
  onEnd,
  showDismissButton,
  index,
}, ref) => (
  <div className="pgn__checkpoint-action-row" ref={ref}>
    {(showDismissButton === undefined ? !isLastCheckpoint : showDismissButton) && (
      <Button
        variant="tertiary"
        className="pgn__checkpoint-button_dismiss"
        onClick={onDismiss}
      >
        {dismissButtonText}
      </Button>
    )}
    <Button
      autoFocus
      className="pgn__checkpoint-button_advance"
      variant="primary"
      onClick={isLastCheckpoint ? () => onEnd(index) : () => onAdvance(index)}
    >
      {isLastCheckpoint ? endButtonText : advanceButtonText}
    </Button>
  </div>
));

CheckpointActionRow.defaultProps = {
  advanceButtonText: '',
  dismissButtonText: '',
  endButtonText: '',
  isLastCheckpoint: false,
  onAdvance: () => {},
  onDismiss: () => {},
  onEnd: () => {},
  showDismissButton: undefined,
  index: 0,
};

CheckpointActionRow.propTypes = {
  /** The text displayed on the button used to advance the tour. */
  advanceButtonText: PropTypes.node,
  /** The text displayed on the button used to dismiss the tour. */
  dismissButtonText: PropTypes.node,
  /** The text displayed on the button used to end the tour. */
  endButtonText: PropTypes.node,
  /** Whether the parent Checkpoint is the last in the tour. */
  isLastCheckpoint: PropTypes.bool,
  /** A function that runs when triggering the `onClick` event of the advance button. */
  onAdvance: PropTypes.func,
  /** A function that runs when triggering the `onClick` event of the dismiss button. */
  onDismiss: PropTypes.func,
  /** A function that runs when triggering the `onClick` event of the advance button if isLastCheckpoint is true. */
  onEnd: PropTypes.func,
  /** Enforces visibility of the dismiss button under all circumstances */
  showDismissButton: PropTypes.bool,
  /** Allows visibility of last index value for onEnd checkpoint compatibility */
  index: PropTypes.number,
};

export default CheckpointActionRow;
