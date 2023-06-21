import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '~paragon-react';
import { useLocation } from '@reach/router';

export interface LeaveFeedbackProps {
  as?: keyof JSX.IntrinsicElements | React.ElementType;
}

function LeaveFeedback(props: LeaveFeedbackProps) {
  const location = useLocation();
  const FEEDBACK_URL = `https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${location.pathname})&amp;labels=docs&template=feedback_template.md`;

  const handleLinkFeedbackClick = () => {
    global.analytics.track('openedx.paragon.docs.leave_feedback.clicked');
  };

  return (
    <Nav.Link onClick={handleLinkFeedbackClick} href={FEEDBACK_URL} target="_blank" {...props}>
      Leave feedback
    </Nav.Link>
  );
}

LeaveFeedback.propTypes = {
  className: PropTypes.string,
  as: PropTypes.elementType,
};

LeaveFeedback.defaultProps = {
  className: 'muted-link',
  as: 'a',
};

export default LeaveFeedback;
