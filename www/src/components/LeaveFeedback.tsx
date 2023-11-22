import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Nav, Button, Hyperlink } from '~paragon-react';
import { useLocation } from '@reach/router';
import { sendLeaveFeedbackClick } from '../../segment-constants';

export interface LeaveFeedbackProps extends Partial<AnchorHTMLAttributes<HTMLAnchorElement>> {
  isNavLink?: boolean;
}

function LeaveFeedback({ isNavLink, ...props }: LeaveFeedbackProps) {
  const location = useLocation();
  const FEEDBACK_URL = `https://github.com/openedx/paragon/issues/new?title=%5Bparagon-openedx.netlify.app%5D%20Feedback%20(on%20${location.pathname})&amp;labels=docs&template=feedback_template.md`;
  const leaveFeedbackLinkTitle = 'Leave feedback';

  const handleLinkFeedbackClick = () => sendLeaveFeedbackClick();

  if (isNavLink) {
    return (
      <Nav.Link
        onClick={handleLinkFeedbackClick}
        href={FEEDBACK_URL}
        target="_blank"
        {...props}
      >
        {leaveFeedbackLinkTitle}
      </Nav.Link>
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
  isNavLink: PropTypes.bool,
};

LeaveFeedback.defaultProps = {
  isNavLink: false,
};

export default LeaveFeedback;
