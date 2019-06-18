import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const menu = [
  {
    section: 'OVERVIEW',
    items: [
      { title: 'Getting Started', url: '/' },
      { title: 'Library Status', url: '/status' },
    ],
  },
  {
    section: 'FOUNDATIONS',
    items: [
      { title: 'Colors', url: 'foundations/colors' },
    ],
  },
  {
    section: 'COMPONENTS',
    items: [
      { title: 'Button', url: 'components/button' },
    ],
  },
];


const Navigation = ({ siteTitle }) => (
  <div className="pgn-doc__navigation">
    <div className="pgn-doc__navigation-slide">
      {menu.map(({ section, items }) => (
        <nav className="nav flex-column">
          <h3 className="pgn-doc__nav-section-header">
            {section}
          </h3>
          {items.map(({ title, url }) => (
            <Link
              activeClassName="active"
              className="nav-link"
              to={url}
            >
              {title}
            </Link>
          ))}
        </nav>
      ))}
   </div>
</div>
);


Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: '',
};

export default Navigation;
