import React from 'react';
import { mount } from 'enzyme';

import Breadcrumb from './index';

const baseProps = {
  links: [
    {
      label: 'Link 1',
      url: '/link-1',
    },
    {
      label: 'Link 2',
      url: '/link-2',
    },
    {
      label: 'Link 3',
      url: '/link-3',
    },
  ],
};

describe('<Breadcrumb />', () => {
  let wrapper;

  it('renders with just links', () => {
    wrapper = mount(<Breadcrumb {...baseProps} />);

    const list = wrapper.find('ol li');
    expect(list.length).toEqual(5);
    expect(list.find('a').length).toEqual(3);
  });

  it('renders with links and active label', () => {
    const label = 'Current Page';
    wrapper = mount(<Breadcrumb {...baseProps} activeLabel={label} />);

    const list = wrapper.find('ol li');
    expect(list.length).toEqual(7);
    expect(list.find('a').length).toEqual(3);
    expect(list.last().text()).toEqual(label);
  });

  it('renders custom spacer', () => {
    wrapper = mount(<Breadcrumb
      {...baseProps}
      spacer={<span className="custom-spacer">/</span>}
    />);

    const list = wrapper.find('ol li');
    expect(list.length).toEqual(5);
    expect(list.find('a').length).toEqual(3);
    expect(list.find('.custom-spacer').length).toEqual(2);
  });

  it('fires the passed in click handler', () => {
    const clickHandler = jest.fn();
    wrapper = mount(<Breadcrumb {...baseProps} clickHandler={clickHandler} />);

    const list = wrapper.find('ol li');
    expect(list.length).toEqual(5);

    const links = list.find('a');
    expect(links.length).toEqual(3);

    links.first().simulate('click');
    expect(clickHandler).toHaveBeenCalled();
  });
});
