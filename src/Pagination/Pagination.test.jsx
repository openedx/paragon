import React from 'react';
import { mount } from 'enzyme';

import '../utils/reactResponsive.mock';
import { breakpoints } from '../Responsive';

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
      wrapper.find('.previous').simulate('click');
      expect(wrapper.find('.next').instance()).toEqual(document.activeElement);
    });

    it('should change focus to previous button if next page is last page', () => {
      const props = {
        ...baseProps,
        currentPage: baseProps.pageCount - 1,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.find('.next').simulate('click');
      expect(wrapper.find('.previous').instance()).toEqual(document.activeElement);
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
        const wrapper = mount(<Pagination {...baseProps} />);
        expect(wrapper.findWhere((node) => {
          const isPrevOrNext = node.hasClass('previous') || node.hasClass('next');
          return node.name() === 'button' && !isPrevOrNext;
        })).toHaveLength(5);
      });

      it('should show 1 button on mobile', () => {
        // Use extra small window size to display the mobile version of `Pagination`.
        global.innerWidth = breakpoints.extraSmall.maxWidth;

        const wrapper = mount(<Pagination {...baseProps} />);
        expect(wrapper.findWhere((node) => {
          const name = node.name();
          const isPrevOrNext = node.hasClass('previous') || node.hasClass('next');
          return name === 'span' && node.hasClass('btn') && !isPrevOrNext;
        })).toHaveLength(1);

        // Reset window size back to extra large display
        global.innerWidth = breakpoints.extraLarge.minWidth;
      });
    });

    describe('should fire callbacks properly', () => {
      it('should not fire onPageSelect when selecting current page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const wrapper = mount(<Pagination {...props} />);

        wrapper.find('.btn').at(1).simulate('click');
        expect(spy).toHaveBeenCalledTimes(0);
      });

      it('should fire onPageSelect callback when selecting new page', () => {
        const spy = jest.fn();
        const props = {
          ...baseProps,
          onPageSelect: spy,
        };
        const wrapper = mount(<Pagination {...props} />);

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
      wrapper.find('.previous').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('next button onClick', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onPageSelect: spy,
      };
      const wrapper = mount(<Pagination {...props} />);
      wrapper.find('.next').simulate('click');
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

    beforeEach(() => {
      // Reset window size to extra large display
      global.innerWidth = breakpoints.extraLarge.minWidth;

      props = {
        ...baseProps,
        buttonLabels,
      };
      wrapper = mount(<Pagination {...props} />);
    });

    it('uses passed in previous button label', () => {
      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('previous')
      )).prop('aria-label')).toEqual(buttonLabels.previous);

      wrapper.setProps({ currentPage: baseProps.pageCount });

      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('previous')
      )).prop('aria-label')).toEqual(`${buttonLabels.previous}, ${buttonLabels.page} 4`);
    });

    it('uses passed in next button label', () => {
      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('next')
      )).prop('aria-label')).toEqual(`${buttonLabels.next}, ${buttonLabels.page} 2`);

      wrapper.setProps({ currentPage: baseProps.pageCount });

      expect(wrapper.findWhere(node => (
        node.name() === 'button' && node.hasClass('next')
      )).prop('aria-label')).toEqual(buttonLabels.next);
    });

    it('uses passed in page button label', () => {
      expect(wrapper.state('currentPage')).toEqual(1);
      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1, ${buttonLabels.currentPage}`);

      wrapper.setProps({ currentPage: 2 });
      expect(wrapper.state('currentPage')).toEqual(2);

      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1`);

      // Reset window size to extra small display
      global.innerWidth = breakpoints.extraSmall.maxWidth;
      wrapper = mount(<Pagination {...props} />);

      expect(wrapper.find('.btn').at(1).prop('aria-label'))
        .toEqual(`${buttonLabels.page} 1, ${buttonLabels.currentPage}, ${buttonLabels.pageOfCount} 5`);

      // Reset window size back to extra large display
      global.innerWidth = breakpoints.extraLarge.minWidth;
    });
  });
});
