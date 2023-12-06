import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { createPopper } from '@popperjs/core';
import { FormattedMessage } from 'react-intl';

import breakpoints from '../utils/breakpoints';

import CheckpointActionRow from './CheckpointActionRow';
import CheckpointBody from './CheckpointBody';
import CheckpointBreadcrumbs from './CheckpointBreadcrumbs';
import CheckpointTitle from './CheckpointTitle';
import messages from './messages';

const Checkpoint = React.forwardRef(({
  body,
  index,
  placement,
  target,
  title,
  totalCheckpoints,
  ...props
}, ref) => {
  const [checkpointVisible, setCheckpointVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  useEffect(() => {
    const targetElement = document.querySelector(target);
    const checkpoint = document.querySelector('#pgn__checkpoint');
    if (targetElement && checkpoint) {
      // Use the Popper library to translate the Checkpoint to its target's coordinates
      const checkpointPopper = createPopper(targetElement, checkpoint, {
        placement: isMobile ? 'top' : placement,
        modifiers: [
          {
            name: 'arrow',
            options: {
              padding: 25,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 20],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 20,
              tetherOffset: 35,
            },
          },
        ],
      });
      setCheckpointVisible(true);
      if (checkpointPopper) {
        checkpointPopper.forceUpdate();
      }
    }
  }, [target, isMobile, placement]);

  useEffect(() => {
    if (checkpointVisible) {
      // Scroll the Checkpoint into view once its rendered
      const targetElement = document.querySelector(target);
      let targetOffset = targetElement.getBoundingClientRect().top;
      if ((targetOffset < 0) || (targetElement.getBoundingClientRect().bottom > global.innerHeight)) {
        if (placement.includes('top')) {
          if (targetOffset < 0) {
            targetOffset *= -1;
          }
          targetOffset -= 280;
        } else {
          targetOffset -= 80;
        }

        global.scrollTo({
          top: targetOffset, behavior: 'smooth',
        });
      }

      const button = document.querySelector('.pgn__checkpoint-button_advance');
      button.focus();
    }
  }, [target, checkpointVisible, placement]);

  const isLastCheckpoint = index + 1 === totalCheckpoints;
  const isOnlyCheckpoint = totalCheckpoints === 1;

  return (
    <div
      id="pgn__checkpoint"
      className="pgn__checkpoint"
      aria-labelledby="pgn__checkpoint-title"
      ref={ref}
      role="dialog"
      style={{ visibility: checkpointVisible ? 'visible' : 'hidden', pointerEvents: checkpointVisible ? 'auto' : 'none' }}
    >
      <span className="sr-only">
        <FormattedMessage
          {...messages.topPositionText}
          values={{ step: index + 1 }}
        />
      </span>
      {(title || !isOnlyCheckpoint) && (
        <div className="pgn__checkpoint-header">
          <CheckpointTitle>{title}</CheckpointTitle>
          <CheckpointBreadcrumbs currentIndex={index} totalCheckpoints={totalCheckpoints} />
        </div>
      )}
      <CheckpointBody>{body}</CheckpointBody>
      <CheckpointActionRow
        isLastCheckpoint={isLastCheckpoint}
        index={index}
        {...props}
      />
      <div id="pgn__checkpoint-arrow" data-popper-arrow />
      <span className="sr-only">
        <FormattedMessage
          {...messages.bottomPositionText}
          values={{ step: index + 1 }}
        />
      </span>
    </div>
  );
});

Checkpoint.defaultProps = {
  advanceButtonText: null,
  body: null,
  dismissButtonText: null,
  endButtonText: null,
  placement: 'top',
  title: null,
  showDismissButton: undefined,
};

Checkpoint.propTypes = {
  /** The text displayed on the button used to advance the tour for the given Checkpoint. */
  advanceButtonText: PropTypes.node,
  /** The text displayed in the body of the Checkpoint */
  body: PropTypes.node,
  /** The text displayed on the button used to dismiss the tour for the given Checkpoint. */
  dismissButtonText: PropTypes.node,
  /** The text displayed on the button used to end the tour for the given Checkpoint. */
  endButtonText: PropTypes.node,
  /** The current index of the given Checkpoint */
  index: PropTypes.number.isRequired,
  /** A function that runs when triggering the `onClick` event of the advance
   * button for the given Checkpoint. */
  onAdvance: PropTypes.func.isRequired,
  /** A function that runs when triggering the `onClick` event of the dismiss
   * button for the given Checkpoint. */
  onDismiss: PropTypes.func.isRequired,
  /** A function that runs when triggering the `onClick` event of the advance
   * button if the given Checkpoint is the only or last Checkpoint in a tour. */
  onEnd: PropTypes.func.isRequired,
  /** A string that dictates the alignment of the Checkpoint around its target. */
  placement: PropTypes.oneOf([
    'top', 'top-start', 'top-end', 'right-start', 'right', 'right-end',
    'left-start', 'left', 'left-end', 'bottom', 'bottom-start', 'bottom-end',
  ]),
  /** The CSS selector for the Checkpoint's desired target. */
  target: PropTypes.string.isRequired,
  /** The text displayed in the title of the Checkpoint */
  title: PropTypes.node,
  /** The total number of Checkpoints in a tour */
  totalCheckpoints: PropTypes.number.isRequired,
  /** Enforces visibility of the dismiss button under all circumstances */
  showDismissButton: PropTypes.bool,
};

export default Checkpoint;
