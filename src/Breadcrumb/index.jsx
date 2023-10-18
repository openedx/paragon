import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BreadcrumbLink from './BreadcrumbLink';
import { ChevronRight } from '../../icons';
import Icon from '../Icon';

function Breadcrumb({
  links, activeLabel, spacer, clickHandler,
  variant, isMobile, ariaLabel, linkAs, ...props
}) {
  const linkCount = links.length;
  const displayLinks = isMobile ? [links[linkCount - 1]] : links;

  return (
    <nav
      aria-label={ariaLabel}
      className={classNames('pgn__breadcrumb', `pgn__breadcrumb-${variant}`)}
      {...props}
    >
      <ol className={classNames('list-inline', { 'is-mobile': isMobile })}>
        {displayLinks.map((link, i) => (
          <React.Fragment key={link.label}>
            <li className={classNames('list-inline-item')}>
              <BreadcrumbLink as={linkAs} clickHandler={clickHandler} linkProps={link} />
            </li>
            {(activeLabel || ((i + 1) < linkCount))
              && (
              <li className="list-inline-item" role="presentation">
                {spacer || <Icon src={ChevronRight} id={`spacer-${i}`} />}
              </li>
              )}
          </React.Fragment>
        ))}
        {!isMobile && activeLabel && <li className="list-inline-item active" key="active" aria-current="page">{activeLabel}</li>}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  /** An array of objects describing links to be rendered. The contents of an object depend on the value of `linkAs`
   * prop as these objects will get passed down as props to the underlying component defined by `linkAs` prop.
   */
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
  /** allows to add a label that is not a link to the end of the breadcrumb. */
  activeLabel: PropTypes.string,
  /** label of the element */
  ariaLabel: PropTypes.string,
  /** allows to add a custom element between the breadcrumb items.
   * Defaults to `>` rendered using the `Icon` component. */
  spacer: PropTypes.element,
  /** allows to add a custom function to be called `onClick` of a breadcrumb link.
   * The use case for this is for adding custom analytics to the component. */
  clickHandler: PropTypes.func,
  /** The `Breadcrumbs` style variant to use. */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** The `Breadcrumbs` mobile variant view. */
  isMobile: PropTypes.bool,
  /** Specifies the base element to use when rendering links, you should generally use either plain 'a' or
   * [react-router's Link](https://reactrouter.com/en/main/components/link).
   */
  linkAs: PropTypes.elementType,
};

Breadcrumb.defaultProps = {
  activeLabel: undefined,
  ariaLabel: 'breadcrumb',
  spacer: undefined,
  clickHandler: undefined,
  variant: 'light',
  isMobile: false,
  linkAs: 'a',
};

export default Breadcrumb;
