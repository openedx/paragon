import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';

import Icon from '../Icon';
import IconButton from '../IconButton';
import { Close } from '../../icons';
import CheckpointTitle from './CheckpointTitle';
import messages from './messages';

const CheckpointHeader = React.forwardRef(({
  index, onDismiss, title, totalCheckpoints,
}) => {
  const intl = useIntl();
  const oneBasedIndex = index + 1;

  return (
    <>
      <header className="pgn__checkpoint-header">
        <span className="pgn__checkpoint-page-index">
          <FormattedMessage
            {...messages.pageIndexText}
            values={{ step: oneBasedIndex, totalSteps: totalCheckpoints }}
          />
        </span>
        <IconButton
          size="sm"
          iconAs={Icon}
          src={Close}
          alt={intl.formatMessage(messages.closeAltText)}
          onClick={onDismiss}
        />
      </header>
      {title && (<CheckpointTitle>{title}</CheckpointTitle>)}
    </>
  );
});

CheckpointHeader.defaultProps = {
  title: '',
};

CheckpointHeader.propTypes = {
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
