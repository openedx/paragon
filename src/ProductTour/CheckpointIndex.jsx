import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';
import CheckpointTitle from './CheckpointTitle';

const CheckpointIndex = React.forwardRef(({
  index, onDismiss, title, totalCheckpoints,
}) => {
  const intl = useIntl();
  const oneBasedIndex = index + 1;

  const closeAltText = intl.formatMessage({
    id: 'pgn.ProductTour.checkpointHeader.close',
    defaultMessage: 'Close tour',
    description: 'Close alt text for ProductTour component',
  });

  return (
    <>
      {index === 0 && (
        <>
          <CheckpointTitle>{title}</CheckpointTitle>
          <p className="pgn__checkpoint-page-index">{oneBasedIndex} of {totalCheckpoints}</p>
        </>
      )}
      {index !== 0 && (
        <>
          <p className="pgn__checkpoint-page-index">{oneBasedIndex} of {totalCheckpoints}</p>
          <IconButton
            iconAs={Icon}
            src={Close}
            alt={closeAltText}
            onClick={onDismiss}
            variant="primary"
          />
        </>
      )}
    </>
  );
});

CheckpointIndex.defaultProps = {
  title: null,
};

CheckpointIndex.propTypes = {
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

export default CheckpointIndex;
