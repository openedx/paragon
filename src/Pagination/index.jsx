import { between } from 'airbnb-prop-types';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button';
import { ExtraSmall, LargerThanExtraSmall } from '../Responsive';
import getTextFromElement from '../utils/getTextFromElement';
import Icon from '../Icon';
import newId from '../utils/newId';

import styles from './Pagination.scss';

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
        className={classNames([styles['page-item'], styles.disabled])}
        key={newId('pagination-ellipsis-')}
      >
        <span
          className={classNames([
            styles.btn,
            styles['page-link'],
            styles['ml-0'],
            styles['border-0'],
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
          styles['page-item'],
          {
            [styles.active]: active,
          },
        ])}
        key={page}
      >
        <Button
          className={[styles['page-link']]}
          aria-label={ariaLabel}
          label={page.toString()}
          inputRef={(element) => { this.pageRefs[page] = element; }}
          onClick={() => { this.handlePageSelect(page); }}
        />
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
        className={classNames([styles['page-item'], styles.disabled])}
        key={currentPage}
      >
        <span
          className={classNames([
            styles.btn,
            styles['page-link'],
            styles['mx-2'],
            styles['border-0'],
          ])}
          aria-label={ariaLabel}
        >
          {label}
        </span>
      </li>
    );
  }

  renderPreviousButton() {
    const { buttonLabels } = this.props;
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
            [styles.disabled]: isFirstPage,
          },
        )}
      >
        <Button
          className={['previous', styles['page-link']]}
          aria-label={ariaLabel}
          label={
            <div>
              <Icon
                id={newId('pagination-')}
                className={[
                  FontAwesomeStyles.fa,
                  FontAwesomeStyles['fa-chevron-left'],
                  styles['mr-2'],
                ]}
              />
              {buttonLabels.previous}
            </div>
          }
          tabIndex={isFirstPage ? '-1' : undefined}
          onClick={() => { this.handlePreviousNextButtonClick(previousPage); }}
          inputRef={(element) => { this.previousButtonRef = element; }}
          disabled={isFirstPage}
        />
      </li>
    );
  }

  renderNextButton() {
    const { buttonLabels, pageCount } = this.props;
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
          styles['page-item'],
          {
            disabled: isLastPage,
          },
        )}
      >
        <Button
          className={['next', styles['page-link']]}
          aria-label={ariaLabel}
          label={
            <div>
              {buttonLabels.next}
              <Icon
                id={newId('pagination-')}
                className={[
                  FontAwesomeStyles.fa,
                  FontAwesomeStyles['fa-chevron-right'],
                  styles['ml-2'],
                ]}
              />
            </div>
          }
          tabIndex={isLastPage ? '-1' : undefined}
          onClick={() => { this.handlePreviousNextButtonClick(nextPage); }}
          inputRef={(element) => { this.nextButtonRef = element; }}
          disabled={isLastPage}
        />
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
        <ul className={styles.pagination}>
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
  buttonLabels: {
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
    currentPage: 'Current Page',
    pageOfCount: 'of',
  },
  className: '',
  currentPage: 1,
  maxPagesDisplayed: 7,
};

Pagination.propTypes = {
  onPageSelect: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  paginationLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  buttonLabels: PropTypes.shape({
    previous: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    page: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    pageOfCount: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  className: PropTypes.string,
  currentPage: PropTypes.number,
  maxPagesDisplayed: between({ gt: 4 }),
};

export default Pagination;
