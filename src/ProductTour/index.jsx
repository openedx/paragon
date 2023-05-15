import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Checkpoint from './Checkpoint';

const ProductTour = React.forwardRef(({ tours }, ref) => {
  const tourValue = tours.find((tour) => tour.enabled);
  const {
    enabled, checkpoints = [], startingIndex, onEscape, onEnd, onDismiss: tourOnDismiss,
    advanceButtonText: tourAdvanceButtonText, dismissButtonText: tourDismissButtonText,
    endButtonText: tourEndButtonText,
  } = tourValue || {};
  const [currentCheckpointData, setCurrentCheckpointData] = useState(null);
  const [index, setIndex] = useState(0);
  const [isTourEnabled, setIsTourEnabled] = useState(false);
  const [prunedCheckpoints, setPrunedCheckpoints] = useState([]);
  const {
    title, body, onAdvance, onDismiss, advanceButtonText, dismissButtonText,
    endButtonText, placement, target, showDismissButton,
  } = currentCheckpointData || {};

  /**
   * Takes a list of checkpoints and verifies that each target string provided is
   * an element in the DOM.
   */
  const pruneCheckpoints = (checkpointList) => {
    const checkpointsWithRenderedTargets = checkpointList.filter(
      (checkpoint) => !!document.querySelector(checkpoint.target),
    );
    setPrunedCheckpoints(checkpointsWithRenderedTargets);
  };

  useEffect(() => {
    if (enabled && checkpoints) {
      setIsTourEnabled(enabled);
      pruneCheckpoints(checkpoints);
      setIndex(startingIndex || 0);
    }
  }, [enabled, checkpoints, startingIndex]);

  useEffect(() => {
    if (isTourEnabled && prunedCheckpoints.length) {
      setCurrentCheckpointData(prunedCheckpoints[index]);
    }
  }, [index, isTourEnabled, prunedCheckpoints]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsTourEnabled(false);
        if (onEscape) {
          onEscape();
        }
      }
    };
    global.addEventListener('keydown', handleEsc);

    return () => {
      global.removeEventListener('keydown', handleEsc);
    };
  }, [onEscape]);

  if (!tourValue || !currentCheckpointData || !isTourEnabled) {
    return null;
  }

  const handleAdvance = () => {
    setIndex(index + 1);
    if (onAdvance) {
      onAdvance();
    }
  };

  const handleDismiss = () => {
    setIndex(0);
    setIsTourEnabled(false);
    if (onDismiss) {
      onDismiss();
    } else {
      tourOnDismiss();
    }
    setCurrentCheckpointData(null);
  };
  /* eslint-disable */
  /**
   * Takes the final checkpoint array index value and looks for an existing onEnd callback.
   * 
   * If an onEnd callback exist on checkpointIndex value and it is the final checkpoint 
   * in the array, the onEnd callback will be called for the parent, and individual onEnd object. 
   * 
   * @param {Integer} checkpointIndex 
   */
  /* eslint-enable */
  const handleEnd = (checkpointIndex) => {
    setIndex(0);
    setIsTourEnabled(false);
    if (prunedCheckpoints[checkpointIndex].onEnd) {
      prunedCheckpoints[checkpointIndex].onEnd();
    } else if (onEnd) {
      onEnd(prunedCheckpoints[checkpointIndex]);
    }
    setCurrentCheckpointData(null);
  };
  return (
    <Checkpoint
      advanceButtonText={advanceButtonText || tourAdvanceButtonText}
      body={body}
      currentCheckpointData={currentCheckpointData}
      dismissButtonText={dismissButtonText || tourDismissButtonText}
      endButtonText={endButtonText || tourEndButtonText}
      index={index}
      onAdvance={handleAdvance}
      onDismiss={handleDismiss}
      onEnd={handleEnd}
      placement={placement}
      target={target}
      title={title}
      totalCheckpoints={prunedCheckpoints.length}
      showDismissButton={showDismissButton}
      ref={ref}
    />
  );
});

ProductTour.defaultProps = {
  tours: {
    advanceButtonText: '',
    checkpoints: {
      advanceButtonText: '',
      body: '',
      dismissButtonText: '',
      endButtonText: '',
      onAdvance: () => {},
      onDismiss: () => {},
      placement: 'top',
      title: '',
      showDismissButton: undefined,
    },
    dismissButtonText: '',
    endButtonText: '',
    onDismiss: () => {},
    onEnd: () => {},
    onEscape: () => {},
    startingIndex: 0,
  },
};

ProductTour.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.shape({
    /** The text displayed on all buttons used to advance the tour. */
    advanceButtonText: PropTypes.node,
    /** An array comprised of checkpoint objects supporting the following values: */
    checkpoints: PropTypes.arrayOf(PropTypes.shape({
      /** The text displayed on the button used to advance the tour for the given Checkpoint
       * (overrides the* `advanceButtonText` defined in the parent tour object). */
      advanceButtonText: PropTypes.node,
      /** The text displayed in the body of the Checkpoint */
      body: PropTypes.node,
      /** The text displayed on the button used to dismiss the tour for the given Checkpoint
       * (overrides the `dismissButtonText` defined in the parent tour object). */
      dismissButtonText: PropTypes.node,
      /** The text displayed on the button used to end the tour for the given Checkpoint
       * (overrides the `endButtonText` defined in the parent tour object). */
      endButtonText: PropTypes.node,
      /** A function that runs when triggering the `onClick` event of the advance
       * button for the given Checkpoint. */
      onAdvance: PropTypes.func,
      /** A function that runs when triggering the `onClick` event of the dismiss
       * button for the given Checkpoint (overrides the `onDismiss` function defined in the parent tour object). */
      onDismiss: PropTypes.func,
      /** A function that runs when triggering the `onClick` event of the advance
      * button if the given Checkpoint is the only or last Checkpoint in a tour. */
      onEnd: PropTypes.func,
      /** A string that dictates the alignment of the Checkpoint around its target. */
      placement: PropTypes.oneOf([
        'top', 'top-start', 'top-end', 'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end',
      ]),
      /** The CSS selector for the Checkpoint's desired target. */
      target: PropTypes.string.isRequired,
      /** The text displayed in the title of the Checkpoint */
      title: PropTypes.node,
      /** Enforces visibility of the dismiss button under all circumstances */
      showDismissButton: PropTypes.bool,
    })),
    /** The text displayed on the button used to dismiss the tour. */
    dismissButtonText: PropTypes.node,
    /** Whether the tour is enabled. If there are multiple tours defined, only one should be enabled at a time. */
    enabled: PropTypes.bool.isRequired,
    /** The text displayed on the button used to end the tour. */
    endButtonText: PropTypes.node,
    /** A function that runs when triggering the `onClick` event of the dismiss button. */
    onDismiss: PropTypes.func,
    /** A function that runs when triggering the `onClick` event of the end button. */
    onEnd: PropTypes.func,
    /** A function that runs when pressing the Escape key. */
    onEscape: PropTypes.func,
    /** The index of the desired `Checkpoint` to render when the tour starts. */
    startingIndex: PropTypes.number,
    /** The ID of the tour */
    tourId: PropTypes.string.isRequired,
  })),
};

export default ProductTour;
