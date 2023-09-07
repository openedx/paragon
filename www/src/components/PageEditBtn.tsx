import React from 'react';
import { Button } from '~paragon-react';

function PageEditBtn({ ...props }) {
  const handlePageEditBtnClick = () => {
    global.analytics.track('openedx.paragon.docs.page_edit.clicked');
    // TODO: further development of the CTA will add functionality.
  };

  return (
    <Button
      size="sm"
      variant="tertiary"
      onClick={handlePageEditBtnClick}
      {...props}
    >
      Edit this page
    </Button>
  );
}

export default PageEditBtn;
