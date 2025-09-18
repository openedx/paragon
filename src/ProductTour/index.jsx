import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

import Checkpoint from './Checkpoint';

const ProductTour = forwardRef(({ tours }, ref) => {
  const tourValue = tours.find((tour) => tour.enabled);
  const {
    enabled,
    checkpoints = [],
    startingIndex,
    onEscape,
    onEnd,
    onAdvance: tourOnAdvance,
    onBack: tourOnBack,
    onDismiss: tourOnDismiss,
    advanceButtonText: tourAdvanceButtonText,
    dismissAltText: tourDismissAltText,
    endButtonText: tourEndButtonText,
    backButtonText: tourBackButtonText,
  } = tourValue || {};
  const [currentCheckpointData, setCurrentCheckpointData] = useState(null);
  const [index, setIndex] = useState(0);
  const [isTourEnabled, setIsTourEnabled] = useState(false);
  const [prunedCheckpoints, setPrunedCheckpoints] = useState([]);
  const {
    title,
    body,
    onAdvance,
    onBack,
    onDismiss,
    advanceButtonText,
    dismissAltText,
    endButtonText,
    backButtonText,
    placement,
    target,
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
      if (event.key === 'Escape') {
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
    } else if (tourOnAdvance) {
      tourOnAdvance();
    }
  };

  const handleBack = () => {
    setIndex(index - 1);
    if (onBack) {
      onBack();
    } else if (tourOnBack) {
      tourOnBack();
    }
  };

  const handleDismiss = () => {
    setIndex(0);
    setIsTourEnabled(false);
    if (onDismiss) {
      onDismiss();
    } else if (tourOnDismiss) {
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
      dismissAltText={dismissAltText || tourDismissAltText}
      endButtonText={endButtonText || tourEndButtonText}
      backButtonText={backButtonText || tourBackButtonText}
      index={index}
      onBack={handleBack}
      onAdvance={handleAdvance}
      onDismiss={handleDismiss}
      onEnd={handleEnd}
      placement={placement}
      target={target}
      title={title}
      totalCheckpoints={prunedCheckpoints.length}
      ref={ref}
    />
  );
});

ProductTour.defaultProps = {
  tours: {
    advanceButtonText: '',
    backButtonText: '',
    checkpoints: {
      advanceButtonText: '',
      backButtonText: '',
      body: '',
      dismissAltText: '',
      endButtonText: '',
      onAdvance: () => {},
      onDismiss: () => {},
      onBack: () => {},
      placement: 'top',
      title: '',
    },
    dismissAltText: '',
    endButtonText: '',
    onBack: () => {},
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
    /** The text displayed on all buttons used to go back in the tour */
    backButtonText: PropTypes.string,
    /** An array comprised of checkpoint objects supporting the following values: */
    checkpoints: PropTypes.arrayOf(PropTypes.shape({
      /** The text displayed on the button used to advance the tour for the given Checkpoint
       * (overrides the* `advanceButtonText` defined in the parent tour object). */
      advanceButtonText: PropTypes.node,
      /** The text displayed on the button used to go back in the tour for the given Checkpoint
       * (overrides the* `backButtonText` defined in the parent tour object). */
      backButtonText: PropTypes.string,
      /** The text displayed in the body of the Checkpoint */
      body: PropTypes.node,
      /** The text used in the alt for the icon used to dismiss the tour for the given Checkpoint */
      dismissAltText: PropTypes.string,
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
    })),
    /** The text used in the alt for the icon used to dismiss the tour for the given Checkpoint */
    dismissAltText: PropTypes.string,
    /** Whether the tour is enabled. If there are multiple tours defined, only one should be enabled at a time. */
    enabled: PropTypes.bool.isRequired,
    /** The text displayed on the button used to end the tour. */
    endButtonText: PropTypes.node,
    /** A function that runs when triggering the `onBack` event of the back button. */
    onBack: PropTypes.func,
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

/**
 * Checks if the given object has a deprecated/legacy `dismissButtonText` property.
 * @param {Object} obj - The object to check
 * @returns {boolean} - True if the object has a deprecated/legacy `dismissButtonText` property, false otherwise
 */
const hasDismissButtonText = (obj) => {
  if ('dismissButtonText' in obj && !!obj.dismissButtonText) {
    return true;
  }
  return false;
};

export default withDeprecatedProps(ProductTour, 'ProductTour', {
  tours: {
    deprType: DeprTypes.FORMAT,
    message: "The dismissButtonText options in the 'tours' prop have been moved to 'dismissAltText'.",
    /**
     * Determines whether the given prop value contains the deprecated/legacy `dismissButtonText` property.
     * @param {Object[]} propValue - The tours prop value to check
     * @returns {boolean} True if the prop value contains the deprecated/legacy `dismissButtonText`
     *  property, false otherwise
     */
    expect: (propValue) => {
      if (!Array.isArray(propValue)) {
        return true;
      }
      return !propValue.some((tour) => {
        if (hasDismissButtonText(tour)) {
          return true;
        }
        return Array.isArray(tour.checkpoints)
          && tour.checkpoints.some(hasDismissButtonText);
      });
    },
    /**
     * Transforms the given prop value by updating the
     * deprecated/legacy `dismissButtonText` property to
     * `dismissAltText`, if the prop value is a string. Otherwise,
     * the original `dismissButtonText` property is ignored.
     * @param {Object[]} propValue - The tours prop value to transform
     * @returns {Object[]} The transformed prop value
     */
    transform: (propValue) => {
      const tours = propValue.map((tour) => {
        const updatedTour = { ...tour };

        // Replace tour level dismissButtonText with dismissAltText
        if (hasDismissButtonText(tour)) {
          if (typeof tour.dismissButtonText === 'string') {
            updatedTour.dismissAltText = tour.dismissButtonText;
          } else {
            const warningMessage = "[Deprecated] ProductTour: The 'dismissButtonText' options within the 'tours' prop now expects a string";
            // eslint-disable-next-line no-console
            console.warn(warningMessage);
          }
        }

        // Replace checkpoint level dismissButtonText with dismissAltText
        if (Array.isArray(tour.checkpoints)) {
          updatedTour.checkpoints = tour.checkpoints.map((checkpoint) => {
            if (hasDismissButtonText(checkpoint)) {
              const { dismissButtonText, ...rest } = checkpoint;
              if (typeof dismissButtonText === 'string') {
                return { ...rest, dismissAltText: dismissButtonText };
              }
            }
            return checkpoint;
          });
        }
        return updatedTour;
      });

      // Return the transformed tours
      return tours;
    },
  },
});
