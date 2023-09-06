import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';
import '@testing-library/jest-dom/extend-expect';

import breakpoints from '../utils/breakpoints';
import Pagination from './index';

const baseProps = {
  state: { pageIndex: 1 },
  paginationLabel: 'pagination navigation',
  pageCount: 5,
  onPageSelect: () => {},
};

describe('<Pagination />', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
    };
    const { container } = render(<Pagination {...props} />);
    expect(container).toBeInTheDocument();
  });

  it('renders screen reader section', () => {
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
    const { getByText } = render(<Pagination {...props} />);
    const srText = getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${baseProps.pageCount}`);
    expect(srText).toBeInTheDocument();
  });

  describe('handles currentPage props properly', () => {
    it('overrides state currentPage when props currentPage changes', () => {
      const initialPage = 1;
      const newPage = 2;
      const props = {
        ...baseProps,
        currentPage: initialPage,
      };
      const { rerender, getByText } = render(<Pagination {...props} />);
      expect(getByText('Page 1, Current Page, of 5')).toBeInTheDocument();
      rerender(<Pagination {...props} currentPage={newPage} />);
      expect(getByText('Page 2, Current Page, of 5')).toBeInTheDocument();
    });

    it('does not override state currentPage when props currentPage changes with existing value', () => {
      const currentPage = 2;
      const props = {
        ...baseProps,
        currentPage,
      };
      const { rerender, getByText } = render(<Pagination {...props} />);
      expect(getByText(`Page ${currentPage}, Current Page, of 5`)).toBeInTheDocument();
      rerender(<Pagination {...props} currentPage={currentPage} />);
      expect(getByText(`Page ${currentPage}, Current Page, of 5`)).toBeInTheDocument();
    });
  });

  describe('handles focus properly', () => {
    it('should change focus to next button if previous page is first page', () => {
      const props = {
        ...baseProps,
        currentPage: 2,
      };
      const { getByLabelText } = render(<Pagination {...props} />);
      const previousButton = getByLabelText(/Previous/);
      const nextButton = getByLabelText(/Next/);
      fireEvent.click(previousButton);
      expect(document.activeElement).toEqual(nextButton);
    });

    it('should change focus to previous button if next page is last page', () => {
      const props = {
        ...baseProps,
        currentPage: baseProps.pageCount - 1,
      };
      const { getByLabelText } = render(<Pagination {...props} />);
      const previousButton = getByLabelText(/Previous/);
      const nextButton = getByLabelText(/Next/);
      fireEvent.click(nextButton);
      expect(document.activeElement).toEqual(previousButton);
    });
  });

  describe('renders required props', () => {
    it('should use correct paginationLabel', () => {
      const paginationLabel = 'pagination navigation';
      const props = {
        ...baseProps,
        paginationLabel,
      };
      const { getByLabelText } = render(<Pagination {...props} />);
      expect(getByLabelText(paginationLabel)).toBeInTheDocument();
    });

    describe('should use correct number of pages', () => {
      it('should show 5 buttons on desktop', () => {
        const { getAllByLabelText } = render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>,
        );

        const pageButtons = getAllByLabelText(/^Page/);
        expect(pageButtons.length).toBe(5);
      });

      it('should show 1 button on mobile', () => {
        // Use extra small window size to display the mobile version of Pagination.
        const { getAllByLabelText } = render(
          <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>,
        );
        const pageButtons = getAllByLabelText(/^Page/);
        expect(pageButtons.length).toBe(1);
      });
    });

    describe('should fire callbacks properly', () => {
      it('should not fire onPageSelect when selecting current page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const { getByLabelText } = render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>,
        );

        const previousButton = getByLabelText(/Previous/);
        fireEvent.click(previousButton);
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should fire onPageSelect callback when selecting new page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const { getAllByLabelText } = render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>,
        );

        const pageButtons = getAllByLabelText(/^Page/);
        fireEvent.click(pageButtons[1]);
        expect(spy).toHaveBeenCalledTimes(1);

        fireEvent.click(pageButtons[2]);
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('fires previous and next button click handlers', () => {
    it('previous button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        currentPage: 2,
        onPageSelect: spy,
      };
      const { getByLabelText } = render(<Pagination {...props} />);
      fireEvent.click(getByLabelText(/Previous/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('next button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      const { getByLabelText } = render(<Pagination {...props} />);
      fireEvent.click(getByLabelText(/Next/));
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

    let props = {
      ...baseProps,
      buttonLabels,
    };

    /**
     * made a proxy component because setProps can only be used with root component and
     * Responsive Context Provider is needed to mock screen
     */
    // eslint-disable-next-line react/prop-types
    function Proxy({ currentPage, width }) {
      return (
        <ResponsiveContext.Provider value={{ width }}>
          <Pagination {...props} currentPage={currentPage} />
        </ResponsiveContext.Provider>
      );
    }

    it('uses passed in previous button label', () => {
      const { getByText, getByLabelText } = render(
        <Proxy currentPage={baseProps.pageCount} width={breakpoints.large.minWidth} />,
      );
      expect(getByText(buttonLabels.previous)).toBeInTheDocument();

      fireEvent.click(getByText(buttonLabels.next));
      expect(getByLabelText(`${buttonLabels.previous}, ${buttonLabels.page} 4`)).toBeInTheDocument();
    });

    it('uses passed in next button label', () => {
      const { rerender, getByLabelText } = render(
        <Proxy currentPage={1} width={breakpoints.large.minWidth} />,
      );
      expect(getByLabelText(`${buttonLabels.next}, ${buttonLabels.page} 2`)).toBeInTheDocument();

      rerender(
        <Proxy currentPage={baseProps.pageCount} width={breakpoints.large.minWidth} />,
      );
      expect(getByLabelText(buttonLabels.next)).toBeInTheDocument();
    });

    it('uses passed in page button label', () => {
      const { rerender, getByText, getByLabelText } = render(
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} />
        </ResponsiveContext.Provider>,
      );
      expect(getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
      expect(getByLabelText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}`)).toBeInTheDocument();

      rerender(
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} currentPage={2} />
        </ResponsiveContext.Provider>,
      );
      expect(getByText(`${buttonLabels.page} 2, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
      expect(getByLabelText(`${buttonLabels.page} 1`)).toBeInTheDocument();

      rerender(
        <Proxy currentPage={1} width={breakpoints.extraSmall.maxWidth} />,
      );
      expect(getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
    });

    it('for the reduced variant shows dropdown button with the page count as label', async () => {
      const { getByRole, getAllByTestId } = render(<Pagination variant="reduced" {...props} />);

      const dropdownButton = getByRole('button', { name: /1 of 5/i, attributes: { 'aria-haspopup': 'true' } });
      expect(dropdownButton.textContent).toContain(`${baseProps.state.pageIndex} of ${baseProps.pageCount}`);

      fireEvent.click(dropdownButton);

      await act(async () => {
        const dropdownChoices = getAllByTestId('pagination-dropdown-item');
        expect(dropdownChoices.length).toBe(baseProps.pageCount);
      });
    });

    it('renders only previous and next buttons in minimal variant', () => {
      const { getAllByRole } = render(
        <Pagination
          variant="minimal"
          onPageSelect={(pageNumber) => pageNumber}
          pageCount={12}
          paginationLabel="Label"
        />,
      );
      const items = getAllByRole('listitem');
      expect(items.length).toBe(2);
    });

    it('renders chevrons and buttons disabled when pageCount is 1 or 0 for all variants', () => {
      const screen = render(<Pagination {...props} />);
      const variantTypes = ['default', 'secondary', 'reduced', 'minimal'];
      variantTypes.forEach((variantType) => {
        for (let i = 0; i < 3; i++) {
          props = {
            ...baseProps,
            variant: variantType,
            pageCount: i,
          };
          screen.rerender(<Pagination {...props} />);
          const disabledButtons = screen.container.querySelectorAll('button[disabled]');
          expect(props.pageCount).toEqual(i);
          expect(disabledButtons.length).toEqual(i === 2 ? 1 : 2);
        }
      });
    });
  });
});
