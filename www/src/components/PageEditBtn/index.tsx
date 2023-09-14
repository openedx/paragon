import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Button, Hyperlink, Nav } from '~paragon-react';

export interface PageEditBtnProps extends Partial<AnchorHTMLAttributes<HTMLAnchorElement>> {
  githubEditPath: string,
  isNavLink?: boolean;
}

function PageEditBtn({ githubEditPath, isNavLink, ...props }: PageEditBtnProps) {
  const pageEditUrl = `https://github.com/openedx/paragon/edit/master/src${githubEditPath}`;
  const pageEditLinkTitle = 'Edit this page';

  const handlePageEditBtnClick = () => {
    global.analytics.track('openedx.paragon.docs.page_edit.clicked');
  };

  if (isNavLink) {
    return (
      <Nav.Link
        onClick={handlePageEditBtnClick}
        href={pageEditUrl}
        target="_blank"
        {...props}
      >
        {pageEditLinkTitle}
      </Nav.Link>
    );
  }

  return (
    <Button
      size="sm"
      as={Hyperlink}
      destination={pageEditUrl}
      variant="tertiary"
      onClick={handlePageEditBtnClick}
      target="_blank"
      {...props}
    >
      {pageEditLinkTitle}
    </Button>
  );
}

PageEditBtn.propTypes = {
  githubEditPath: PropTypes.string.isRequired,
  isNavLink: PropTypes.bool,
};

PageEditBtn.defaultProps = {
  isNavLink: false,
};

export default PageEditBtn;
