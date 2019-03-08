import React from 'react';
import { mount } from 'enzyme';
import { breakpoints } from '../Responsive';
import '../utils/reactResponsive.mock';

import Collapsible from '../Collapsible';

const childElements = (
  <div>
    <p>Child</p>
  </div>
);

const defaultProps = {
  title: 'Collapsible',
  children: childElements,
};

describe('<Collapsible />', () => {
  describe('without resizing', () => {
    describe('correct rendering', () => {
      it('renders in closed form by default', () => {
        const wrapper = mount(<Collapsible {...defaultProps} />);

        expect(wrapper.find('.collapsible').exists()).toEqual(true);
        expect(wrapper.find('.collapsible.open').exists()).toEqual(false);

        expect(wrapper.find('.btn-collapsible').exists()).toEqual(true);
        expect(wrapper.find('.btn-collapsible.open').exists()).toEqual(false);
        expect(wrapper.find('button').prop('aria-expanded')).toEqual(false);

        expect(wrapper.find('.collapsible-body.open').exists()).toEqual(false);
      });

      it('renders in open form if specified open', () => {
        const wrapper = mount(<Collapsible {...defaultProps} isOpen />);

        expect(wrapper.find('.collapsible.open').exists()).toEqual(true);
        expect(wrapper.find('.btn-collapsible.open').exists()).toEqual(true);
        expect(wrapper.find('button').prop('aria-expanded')).toEqual(true);
        expect(wrapper.find('.collapsible-body.open').exists()).toEqual(true);
      });

      it('changes the isOpen state if the isOpen prop changes', () => {
        const wrapper = mount(<Collapsible {...defaultProps} isOpen />);
        expect(wrapper.instance().state.isOpen).toBe(true);
        wrapper.setProps({ isOpen: false });
        expect(wrapper.instance().state.isOpen).toBe(false);
      });

      it('renders the title on the open/close button', () => {
        const wrapper = mount(<Collapsible {...defaultProps} />);

        expect(wrapper.find('.collapsible-title').text()).toEqual(defaultProps.title);
      });
    });

    it('does not change to expanded form on resizing window', () => {
      // Change to a small window and it should show the collapsible button
      global.innerWidth = breakpoints.small.minWidth;
      let wrapper = mount(<Collapsible {...defaultProps} />);
      expect(wrapper.find('.btn-collapsible').exists()).toEqual(true);

      // Change to a large window and it should still show the collapsible button
      global.innerWidth = breakpoints.large.minWidth;
      wrapper = mount(<Collapsible {...defaultProps} />);
      expect(wrapper.find('.btn-collapsible').exists()).toEqual(true);
    });

    it('open to show the body when the collapsible button is clicked', () => {
      const wrapper = mount(<Collapsible {...defaultProps} />);

      expect(wrapper.find('.collapsible-body.open').exists()).toEqual(false);

      wrapper.find('button').simulate('click');
      expect(wrapper.find('.btn-collapsible.open').exists()).toEqual(true);
      expect(wrapper.find('button').prop('aria-expanded')).toEqual(true);
      expect(wrapper.find('.collapsible-body.open').exists()).toEqual(true);
    });

    it('calls the onToggle callback correctly', () => {
      const spy = jest.fn();
      const wrapper = mount(<Collapsible {...defaultProps} onToggle={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);

      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(true);

      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith(false);
    });

    it('uses iconId if it is supplied', () => {
      const iconId = 'icon-id';
      const wrapper = mount(<Collapsible {...defaultProps} iconId={iconId} />);

      const icon = wrapper.find('Icon');
      expect(icon.prop('id')).toEqual(iconId);
    });
  });

  describe('with resizing', () => {
    const expandFunction = () => global.innerWidth >= breakpoints.large.minWidth;
    const expandedTitle = <h2 className="expanded-title">Collapsible</h2>;

    beforeEach(() => {
      global.innerWidth = breakpoints.large.minWidth;
    });

    describe('correct rendering', () => {
      it('renders in expanded form without a title by default', () => {
        const wrapper = mount(<Collapsible {...defaultProps} isCollapsible={expandFunction} />);

        expect(wrapper.find('.expanded-title').exists()).toEqual(false);
        expect(wrapper.find('.btn-collapsible').exists()).toEqual(false);
        expect(wrapper.find('.collapsible.open').exists()).toEqual(false);

        expect(wrapper.find('.collapsible-body').exists()).toEqual(true);
      });

      it('renders in expanded form with a title if given one', () => {
        const wrapper = mount(<Collapsible
          {...defaultProps}
          expandedTitle={expandedTitle}
          isCollapsible={expandFunction}
        />);

        expect(wrapper.find('.expanded-title').exists()).toEqual(true);
        expect(wrapper.find('.collapsible.open').exists()).toEqual(false);

        expect(wrapper.find('.collapsible-body').exists()).toEqual(true);
      });
    });

    it('shows the expanded form for large windows, and the collapsible for smaller windows', () => {
      // Change to a small window to view the collapsible button
      global.innerWidth = breakpoints.small.minWidth;
      let wrapper = mount(<Collapsible
        {...defaultProps}
        expandedTitle={expandedTitle}
        isCollapsible={expandFunction}
      />);
      expect(wrapper.find('.expanded-title').exists()).toEqual(false);
      expect(wrapper.find('.btn-collapsible').exists()).toEqual(true);
      expect(wrapper.find('.collapsible-body.open').exists()).toEqual(false);

      // Change back to a large window to see the expanded view again
      global.innerWidth = breakpoints.large.minWidth;
      wrapper = mount(<Collapsible
        {...defaultProps}
        expandedTitle={expandedTitle}
        isCollapsible={expandFunction}
      />);
      expect(wrapper.find('.expanded-title').exists()).toEqual(true);
      expect(wrapper.find('.btn-collapsible').exists()).toEqual(false);
      expect(wrapper.find('.collapsible-body.open').exists()).toEqual(true);
    });
  });
});
