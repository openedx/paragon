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
  pageIndexText: {
    id: 'pgn.ProductTour.Checkpoint.page-index-text',
    defaultMessage: '{step} of {totalSteps}',
    description: 'Page index showing your place in the ProductTour',
  },
  closeAltText: {
    id: 'pgn.ProductTour.checkpointHeader.close',
    defaultMessage: 'Close tour',
    description: 'Close alternative text for ProductTour component',
  },
});

export default messages;
