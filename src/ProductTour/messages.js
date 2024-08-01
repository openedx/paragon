import { defineMessages } from 'react-intl';

const messages = defineMessages({
  topPositionText: {
    id: 'pgn.ProductTour.Checkpoint.top-position-text',
    defaultMessage: 'Top of step {step}',
    description: 'Screen-reader message to notify user that they are located at the bottom of the product tour step.',
  },
  bottomPositionText: {
    id: 'pgn.ProductTour.Checkpoint.bottom-position-text',
    defaultMessage: 'Bottom of step {step}',
    description: 'Screen-reader message to notify user that they are located at the bottom of the product tour step.',
  },
});

export default messages;
