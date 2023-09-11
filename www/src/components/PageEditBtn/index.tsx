import React from 'react';
import PropTypes from 'prop-types';
import { Button, Hyperlink } from '~paragon-react';
import { PATH_TO_EDIT_PAGE, componentsNamesMap } from './constants';

function PageEditBtn({ componentTitle, ...props }) {
  const pageEditUrl = componentsNamesMap[componentTitle]
    ? `${PATH_TO_EDIT_PAGE}/${componentsNamesMap[componentTitle]}`
    : `${PATH_TO_EDIT_PAGE}/${componentTitle}/README.md`;

  const handlePageEditBtnClick = () => {
    global.analytics.track('openedx.paragon.docs.page_edit.clicked');
  };

  return (
    <Button
      size="sm"
      as={Hyperlink}
      destination={pageEditUrl}
      variant="tertiary"
      onClick={handlePageEditBtnClick}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      Edit this page
    </Button>
  );
}

PageEditBtn.propTypes = {
  componentTitle: PropTypes.string.isRequired,
};

export default PageEditBtn;
