/* eslint-disable max-len */
import { between } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import { ExtraSmall, LargerThanExtraSmall } from '../Responsive';
import getTextFromElement from '../utils/getTextFromElement';
import Icon from '../Icon';
import newId from '../utils/newId';

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

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currentPage !== this.props.currentPage ||
      nextProps.currentPage !== this.state.currentPage
    ) {
      this.setState({
        currentPage: nextProps.currentPage,
      });
    }
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

  setPageButtonSelectedState(value) {
    this.setState({ pageButtonSelected: value });
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

    const ariaLabel = getTextFromElement((
      <div>
        {buttonLabels.page}
        {` ${page}`}
        {active &&
          <span>
            {', '}
            {buttonLabels.currentPage}
          </span>
        }
      </div>
    ));

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
        <Button
          className="page-link"
          aria-label={ariaLabel}
          inputRef={(element) => { this.pageRefs[page] = element; }}
          onClick={() => { this.handlePageSelect(page); }}
        >
          {page.toString()}
        </Button>
      </li>
    );
  }

  renderPageOfCountButton() {
    const { currentPage } = this.state;
    const { pageCount, buttonLabels } = this.props;

    const ariaLabel = getTextFromElement((
      <div>
        {buttonLabels.page}
        {` ${currentPage}, `}
        {buttonLabels.currentPage}
        {', '}
        {buttonLabels.pageOfCount}
        {` ${pageCount}`}
      </div>
    ));

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

    const ariaLabel = getTextFromElement((
      <div>
        {buttonLabels.previous}
        {previousPage &&
          <span>
            {', '}
            {buttonLabels.page}
            {` ${previousPage}`}
          </span>
        }
      </div>
    ));

    return (
      <li
        className={classNames(
          'page-item',
          {
            disabled: isFirstPage,
          },
        )}
      >
        <Button
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
        </Button>
      </li>
    );
  }

  renderNextButton() {
    const { buttonLabels, pageCount, icons } = this.props;
    const { currentPage } = this.state;
    const isLastPage = currentPage === pageCount;
    const nextPage = isLastPage ? null : currentPage + 1;

    const ariaLabel = getTextFromElement((
      <div>
        {buttonLabels.next}
        {nextPage &&
          <span>
            {', '}
            {buttonLabels.page}
            {` ${nextPage}`}
          </span>
        }
      </div>
    ));

    return (
      <li
        className={classNames(
          'page-item',
          {
            disabled: isLastPage,
          },
        )}
      >
        <Button
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
        </Button>
      </li>
    );
  }

  renderScreenReaderSection() {
    const { currentPage } = this.state;
    const { buttonLabels, pageCount } = this.props;
    return (
      <div
        className="sr-only"
        aria-live="polite"
        aria-relevant="text"
        aria-atomic
      >
        {
          getTextFromElement((
            <div>
              {buttonLabels.page}
              {` ${currentPage}, `}
              {buttonLabels.currentPage}
              {', '}
              {buttonLabels.pageOfCount}
              {` ${pageCount}`}
            </div>
          ))
        }
      </div>
    );
  }

  /*
   * Uses recursion to generate an array of the buttons to display (i.e., page/ellipsis
   * buttons) given the currently selected page, the max number of buttons to display, and
   * the total number of pages.
   */
  renderPageButtons(range) {
    const { currentPage } = this.state;
    const { pageCount, maxPagesDisplayed } = this.props;

    const pageRange = range || [...Array(pageCount).keys()].map(page => page + 1);
    const currentIndex = pageRange.indexOf(currentPage);
    const middleIndex = parseInt(pageRange.length / 2, 10) - 1;
    const lastIndex = pageRange.length - 1;
    const hasLeftEllipsis = pageRange[1] - pageRange[0] > 1;
    const hasRightEllipsis = pageRange[lastIndex] - pageRange[lastIndex - 1] > 1;

    let ellipsisCount = 0;

    ellipsisCount += hasLeftEllipsis;
    ellipsisCount += hasRightEllipsis;

    if (pageRange.length <= maxPagesDisplayed - ellipsisCount) {
      return pageRange.map((page) => {
        const pageButtons = [this.renderPageButton(page)];

        if (page === 1 && hasLeftEllipsis) {
          pageButtons.push(this.renderEllipsisButton());
        } else if (page === pageCount && hasRightEllipsis) {
          pageButtons.unshift(this.renderEllipsisButton());
        }

        return pageButtons;
      });
    }

    if (currentIndex > middleIndex) {
      const first = pageRange.shift();
      pageRange.shift();
      pageRange.unshift(first);
    } else {
      const last = pageRange.pop();
      pageRange.pop();
      pageRange.push(last);
    }

    return this.renderPageButtons(pageRange);
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
          <ExtraSmall>
            {this.renderPageOfCountButton()}
          </ExtraSmall>
          <LargerThanExtraSmall>
            {this.renderPageButtons()}
          </LargerThanExtraSmall>
          {this.renderNextButton()}
        </ul>
      </nav>
    );
  }
}

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

Pagination.propTypes = {
  /** specifies a callback function that is executed when the user selects a page button or the `Previous`/`Next` buttons. For example:

```jsx
<Pagination onPageSelect={(pageNumber) => { console.log(pageNumber); } />
``` */
  onPageSelect: PropTypes.func.isRequired,
  /** specifies the total number of pages in the `Pagination` component. */
  pageCount: PropTypes.number.isRequired,
  /** specifies the `aria-label` for the `<nav>` element that wraps the pagination button list. */
  paginationLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** specifies the labels to use for the `Previous`/`Next` buttons as well as the various parts of `aria-label` on the page buttons for accessibility. All button labels accept both string or elements. The button label options are as follows:

* `previous`: Text for the `Previous` button;
* `next`: Text for the `Next` button;
* `page`: Text in the `aria-label` on page buttons to describe the button (e.g., "**Page** 1");
* `currentPage`: Text to depict the selected page in the `aria-label`
on page buttons (e.g., "Page 1, **Current Page**");
* `pageOfCount`: Text that separates the current page and total page count
for the mobile UI (e.g., "Page 1 **of** 20").

The default is:
```javascript
{
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of',
}
``` */
  buttonLabels: PropTypes.shape({
    previous: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    page: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    pageOfCount: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  /** specifies any class name(s) for the `Pagination` component. The default is an empty string. */
  className: PropTypes.string,
  /** specifies the page that the `Pagination` component will automatically select. The default is `1`. */
  currentPage: PropTypes.number,
  /** specifies the number of page buttons to display in between the `Previous` and `Next` buttons. This number also includes any ellipses in the total count. Also, to ensure that at least one clickable page button is shown when both ellipses are displayed, this value must be greater than `4`.  The default is `7`. */
  maxPagesDisplayed: between({ gt: 4 }),
  /** specifies icons used to signal previous and next page. can be an element, string, symbol, etc. default is chevrons rendered using fa-css. */
  icons: PropTypes.shape({
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
  }),
};

export default Pagination;
