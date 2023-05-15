import React from 'react';
import PropTypes from 'prop-types';

const CheckpointBreadcrumbs = React.forwardRef(({ currentIndex, totalCheckpoints }, ref) => {
  if (totalCheckpoints === 1) {
    return null;
  }
  return (
    <span className="pgn__checkpoint-breadcrumb-container" ref={ref}>
      {new Array(totalCheckpoints).fill(0).map((v, i) => (
        i === currentIndex
          ? (
            <span
              /* eslint-disable-next-line react/no-array-index-key */
              key={i}
              className="pgn__checkpoint-breadcrumb pgn__checkpoint-breadcrumb_active"
              data-testid="pgn__checkpoint-breadcrumb_active"
            />
          )
          : (
            <span
              /* eslint-disable-next-line react/no-array-index-key */
              key={i}
              className="pgn__checkpoint-breadcrumb pgn__checkpoint-breadcrumb_inactive"
              data-testid="pgn__checkpoint-breadcrumb_inactive"
            />
          )
      ))}
    </span>
  );
});

CheckpointBreadcrumbs.defaultProps = {
  currentIndex: null,
  totalCheckpoints: null,
};

CheckpointBreadcrumbs.propTypes = {
  /** The current index of the parent Checkpoint within the tour. */
  currentIndex: PropTypes.number,
  /** The total number of Checkpoints within the tour. */
  totalCheckpoints: PropTypes.number,
};

export default CheckpointBreadcrumbs;
