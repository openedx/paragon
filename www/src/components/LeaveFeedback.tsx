import React from 'react';
import PropTypes from 'prop-types';
import { Button, Hyperlink } from '~paragon-react';
import { useLocation } from '@reach/router';

export interface LeaveFeedbackProps {
  isLink?: boolean;
}

function LeaveFeedback({ isLink }, props: LeaveFeedbackProps) {
  const location = useLocation();
  const FEEDBACK_URL = `https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${location.pathname})&amp;labels=docs&template=feedback_template.md`;
  const leaveFeedbackLinkTitle = 'Leave feedback';

  const handleLinkFeedbackClick = () => {
    global.analytics.track('openedx.paragon.docs.leave_feedback.clicked');
  };

  if (isLink) {
    return (
      <Hyperlink
        className="muted-link nav-link"
        destination={FEEDBACK_URL}
        showLaunchIcon={false}
        onClick={handleLinkFeedbackClick}
        target="_blank"
        {...props}
      >
        {leaveFeedbackLinkTitle}
      </Hyperlink>
    );
  }

  return (
    <Button
      as={Hyperlink}
      destination={FEEDBACK_URL}
      size="sm"
      variant="outline-primary"
      onClick={handleLinkFeedbackClick}
      target="_blank"
      {...props}
    >
      {leaveFeedbackLinkTitle}
    </Button>
  );
}

LeaveFeedback.propTypes = {
  isLink: PropTypes.bool,
};

LeaveFeedback.defaultProps = {
  isLink: false,
};

export default LeaveFeedback;
