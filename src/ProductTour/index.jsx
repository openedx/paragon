import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Checkpoint from './Checkpoint';

const ProductTour = React.forwardRef(({ tours }, ref) => {
  const tourValue = tours.filter((tour) => tour.enabled)[0];

  const [currentCheckpointData, setCurrentCheckpointData] = useState(null);
  const [index, setIndex] = useState(0);
  const [isTourEnabled, setIsTourEnabled] = useState(!!tourValue);
  const [prunedCheckpoints, setPrunedCheckpoints] = useState([]);

  /**
   * Takes a list of checkpoints and verifies that each target string provided is
   * an element in the DOM.
   */
  const pruneCheckpoints = (checkpoints) => {
    const checkpointsWithRenderedTargets = checkpoints.filter(
      (checkpoint) => !!document.querySelector(checkpoint.target),
    );
    setPrunedCheckpoints(checkpointsWithRenderedTargets);
  };

  useEffect(() => {
    if (tourValue) {
      if (!isTourEnabled) {
        setIsTourEnabled(tourValue.enabled);
      }
      pruneCheckpoints(tourValue.checkpoints);
      setIndex(tourValue.startingIndex || 0);
    }
  }, [tourValue]);

  useEffect(() => {
    if (isTourEnabled) {
      if (prunedCheckpoints) {
        setCurrentCheckpointData(prunedCheckpoints[index]);
      } else {
        pruneCheckpoints(tourValue.checkpoints);
      }
    }
  }, [index, isTourEnabled, prunedCheckpoints]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (isTourEnabled && event.keyCode === 27) {
        setIsTourEnabled(false);
        if (tourValue.onEscape) {
          tourValue.onEscape();
        }
      }
    };
    global.addEventListener('keydown', handleEsc);

    return () => {
      global.removeEventListener('keydown', handleEsc);
    };
  }, [currentCheckpointData]);

  if (!tourValue || !currentCheckpointData || !isTourEnabled) {
    return null;
  }

  const handleAdvance = () => {
    setIndex(index + 1);
    if (currentCheckpointData.onAdvance) {
      currentCheckpointData.onAdvance();
    }
  };

  const handleDismiss = () => {
    setIndex(0);
    setIsTourEnabled(false);
    if (currentCheckpointData.onDismiss) {
      currentCheckpointData.onDismiss();
    } else {
      tourValue.onDismiss();
    }
    setCurrentCheckpointData(null);
  };

  const handleEnd = () => {
    setIndex(0);
    setIsTourEnabled(false);
    if (tourValue.onEnd) {
      tourValue.onEnd();
    }
    setCurrentCheckpointData(null);
  };

  return (
    <Checkpoint
      advanceButtonText={currentCheckpointData.advanceButtonText || tourValue.advanceButtonText}
      body={currentCheckpointData.body}
      currentCheckpointData={currentCheckpointData}
      dismissButtonText={currentCheckpointData.dismissButtonText || tourValue.dismissButtonText}
      endButtonText={currentCheckpointData.endButtonText || tourValue.endButtonText}
      index={index}
      onAdvance={handleAdvance}
      onDismiss={handleDismiss}
      onEnd={handleEnd}
      placement={currentCheckpointData.placement}
      target={currentCheckpointData.target}
      title={currentCheckpointData.title}
      totalCheckpoints={prunedCheckpoints.length}
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
      /** A string that dictates the alignment of the Checkpoint around its target. */
      placement: PropTypes.oneOf([
        'top', 'top-start', 'top-end', 'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end',
      ]),
      /** The CSS selector for the Checkpoint's desired target. */
      target: PropTypes.string.isRequired,
      /** The text displayed in the title of the Checkpoint */
      title: PropTypes.node,
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
