import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { PAGINATION_VARIANTS } from './constants';
import getPaginationRange from './getPaginationRange';

const PaginationContext = createContext({});

function PaginationContextProvider({
  children, onPageSelect, invertColors, maxPagesDisplayed,
  buttonLabels, icons, variant,
  pageCount, currentPage: controlledCurrentPage, initialPage,
}) {
  const [currentPage, setCurrentPage] = useState(controlledCurrentPage || initialPage);
  const [pageButtonSelected, setPageButtonSelected] = useState(false);
  const previousButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const pageButtonRef = useRef([]);

  useEffect(() => {
    const currentPageRef = pageButtonRef[currentPage];

    if (currentPageRef && pageButtonSelected) {
      currentPageRef.focus();
      setPageButtonSelected(false);
    }
  }, [currentPage, pageButtonSelected]);

  const isUncontrolled = () => controlledCurrentPage === undefined;
  const isPageButtonActive = (page) => page === currentPage;
  const isOnFirstPage = () => (currentPage === 1 || pageCount === 0);
  const isOnLastPage = () => currentPage === pageCount || pageCount === 0;
  const isDefaultVariant = () => variant === PAGINATION_VARIANTS.default;

  if (!isUncontrolled() && controlledCurrentPage !== currentPage) {
    setCurrentPage(controlledCurrentPage);
  }

  const getPageButtonRefHandler = (pageNum) => (element) => { pageButtonRef.current[pageNum] = element; };

  const handlePageSelect = (page) => {
    if (page !== currentPage) {
      if (isUncontrolled()) {
        setCurrentPage(page);
      }
      setPageButtonSelected(true);
      onPageSelect(page);
    }
  };

  const handlePreviousButtonClick = () => {
    onPageSelect(currentPage - 1);
    if (currentPage === 2) {
      nextButtonRef.current.focus();
    }
    if (isUncontrolled()) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handleNextButtonClick = () => {
    onPageSelect(currentPage + 1);
    if (currentPage === pageCount - 1) {
      previousButtonRef.current.focus();
    }
    if (isUncontrolled()) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const getAriaLabelForPreviousButton = () => {
    let ariaLabel = `${buttonLabels.previous}`;

    if (!isOnFirstPage()) {
      ariaLabel += `, ${buttonLabels.page} ${currentPage - 1}`;
    }

    return ariaLabel;
  };

  const getAriaLabelForNextButton = () => {
    let ariaLabel = `${buttonLabels.next}`;

    if (!isOnLastPage()) {
      ariaLabel += `, ${buttonLabels.page} ${currentPage + 1}`;
    }

    return ariaLabel;
  };

  const getAriaLabelForPageButton = (page) => {
    let ariaLabel = `${buttonLabels.page} ${page}`;

    if (isPageButtonActive(page)) {
      ariaLabel += `, ${buttonLabels.currentPage}`;
    }

    return ariaLabel;
  };

  const getAriaLabelForPageOfCountButton = () => `${buttonLabels.page} ${currentPage}, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${pageCount}`;

  const getScreenReaderText = () => `${buttonLabels.page} ${currentPage}, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${pageCount}`;
  const getPageOfText = () => `${currentPage} ${buttonLabels.pageOfCount} ${pageCount}`;

  const getPageButtonVariant = (page) => {
    let buttonVariant = isPageButtonActive(page) ? 'primary' : 'tertiary';

    if (invertColors) {
      buttonVariant = `inverse-${buttonVariant}`;
    }

    return buttonVariant;
  };

  const getNextButtonIcon = () => icons.rightIcon;
  const getPrevButtonIcon = () => icons.leftIcon;

  const displayPages = getPaginationRange({
    currentIndex: currentPage,
    count: pageCount,
    length: maxPagesDisplayed,
    requireFirstAndLastPages: true,
  });

  const value = {
    invertColors,
    displayPages,
    pageCount,
    buttonLabels,
    previousButtonRef,
    nextButtonRef,
    pageButtonRef,
    getPrevButtonIcon,
    getNextButtonIcon,
    getAriaLabelForNextButton,
    getAriaLabelForPageButton,
    getAriaLabelForPreviousButton,
    getAriaLabelForPageOfCountButton,
    getPageButtonVariant,
    handlePreviousButtonClick,
    handleNextButtonClick,
    handlePageSelect,
    isOnFirstPage,
    isOnLastPage,
    isPageButtonActive,
    isDefaultVariant,
    getScreenReaderText,
    getPageOfText,
    getPageButtonRefHandler,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
}

PaginationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onPageSelect: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  buttonLabels: PropTypes.shape({
    previous: PropTypes.string,
    next: PropTypes.string,
    page: PropTypes.string,
    currentPage: PropTypes.string,
    pageOfCount: PropTypes.string,
  }).isRequired,
  currentPage: PropTypes.number,
  maxPagesDisplayed: PropTypes.number.isRequired,
  icons: PropTypes.shape({
    leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  }).isRequired,
  variant: PropTypes.oneOf(Object.values(PAGINATION_VARIANTS)).isRequired,
  invertColors: PropTypes.bool.isRequired,
  initialPage: PropTypes.number.isRequired,
};

PaginationContextProvider.defaultProps = {
  currentPage: undefined,
};

export { PaginationContextProvider };
export default PaginationContext;
