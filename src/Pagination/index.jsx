/* eslint-disable max-len */
import { between } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import MediaQuery from 'react-responsive';

import { Button } from '..';
import Icon from '../Icon';
import breakpoints from '../utils/breakpoints';
import newId from '../utils/newId';
import { ELLIPSIS } from './constants';
import getPaginationRange from './getPaginationRange';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.previousButtonRef = null;
    this.nextButtonRef = null;

    this.pageRefs = {};

    this.state = {
      currentPage: this.props.currentPage,
      pageButtonSelected: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentPage !== prevState.currentPage) {
      return { currentPage: nextProps.currentPage, ...prevState };
    }

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Update only when the props and currentPage state changes to avoid re-render
    // if only the pageButtonSelected state is changed.
    return nextProps !== this.props || nextState.currentPage !== this.state.currentPage;
  }

  componentDidUpdate() {
    const { currentPage, pageButtonSelected } = this.state;
    const currentPageRef = this.pageRefs[currentPage];

    if (currentPageRef && pageButtonSelected) {
      currentPageRef.focus();
      this.setPageButtonSelectedState(false);
    }
  }

  handlePageSelect(page) {
    if (page !== this.state.currentPage) {
      this.setState({
        currentPage: page,
        pageButtonSelected: true,
      });
      this.props.onPageSelect(page);
    }
  }

  handlePreviousNextButtonClick(page) {
    const { pageCount } = this.props;

    if (page === 1) {
      this.nextButtonRef.focus();
    } else if (page === pageCount) {
      this.previousButtonRef.focus();
    }
    this.setState({ currentPage: page });
    this.props.onPageSelect(page);
  }

  setPageButtonSelectedState(value) {
    this.setState({ pageButtonSelected: value });
  }

  renderEllipsisButton() {
    return (
      <li
        className={classNames(['page-item', 'disabled'])}
        key={newId('pagination-ellipsis-')}
      >
        <span
          className={classNames([
            'btn',
            'page-link',
            'ml-0',
            'border-0',
          ])}
        >
          ...
        </span>
      </li>
    );
  }

  renderPageButton(page) {
    const { buttonLabels } = this.props;
    const active = page === this.state.currentPage || null;

    let ariaLabel = `${buttonLabels.page} ${page}`;
    if (active) {
      ariaLabel += `, ${buttonLabels.currentPage}`;
    }

    return (
      <li
        className={classNames([
          'page-item',
          {
            active,
          },
        ])}
        key={page}
      >
        <Button.Deprecated
          className="page-link"
          aria-label={ariaLabel}
          inputRef={(element) => { this.pageRefs[page] = element; }}
          onClick={() => { this.handlePageSelect(page); }}
        >
          {page.toString()}
        </Button.Deprecated>
      </li>
    );
  }

  renderPageOfCountButton() {
    const { currentPage } = this.state;
    const { pageCount, buttonLabels } = this.props;

    const ariaLabel = `${buttonLabels.page} ${currentPage}, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${pageCount}`;

    const label = (
      <span>
        {`${currentPage} `}
        {buttonLabels.pageOfCount}
        {` ${pageCount}`}
      </span>
    );

    return (
      <li
        className={classNames(['page-item', 'disabled'])}
        key={currentPage}
      >
        <span
          className={classNames([
            'btn',
            'page-link',
            'mx-2',
            'border-0',
          ])}
          aria-label={ariaLabel}
        >
          {label}
        </span>
      </li>
    );
  }

  renderPreviousButton() {
    const { buttonLabels, icons } = this.props;
    const { currentPage } = this.state;
    const isFirstPage = currentPage === 1;
    const previousPage = isFirstPage ? null : currentPage - 1;

    let ariaLabel = `${buttonLabels.previous}`;
    if (previousPage) {
      ariaLabel += `, ${buttonLabels.page} ${previousPage}`;
    }

    return (
      <li
        className={classNames(
          'page-item',
          {
            disabled: isFirstPage,
          },
        )}
      >
        <Button.Deprecated
          className="previous page-link"
          aria-label={ariaLabel}
          tabIndex={isFirstPage ? '-1' : undefined}
          onClick={() => { this.handlePreviousNextButtonClick(previousPage); }}
          inputRef={(element) => { this.previousButtonRef = element; }}
          disabled={isFirstPage}
        >
          <div>
            {icons.leftIcon}
            {buttonLabels.previous}
          </div>
        </Button.Deprecated>
      </li>
    );
  }

  renderNextButton() {
    const { buttonLabels, pageCount, icons } = this.props;
    const { currentPage } = this.state;
    const isLastPage = currentPage === pageCount;
    const nextPage = isLastPage ? null : currentPage + 1;

    let ariaLabel = `${buttonLabels.next}`;
    if (nextPage) {
      ariaLabel += `, ${buttonLabels.page} ${nextPage}`;
    }

    return (
      <li
        className={classNames(
          'page-item',
          {
            disabled: isLastPage,
          },
        )}
      >
        <Button.Deprecated
          className="next page-link"
          aria-label={ariaLabel}
          tabIndex={isLastPage ? '-1' : undefined}
          onClick={() => { this.handlePreviousNextButtonClick(nextPage); }}
          inputRef={(element) => { this.nextButtonRef = element; }}
          disabled={isLastPage}
        >
          <div>
            {buttonLabels.next}
            {icons.rightIcon}
          </div>
        </Button.Deprecated>
      </li>
    );
  }

  renderScreenReaderSection() {
    const { currentPage } = this.state;
    const { buttonLabels, pageCount } = this.props;

    const description = `${buttonLabels.page} ${currentPage}, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${pageCount}`;

    return (
      <div
        className="sr-only"
        aria-live="polite"
        aria-relevant="text"
        aria-atomic
      >
        {description}
      </div>
    );
  }

  renderPageButtons() {
    const { currentPage } = this.state;
    const { pageCount, maxPagesDisplayed } = this.props;

    const pages = getPaginationRange({
      currentIndex: currentPage,
      count: pageCount,
      length: maxPagesDisplayed,
      requireFirstAndLastPages: true,
    });

    return pages.map((pageIndex) => {
      if (pageIndex === ELLIPSIS) {
        return this.renderEllipsisButton();
      }
      return this.renderPageButton(pageIndex + 1);
    });
  }

  render() {
    return (
      <nav
        aria-label={this.props.paginationLabel}
        className={this.props.className}
      >
        {this.renderScreenReaderSection()}
        <ul className="pagination">
          {this.renderPreviousButton()}
          <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth}>
            {this.renderPageOfCountButton()}
          </MediaQuery>
          <MediaQuery minWidth={breakpoints.small.minWidth}>
            {this.renderPageButtons()}
          </MediaQuery>
          {this.renderNextButton()}
        </ul>
      </nav>
    );
  }
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
  maxPagesDisplayed: between({ gt: 4 }),
  /**
   * Specifies icons used to indicate previous and next page. Can be an element,
   * string, symbol, etc. Default is chevrons rendered using fa-css.
   */
  icons: PropTypes.shape({
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
  }),
};

Pagination.defaultProps = {
  icons: {
    leftIcon: <Icon className="fa fa-chevron-left mr-2" />,
    rightIcon: <Icon className="fa fa-chevron-right ml-2" />,
  },
  buttonLabels: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of',
  },
  className: undefined,
  currentPage: 1,
  maxPagesDisplayed: 7,
};

export default Pagination;
