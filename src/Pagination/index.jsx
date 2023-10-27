import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ReducedPagination from './ReducedPagination';
import MinimalPagination from './MinimalPagination';
import DefaultPagination from './DefaultPagination';
import { PaginationContextProvider } from './PaginationContext';
import { PAGINATION_VARIANTS } from './constants';
import { ScreenReaderText } from './subcomponents';

import { greaterThan } from '../utils/propTypes';
import { ChevronLeft, ChevronRight } from '../../icons';

function Pagination(props) {
  const {
    invertColors,
    variant,
    size,
    paginationLabel,
    className,
  } = props;

  const renderPaginationComponent = () => {
    if (variant === PAGINATION_VARIANTS.reduced) {
      return <ReducedPagination />;
    }

    if (variant === PAGINATION_VARIANTS.minimal) {
      return <MinimalPagination />;
    }

    return <DefaultPagination />;
  };

  return (
    <PaginationContextProvider {...props}>
      <nav
        aria-label={paginationLabel}
        className={classNames(className, {
          [`pagination-${variant}`]: variant,
          'pagination-inverse': invertColors,
          'pagination-small': size !== PAGINATION_VARIANTS.default,
        })}
      >
        <ScreenReaderText />
        {renderPaginationComponent()}
      </nav>
    </PaginationContextProvider>
  );
}

Pagination.propTypes = {
  /**
   * Specifies a callback function that is executed when the
   * user selects a page button or the `Previous`/`Next` buttons. For example:
   *
   * ```jsx
   *  <Pagination onPageSelect={(pageNumber) => { console.log(pageNumber); } />
   * ```
   */
  onPageSelect: PropTypes.func.isRequired,
  /** Specifies the total number of pages in the `Pagination` component. */
  pageCount: PropTypes.number.isRequired,
  /** Specifies the `aria-label` for the `<nav>` element that wraps the pagination button list. */
  paginationLabel: PropTypes.string.isRequired,
  /**
   * Specifies the labels to use for the `Previous`/`Next`
   * buttons as well as the various parts of `aria-label`
   * on the page buttons for accessibility. All button labels
   * accept both string or elements. The button label options are as follows:
   *
   * `previous`: Text for the `Previous` button;
   *
   * `next`: Text for the `Next` button;
   *
   * `page`: Text in the `aria-label` on page buttons to describe the button (e.g., "**Page** 1");
   *
   * `currentPage`: Text to depict the selected page in the `aria-label`
   * on page buttons (e.g., "Page 1, **Current Page**");
   *
   * `pageOfCount`: Text that separates the current page and total page count
   * for the mobile UI (e.g., "Page 1 **of** 20").
   *
   * The default is:
   * ```javascript
   * {
   *   previous: 'Previous',
   *   next: 'Next',
   *   page: 'Page',
   *   currentPage: 'Current Page',
   *   pageOfCount: 'of',
   * }
   * ```
   */
  buttonLabels: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    page: PropTypes.string,
    currentPage: PropTypes.string,
    pageOfCount: PropTypes.string,
  }),
  /** Specifies any class name(s) for the `Pagination` component. The default is an empty string. */
  className: PropTypes.string,
  /** specifies the page that the `Pagination` component will automatically select. The default is `1`. */
  currentPage: PropTypes.number,
  /**
   * Specifies the number of page buttons to display in between the `Previous`
   * and `Next` buttons. This number also includes any ellipses in the total count.
   * Also, to ensure that at least one clickable page button is shown when both ellipses
   * are displayed, this value must be greater than `4`. The default is `7`.
   */
  maxPagesDisplayed: greaterThan(4),
  /**
   * Specifies icons used to indicate previous and next page. Can be an element,
   * string, symbol, etc. Default is chevrons rendered using fa-css.
   */
  icons: PropTypes.shape({
    leftIcon: PropTypes.elementType,
    rightIcon: PropTypes.elementType,
  }),
  variant: PropTypes.oneOf(['default', 'secondary', 'reduced', 'minimal']),
  invertColors: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  initialPage: PropTypes.number,
};

Pagination.defaultProps = {
  icons: {
    leftIcon: ChevronLeft,
    rightIcon: ChevronRight,
  },
  buttonLabels: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of',
  },
  className: undefined,
  initialPage: 1,
  currentPage: undefined,
  maxPagesDisplayed: 7,
  variant: 'default',
  invertColors: false,
  size: 'default',
};

export default Pagination;
export * from './constants';
