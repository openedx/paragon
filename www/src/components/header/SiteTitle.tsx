import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';
// @ts-ignore
import Logo from '../../images/diamond.svg';

interface SiteTitleProps {
  title: string,
  isFullVersion: boolean,
  className?: string,
}

export default function SiteTitle({ title, isFullVersion, className } : SiteTitleProps) {
  return (
    <Link
      to="/"
      className={classNames('d-block text-decoration-none', className)}
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
          </div>
        )}
      </div>
    </Link>
  );
}

SiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFullVersion: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

SiteTitle.defaultProps = {
  className: undefined,
};
