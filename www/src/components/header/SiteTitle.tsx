import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// @ts-ignore
import Logo from '../../images/diamond.svg';

interface SiteTitleProps {
  title: string,
  isFullVersion: boolean,
}

export default function SiteTitle({ title, isFullVersion } : SiteTitleProps) {
  return (
    <Link
      to="/"
      style={{ textDecoration: 'none' }}
      className="d-block"
    >
      <div className="pgn-doc__header-title">
        <span
          className="pgn-doc__header-title-logo"
          role="img"
          aria-label={title}
        >
          <img src={Logo} alt={title} />
        </span>
        {isFullVersion && (
          <div className="ml-3 mr-3">
            <h1 className="pgn-doc__header-title-heading h4">{title}</h1>
            <p className="pgn-doc__header-title-description x-small">
              Technical Documentation
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFullVersion: PropTypes.bool.isRequired,
};
