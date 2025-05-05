import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const CheckpointActionRow = React.forwardRef(({
  advanceButtonText,
  backButtonText,
  dismissButtonText,
  endButtonText,
  isLastCheckpoint,
  onAdvance,
  onBack,
  onDismiss,
  onEnd,
  showDismissButton,
  index,
}, ref) => {
  const isFirstCheckpoint = index === 0;
  return (
    <div className="pgn__checkpoint-action-row" ref={ref}>
      {((showDismissButton && !isLastCheckpoint) || isFirstCheckpoint) && (
        <Button
          variant="tertiary"
          className="pgn__checkpoint-button_dismiss"
          onClick={onDismiss}
        >
          {dismissButtonText}
        </Button>
      )}
      {showDismissButton === undefined && !isFirstCheckpoint && (
        <Button
          className="pgn__checkpoint-button_dismiss"
          variant="tertiary"
          onClick={onBack}
        >
          {backButtonText}
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
  );
});

CheckpointActionRow.defaultProps = {
  advanceButtonText: '',
  backButtonText: '',
  dismissButtonText: '',
  endButtonText: '',
  isLastCheckpoint: false,
  onAdvance: () => { },
  onBack: () => { },
  onDismiss: () => { },
  onEnd: () => { },
  showDismissButton: undefined,
  index: 0,
};

CheckpointActionRow.propTypes = {
  /** The text displayed on the button used to advance the tour. */
  advanceButtonText: PropTypes.node,
  /** The text displayed on the button used to go back on the tour */
  backButtonText: PropTypes.node,
  /** The text displayed on the button used to dismiss the tour. */
  dismissButtonText: PropTypes.node,
  /** The text displayed on the button used to end the tour. */
  endButtonText: PropTypes.node,
  /** Whether the parent Checkpoint is the last in the tour. */
  isLastCheckpoint: PropTypes.bool,
  /** A function that runs when triggering the `onClick` event of the advance button. */
  onAdvance: PropTypes.func,
  /** A function that runs when triggering the `onClick` event of the back button. */
  onBack: PropTypes.func,
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
