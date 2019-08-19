import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SiteHeader from '@edx/frontend-component-site-header';

const Header = ({ siteTitle }) => (
  <SiteHeader
    skipNavId="content"
    logo={null}
    logoDestination="https://edx.org"
    logoAltText="edX"
    mainMenu={[
      {
        type: 'menu',
        href: '#',
        content: 'Courses',
        submenuContent: (
          <div>
            <a href="#link">link 1 </a>
            <a href="#link2">link 2 </a>
          </div>
        ),
      },
      {
        type: 'item',
        href: '#',
        content: 'Programs',
      },
      {
        type: 'item',
        href: '#',
        content: 'Schools & Partners',
      },
    ]}
    loggedIn={true}
    username={'abutterw'}
    avatar={null}
    userMenu={[
      {
        type: 'item',
        href: '#',
        content: 'Dashboard',
      },
      {
        type: 'item',
        href: '#',
        content: 'Profile',
      },
      {
        type: 'item',
        href: '#',
        content: 'Account Settings',
      },
      {
        type: 'item',
        href: '#',
        content: 'Help',
      },
      {
        type: 'item',
        href: '#',
        content: 'Logout',
      },
    ]}
    loggedOutItems={[
      { type: 'item', href: '#', content: 'Login' },
      { type: 'item', href: '#', content: 'Sign Up' },
    ]}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
