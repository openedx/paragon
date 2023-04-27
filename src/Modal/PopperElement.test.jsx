import React from 'react';
import { shallow } from 'enzyme';
import { usePopper } from 'react-popper';
import PopperElement from './PopperElement';

jest.mock('react-popper', () => ({
  // eslint-disable-next-line no-unused-vars
  usePopper: jest.fn((targetEl, popperEl, options) => ({
    styles: {
      popper: {
        someProperty: 'someValue',
      },
    },
    attributes: {
      popper: {
        'data-test': 'someValue',
      },
    },
  })),
}));

const defaultPopperOptions = {
  strategy: 'absolute',
  placement: 'bottom-start',
  modifiers: [
    {
      name: 'flip',
      enabled: true,
    },
    {
      name: 'preventOverflow',
      options: {
        tether: false,
      },
    },
  ],
};

describe('<PopperElement />', () => {
  it('popper element to usePopper and apply styles and attributes to child div', () => {
    const targetRef = { current: <div /> };
    const wrapper = shallow((
      <PopperElement target={targetRef}>
        <div id="popper-content">Popper content</div>
      </PopperElement>
    ));
    const popperEl = wrapper.find('[data-test="someValue"]');
    expect(usePopper).toHaveBeenCalledWith(targetRef, null, defaultPopperOptions);
    expect(popperEl.length).toBe(1);
    expect(popperEl.props().style.someProperty).toBe('someValue');
  });
});
