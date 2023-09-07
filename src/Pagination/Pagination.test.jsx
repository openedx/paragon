import React from 'react';
import {
  render, fireEvent, act, screen,
} from '@testing-library/react';
import { Context as ResponsiveContext } from 'react-responsive';

import breakpoints from '../utils/breakpoints';
import Pagination from '.';

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
    render(<Pagination {...props} />);
    const srText = screen.getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${baseProps.pageCount}`);
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
      const { rerender } = render(<Pagination {...props} />);
      expect(screen.getByText('Page 1, Current Page, of 5')).toBeInTheDocument();
      rerender(<Pagination {...props} currentPage={newPage} />);
      expect(screen.getByText('Page 2, Current Page, of 5')).toBeInTheDocument();
    });

    it('does not override state currentPage when props currentPage changes with existing value', () => {
      const currentPage = 2;
      const props = {
        ...baseProps,
        currentPage,
      };
      const { rerender } = render(<Pagination {...props} />);
      expect(screen.getByText(`Page ${currentPage}, Current Page, of 5`)).toBeInTheDocument();
      rerender(<Pagination {...props} currentPage={currentPage} />);
      expect(screen.getByText(`Page ${currentPage}, Current Page, of 5`)).toBeInTheDocument();
    });
  });

  describe('handles focus properly', () => {
    it('should change focus to next button if previous page is first page', () => {
      const props = {
        ...baseProps,
        currentPage: 2,
      };
      render(<Pagination {...props} />);
      const previousButton = screen.getByLabelText(/Previous/);
      const nextButton = screen.getByLabelText(/Next/);
      fireEvent.click(previousButton);
      expect(document.activeElement).toEqual(nextButton);
    });

    it('should change focus to previous button if next page is last page', () => {
      const props = {
        ...baseProps,
        currentPage: baseProps.pageCount - 1,
      };
      render(<Pagination {...props} />);
      const previousButton = screen.getByLabelText(/Previous/);
      const nextButton = screen.getByLabelText(/Next/);
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
      render(<Pagination {...props} />);
      expect(screen.getByLabelText(paginationLabel)).toBeInTheDocument();
    });

    describe('should use correct number of pages', () => {
      it('should show 5 buttons on desktop', () => {
        render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>,
        );

        const pageButtons = screen.getAllByLabelText(/^Page/);
        expect(pageButtons.length).toBe(5);
      });

      it('should show 1 button on mobile', () => {
        // Use extra small window size to display the mobile version of Pagination.
        render(
          <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>,
        );
        const pageButtons = screen.getAllByLabelText(/^Page/);
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
        render(
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>,
        );

        const previousButton = screen.getByLabelText(/Previous/);
        fireEvent.click(previousButton);
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should fire onPageSelect callback when selecting new page', () => {
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

        const pageButtons = screen.getAllByLabelText(/^Page/);
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
      render(<Pagination {...props} />);
      fireEvent.click(screen.getByLabelText(/Previous/));
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('next button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      render(<Pagination {...props} />);
      fireEvent.click(screen.getByLabelText(/Next/));
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
      render(
        <Proxy currentPage={baseProps.pageCount} width={breakpoints.large.minWidth} />,
      );
      expect(screen.getByText(buttonLabels.previous)).toBeInTheDocument();

      fireEvent.click(screen.getByText(buttonLabels.next));
      expect(screen.getByLabelText(`${buttonLabels.previous}, ${buttonLabels.page} 4`)).toBeInTheDocument();
    });

    it('uses passed in next button label', () => {
      const { rerender } = render(
        <Proxy currentPage={1} width={breakpoints.large.minWidth} />,
      );
      expect(screen.getByLabelText(`${buttonLabels.next}, ${buttonLabels.page} 2`)).toBeInTheDocument();

      rerender(
        <Proxy currentPage={baseProps.pageCount} width={breakpoints.large.minWidth} />,
      );
      expect(screen.getByLabelText(buttonLabels.next)).toBeInTheDocument();
    });

    it('uses passed in page button label', () => {
      const { rerender } = render(
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} />
        </ResponsiveContext.Provider>,
      );
      expect(screen.getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
      expect(screen.getByLabelText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}`)).toBeInTheDocument();

      rerender(
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} currentPage={2} />
        </ResponsiveContext.Provider>,
      );
      expect(screen.getByText(`${buttonLabels.page} 2, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
      expect(screen.getByLabelText(`${buttonLabels.page} 1`)).toBeInTheDocument();

      rerender(
        <Proxy currentPage={1} width={breakpoints.extraSmall.maxWidth} />,
      );
      expect(screen.getByText(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`)).toBeInTheDocument();
    });

    it('for the reduced variant shows dropdown button with the page count as label', async () => {
      render(<Pagination variant="reduced" {...props} />);

      const dropdownButton = screen.getByRole('button', { name: /1 of 5/i, attributes: { 'aria-haspopup': 'true' } });
      expect(dropdownButton.textContent).toContain(`${baseProps.state.pageIndex} of ${baseProps.pageCount}`);

      fireEvent.click(dropdownButton);

      await act(async () => {
        const dropdownChoices = screen.getAllByTestId('pagination-dropdown-item');
        expect(dropdownChoices.length).toBe(baseProps.pageCount);
      });
    });

    it('renders only previous and next buttons in minimal variant', () => {
      render(
        <Pagination
          variant="minimal"
          onPageSelect={(pageNumber) => pageNumber}
          pageCount={12}
          paginationLabel="Label"
        />,
      );
      const items = screen.getAllByRole('listitem');
      expect(items.length).toBe(2);
    });

    it('renders chevrons and buttons disabled when pageCount is 1 or 0 for all variants', () => {
      const variantTypes = ['default', 'secondary', 'reduced', 'minimal'];
      variantTypes.forEach((variantType) => {
        for (let i = 0; i < 3; i++) {
          props = {
            ...baseProps,
            variant: variantType,
            pageCount: i,
          };
          const { container } = render(<Pagination {...props} />);
          const disabledButtons = container.querySelectorAll('button[disabled]');
          expect(props.pageCount).toEqual(i);
          expect(disabledButtons.length).toEqual(i === 2 ? 1 : 2);
        }
      });
    });
  });
});
