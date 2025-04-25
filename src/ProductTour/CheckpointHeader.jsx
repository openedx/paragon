import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CheckpointBreadcrumbs from './CheckpointBreadcrumbs';
import CheckpointTitle from './CheckpointTitle';
import CheckpointIndex from './CheckpointIndex';

const CheckpointHeader = React.forwardRef(({
  extendedTour, index, onDismiss, title, totalCheckpoints,
}) => {
  const className = classNames({
    'pgn__checkpoint-header': !extendedTour,
    'pgn__checkpoint-header-extended': extendedTour,
  });

  return (
    <div className={className}>
      {!extendedTour && (
        <>
          <CheckpointTitle>{title}</CheckpointTitle>
          <CheckpointBreadcrumbs currentIndex={index} totalCheckpoints={totalCheckpoints} />
        </>
      )}
      {extendedTour && (
        <CheckpointIndex index={index} onDismiss={onDismiss} title={title} totalCheckpoints={totalCheckpoints} />
      )}
    </div>
  );
});

CheckpointHeader.defaultProps = {
  extendedTour: false,
  title: '',
};

CheckpointHeader.propTypes = {
  /** A boolean that can customize the header to accommodate longer tours */
  extendedTour: PropTypes.bool,
  /** The current index of the given Checkpoint */
  index: PropTypes.number.isRequired,
  /** A function that runs when triggering the `onClick` event of the dismiss
   * button for the given Checkpoint. */
  onDismiss: PropTypes.func.isRequired,
  /** The text displayed in the title of the Checkpoint */
  title: PropTypes.node,
  /** The total number of Checkpoints in a tour */
  totalCheckpoints: PropTypes.number.isRequired,
};

export default CheckpointHeader;
