import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import ActionRow from '../ActionRow';
import Button from '../Button';

const CheckpointActionRow = forwardRef(({
  advanceButtonText,
  backButtonText,
  endButtonText,
  isLastCheckpoint,
  onAdvance,
  onBack,
  onEnd,
  index,
}, ref) => {
  const isFirstCheckpoint = index === 0;
  return (
    <ActionRow className="pgn__checkpoint-action-row" ref={ref}>
      {!isFirstCheckpoint && (
        <Button
          className="pgn__checkpoint-button-back"
          variant="tertiary"
          onClick={onBack}
        >
          {backButtonText}
        </Button>
      )}
      <Button
        autoFocus
        className="pgn__checkpoint-button_advance"
        onClick={isLastCheckpoint ? () => onEnd(index) : () => onAdvance(index)}
      >
        {isLastCheckpoint ? endButtonText : advanceButtonText}
      </Button>
    </ActionRow>
  );
});

CheckpointActionRow.defaultProps = {
  advanceButtonText: '',
  backButtonText: '',
  endButtonText: '',
  isLastCheckpoint: false,
  onAdvance: () => { },
  onBack: () => { },
  onEnd: () => { },
  index: 0,
};

CheckpointActionRow.propTypes = {
  /** The text displayed on the button used to advance the tour. */
  advanceButtonText: PropTypes.node,
  /** The text displayed on the button used to go back on the tour */
  backButtonText: PropTypes.string,
  /** The text displayed on the button used to end the tour. */
  endButtonText: PropTypes.node,
  /** Whether the parent Checkpoint is the last in the tour. */
  isLastCheckpoint: PropTypes.bool,
  /** A function that runs when triggering the `onClick` event of the advance button. */
  onAdvance: PropTypes.func,
  /** A function that runs when triggering the `onClick` event of the back button. */
  onBack: PropTypes.func,
  /** A function that runs when triggering the `onClick` event of the advance button if isLastCheckpoint is true. */
  onEnd: PropTypes.func,
  /** Allows visibility of last index value for onEnd checkpoint compatibility */
  index: PropTypes.number,
};

export default CheckpointActionRow;
