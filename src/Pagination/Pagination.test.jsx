import React from 'react';
import { Context as ResponsiveContext } from 'react-responsive';
import renderer from 'react-test-renderer';
import {
  render,
  act,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import breakpoints from '../utils/breakpoints';
import Pagination from '.';
import {
  PAGINATION_VARIANTS,
  ELLIPSIS,
  PAGINATION_BUTTON_LABEL_CURRENT_PAGE,
  PAGINATION_BUTTON_LABEL_NEXT,
  PAGINATION_BUTTON_LABEL_PREV,
  PAGINATION_BUTTON_LABEL_PAGE,
} from './constants';

const baseProps = {
  currentPage: 1,
  paginationLabel: 'pagination navigation',
  pageCount: 5,
  onPageSelect: () => {},
};

describe('<Pagination />', () => {
  it('renders default variant', () => {
    const tree = renderer.create(<Pagination {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with inverse colors', () => {
    const tree = renderer.create(<Pagination {...baseProps} invertColors />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders screen reader section', () => {
    const buttonLabels = {
      previous: 'Anterior',
      next: 'Siguiente',
      page: 'Página',
      currentPage: 'Página actual',
      pageOfCount: 'de',
    };
    const expectedSrText = `${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${baseProps.pageCount}`;
    const props = {
      ...baseProps,
      buttonLabels,
    };
    render(<Pagination {...props} />);
    const srText = screen.getByText(expectedSrText);
    expect(srText).toHaveClass('sr-only');
  });

  it('correctly handles initial page prop', () => {
    render(<Pagination {...baseProps} currentPage={undefined} initialPage={3} />);
    expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('3');
  });

  it('renders ellipsis if there are too many pages', () => {
    render(<Pagination {...baseProps} pageCount={20} />);
    expect(screen.getByText(ELLIPSIS)).toBeInTheDocument();
  });

  describe('handles controlled and uncontrolled behaviour properly', () => {
    it('does not internally change page on page click if currentPage is provided', () => {
      render(<Pagination {...baseProps} />);
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');

      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_NEXT));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');

      userEvent.click(screen.getByRole('button', { name: `${PAGINATION_BUTTON_LABEL_PAGE} 3` }));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');
    });

    it('controls page selection internally if currentPage is not provided', () => {
      render(<Pagination {...baseProps} currentPage={undefined} />);
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');

      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_NEXT));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('2');

      userEvent.click(screen.getByRole('button', { name: `${PAGINATION_BUTTON_LABEL_PAGE} 3` }));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('3');

      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_PREV));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('2');
    });

    it('does not chang page if you click "next" button while on last page', () => {
      render(<Pagination {...baseProps} currentPage={undefined} initialPage={5} />);
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('5');
      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_NEXT));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('5');
    });

    it('does not chang page if you click "previous" button while on first page', () => {
      render(<Pagination {...baseProps} currentPage={undefined} initialPage={1} />);
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');
      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_PREV));
      expect(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false })).toHaveTextContent('1');
    });
  });

  describe('handles focus properly', () => {
    it('should change focus to next button if previous page is first page', async () => {
      const props = {
        ...baseProps,
        currentPage: 2,
        buttonLabel: {
          previous: 'Previous',
          next: 'Next',
        },
      };
      render(<Pagination {...props} />);
      userEvent.click(screen.getByText(PAGINATION_BUTTON_LABEL_PREV));
      expect(screen.getByText(PAGINATION_BUTTON_LABEL_NEXT)).toHaveFocus();
    });

    it('should change focus to previous button if next page is last page', async () => {
      const props = {
        ...baseProps,
        currentPage: baseProps.pageCount - 1,
        buttonLabel: {
          previous: 'Previous',
          next: 'Next',
        },
      };
      render(<Pagination {...props} />);
      userEvent.click(screen.getByText(props.buttonLabel.next));
      expect(screen.getByText(props.buttonLabel.previous)).toHaveFocus();
    });
  });

  describe('renders required props', () => {
    it('should use correct paginationLabel', () => {
      const paginationLabel = 'pagination navigation';
      const props = {
        ...baseProps,
        paginationLabel,
      };
      render(<Pagination {...props} />);
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', paginationLabel);
    });

    describe('should use correct number of pages', () => {
      it('should show 5 buttons on desktop', () => {
        render((
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>
        ));

        const buttonsAriaLabel = new RegExp(`^${PAGINATION_BUTTON_LABEL_PAGE}`);
        expect(screen.queryAllByRole('button', { name: buttonsAriaLabel })).toHaveLength(5);
      });

      it('should show page of count text instead of pag buttons on mobile', () => {
        const buttonLabels = {
          previous: 'Anterior',
          next: 'Siguiente',
          page: 'Página',
          currentPage: 'Página actual',
          pageOfCount: 'de',
        };
        const pageCount = 5;
        const currentPage = 1;
        const props = {
          ...baseProps,
          buttonLabels,
          pageCount,
          currentPage,
        };

        // Use extra small window size to display the mobile version of Pagination.
        render((
          <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>
        ));

        const pageOfCountLabel = `${buttonLabels.page} ${currentPage}, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${pageCount}`;
        const buttonsAriaLabel = new RegExp(`^${PAGINATION_BUTTON_LABEL_PAGE}`);
        expect(screen.queryAllByRole('button', { name: buttonsAriaLabel })).toHaveLength(0);
        expect(screen.queryByLabelText(pageOfCountLabel)).toBeInTheDocument();
      });
    });

    describe('should fire callbacks properly', () => {
      it('should not fire onPageSelect when selecting current page', async () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>,
        );

        userEvent.click(screen.getByLabelText(PAGINATION_BUTTON_LABEL_CURRENT_PAGE, { exact: false }));
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should fire onPageSelect callback when selecting new page', async () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>,
        );

        userEvent.click(screen.getByLabelText(`${PAGINATION_BUTTON_LABEL_PAGE} 2`));
        expect(spy).toHaveBeenCalledTimes(1);

        userEvent.click(screen.getByLabelText(`${PAGINATION_BUTTON_LABEL_PAGE} 3`));
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('fires previous and next button click handlers', () => {
    it('previous button onClick', async () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
        currentPage: 3,
      };
      render(<Pagination {...props} />);
      const expectedPrevButtonAriaLabel = `${PAGINATION_BUTTON_LABEL_PREV}, ${PAGINATION_BUTTON_LABEL_PAGE} 2`;
      userEvent.click(screen.getByRole('button', { name: expectedPrevButtonAriaLabel }));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('next button onClick', async () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      render(<Pagination {...props} />);
      const expectedNextButtonAriaLabel = `${PAGINATION_BUTTON_LABEL_NEXT}, ${PAGINATION_BUTTON_LABEL_PAGE} 2`;
      userEvent.click(screen.getByRole('button', { name: expectedNextButtonAriaLabel }));
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('renders button label props', () => {
    const buttonLabels = {
      previous: 'Anterior',
      next: 'Siguiente',
      page: 'Página',
      currentPage: 'Página actual',
      pageOfCount: 'de',
    };
    const props = {
      ...baseProps,
      buttonLabels,
    };

    it('uses passed in previous button label', () => {
      const { rerender } = render(<Pagination {...props} />);
      // default label is used if we're on the first page
      expect(screen.getByRole('button', { name: buttonLabels.previous })).toBeInTheDocument();

      rerender(<Pagination {...props} currentPage={baseProps.pageCount} />);
      // label should change if we're not on the first page
      const expectedPrevButtonAriaLabel = `${buttonLabels.previous}, ${buttonLabels.page} 4`;
      expect(screen.getByRole('button', { name: expectedPrevButtonAriaLabel })).toBeInTheDocument();
    });

    it('uses passed in next button label', () => {
      const { rerender } = render(<Pagination {...props} />);
      // label should change if we're not on the last page
      const expectedNextButtonAriaLabel = `${buttonLabels.next}, ${buttonLabels.page} 2`;
      expect(screen.getByRole('button', { name: expectedNextButtonAriaLabel })).toBeInTheDocument();

      rerender(<Pagination {...props} currentPage={baseProps.pageCount} />);
      // default label is used if we're on the last page
      expect(screen.getByRole('button', { name: buttonLabels.next })).toBeInTheDocument();
    });

    it('uses passed in page button label', () => {
      const currentPageLabel = `${buttonLabels.page} 1, ${buttonLabels.currentPage}`;
      const pageLabel = `${buttonLabels.page} 1`;

      const { rerender } = render((
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} />
        </ResponsiveContext.Provider>
      ));
      expect(screen.getByText('1')).toHaveAttribute('aria-label', currentPageLabel);
      rerender((
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} currentPage={2} />
        </ResponsiveContext.Provider>
      ));
      expect(screen.getByText(`${buttonLabels.page} 2, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
      expect(screen.getByLabelText(`${buttonLabels.page} 1`)).toBeInTheDocument();
      expect(screen.getByText('1')).toHaveAttribute('aria-label', pageLabel);

      rerender((
        <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
          <Pagination {...props} />
        </ResponsiveContext.Provider>
      ));

      const pageOfCountLabel = `${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`;
      expect(screen.queryByLabelText(pageOfCountLabel)).toBeInTheDocument();
    });

    it('for the reduced variant shows dropdown button with the page count as label', async () => {
      render(<Pagination variant="reduced" {...props} />);

      const dropdownLabel = `${baseProps.currentPage} de ${baseProps.pageCount}`;

      await act(async () => {
        userEvent.click(screen.getByRole('button', { name: dropdownLabel }));
      });
      expect(screen.queryAllByRole('button', { name: /^\d+$/ }).length).toEqual(baseProps.pageCount);
    });

    it('renders only previous and next buttons in minimal variant', () => {
      render(<Pagination variant="minimal" {...props} />);
      expect(screen.queryAllByRole('button').length).toEqual(2);
    });

    test.each(Object.values(PAGINATION_VARIANTS))(
      'renders chevrons and buttons disabled when pageCount is 1 || 0 for %s variant',
      (variant) => {
        const { rerender } = render(<Pagination {...baseProps} variant={variant} pageCount={0} />);

        const nextButtonLabel = new RegExp(PAGINATION_BUTTON_LABEL_NEXT, 'i');
        const prevButtonLabel = new RegExp(PAGINATION_BUTTON_LABEL_PREV, 'i');

        expect(screen.getByRole('button', { name: nextButtonLabel })).toBeDisabled();
        expect(screen.getByRole('button', { name: prevButtonLabel })).toBeDisabled();

        rerender(<Pagination {...baseProps} variant={variant} pageCount={1} />);
        expect(screen.getByRole('button', { name: nextButtonLabel })).toBeDisabled();
        expect(screen.getByRole('button', { name: prevButtonLabel })).toBeDisabled();

        rerender(<Pagination {...baseProps} variant={variant} pageCount={2} />);
        expect(screen.getByRole('button', { name: nextButtonLabel })).not.toBeDisabled();
        expect(screen.getByRole('button', { name: prevButtonLabel })).toBeDisabled();
      },
    );
  });
});
