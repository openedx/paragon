import React, { AnchorHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Button, Hyperlink, Nav } from '~paragon-react';
import { sendPageEditBtnClick } from '../../../segment-constants';

export interface PageEditBtnProps extends Partial<AnchorHTMLAttributes<HTMLAnchorElement>> {
  githubEditPath?: string,
  isNavLink?: boolean;
}

function PageEditBtn({ githubEditPath, isNavLink, ...props }: PageEditBtnProps) {
  const pageEditLinkTitle = 'Edit this page';

  const handlePageEditBtnClick = () => sendPageEditBtnClick();

  if (isNavLink) {
    return (
      <Nav.Link
        onClick={handlePageEditBtnClick}
        href={githubEditPath}
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
      destination={githubEditPath}
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
