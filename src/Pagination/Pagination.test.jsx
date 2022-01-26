import React from 'react';
import { mount } from 'enzyme';
import { Context as ResponsiveContext } from 'react-responsive';
import breakpoints from '../utils/breakpoints';
import Pagination from './index';

const baseProps = {
  paginationLabel: 'pagination navigation',
  pageCount: 5,
  onPageSelect: () => {},
};

describe('<Pagination />', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
    };
    const wrapper = mount(<Pagination {...props} />);
    expect(wrapper.exists()).toEqual(true);
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
    const wrapper = mount(<Pagination {...props} />);
    expect(
      wrapper.findWhere(node => node.hasClass('sr-only')).text(),
    ).toEqual(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} ${baseProps.pageCount}`);
  });

  describe('handles currentPage props properly', () => {
    it('overrides state currentPage when props currentPage changes', () => {
      const initialPage = 1;
      const newPage = 2;
      const props = {
        ...baseProps,
        currentPage: initialPage,
      };
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.state('currentPage')).toEqual(initialPage);
      wrapper.setProps({
        currentPage: newPage,
      });
      wrapper.update();
      expect(wrapper.state('currentPage')).toEqual(newPage);
    });

    it('does not override state currentPage when props currentPage changes with existing value', () => {
      const currentPage = 2;
      const props = {
        ...baseProps,
        currentPage,
      };
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.state('currentPage')).toEqual(currentPage);
      wrapper.setProps({
        currentPage,
      });
      wrapper.update();
      expect(wrapper.state('currentPage')).toEqual(currentPage);
    });
  });

  describe('handles focus properly', () => {
    it('should change focus to next button if previous page is first page', () => {
      const props = {
        ...baseProps,
        currentPage: 2,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.find('button.previous').simulate('click');
      expect(wrapper.find('button.next').instance()).toEqual(document.activeElement);
    });

    it('should change focus to previous button if next page is last page', () => {
      const props = {
        ...baseProps,
        currentPage: baseProps.pageCount - 1,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.find('button.next').simulate('click');
      expect(wrapper.find('button.previous').instance()).toEqual(document.activeElement);
    });
  });

  describe('renders required props', () => {
    it('should use correct paginationLabel', () => {
      const paginationLabel = 'pagination navigation';
      const props = {
        ...baseProps,
        paginationLabel,
      };
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.find('nav').prop('aria-label')).toEqual(paginationLabel);
    });

    describe('should use correct number of pages', () => {
      it('should show 5 buttons on desktop', () => {
        const wrapper = mount((
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>
        ));
        expect(wrapper.findWhere((node) => {
          const isPrevOrNext = node.hasClass('previous') || node.hasClass('next');
          return node.name() === 'button' && !isPrevOrNext;
        })).toHaveLength(5);
      });

      it('should show 1 button on mobile', () => {
        // Use extra small window size to display the mobile version of `Pagination`.
        const wrapper = mount((
          <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
            <Pagination {...baseProps} />
          </ResponsiveContext.Provider>
        ));
        expect(wrapper.findWhere((node) => {
          const name = node.name();
          const isPrevOrNext = node.hasClass('previous') || node.hasClass('next');
          return name === 'span' && node.hasClass('btn') && !isPrevOrNext;
        })).toHaveLength(1);
      });
    });

    describe('should fire callbacks properly', () => {
      it('should not fire onPageSelect when selecting current page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const wrapper = mount((
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>
        ));

        wrapper.find('.btn').at(1).simulate('click');
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should fire onPageSelect callback when selecting new page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const wrapper = mount((
          <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
            <Pagination {...props} />
          </ResponsiveContext.Provider>
        ));

        wrapper.find('.btn').at(2).simulate('click');
        expect(wrapper.state('currentPage')).toEqual(2);
        expect(spy).toHaveBeenCalledTimes(1);

        wrapper.find('.btn').at(3).simulate('click');
        expect(wrapper.state('currentPage')).toEqual(3);
        expect(spy).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('fires previous and next button click handlers', () => {
    it('previous button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.setProps({ currentPage: 2 });
      wrapper.update();
      wrapper.find('button.previous').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('next button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.find('button.next').simulate('click');
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

    let wrapper;
    let props;
    /**
     * made a proxy component because setProps can only be used with root component and
     * Responsive Context Provider is needed to mock screen
     * */
    // eslint-disable-next-line react/prop-types
    const Proxy = ({ currentPage, width }) => (
      <ResponsiveContext.Provider value={{ width }}>
        <Pagination {...props} currentPage={currentPage} />
      </ResponsiveContext.Provider>
    );

    beforeEach(() => {
      props = {
        ...baseProps,
        buttonLabels,
      };
      wrapper = mount(
        <Proxy currentPage={1} width={breakpoints.large.minWidth} />,
      );
    });

    it('uses passed in previous button label', () => {
      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('previous')
      )).prop('aria-label')).toEqual(buttonLabels.previous);

      wrapper.setProps({ currentPage: baseProps.pageCount });
      wrapper.update();

      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('previous')
      )).prop('aria-label')).toEqual(`${buttonLabels.previous}, ${buttonLabels.page} 4`);
    });

    it('uses passed in next button label', () => {
      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('next')
      )).prop('aria-label')).toEqual(`${buttonLabels.next}, ${buttonLabels.page} 2`);

      wrapper.setProps({ currentPage: baseProps.pageCount });
      wrapper.update();

      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('next')
      )).prop('aria-label')).toEqual(buttonLabels.next);
    });

    it('uses passed in page button label', () => {
      wrapper = mount((
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} />
        </ResponsiveContext.Provider>
      ));
      expect(wrapper.state('currentPage')).toEqual(1);
      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1, ${buttonLabels.currentPage}`);
      wrapper = mount((
        <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
          <Pagination {...props} currentPage={2} />
        </ResponsiveContext.Provider>
      ));

      expect(wrapper.state('currentPage')).toEqual(2);
      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1`);

      wrapper = mount(
        <Proxy currentPage={1} width={breakpoints.extraSmall.maxWidth} />,
      );

      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`);
    });
  });
});
