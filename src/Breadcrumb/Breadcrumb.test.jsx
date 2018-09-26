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
  activeCourseRun: {
    start: '',
    end: '',
    enrollment_start: '',
    pacing_type: '',
    status: '',
    min_effort: 1,
    max_effort: 10,
    weeks_to_complete: 5,
    availability: '',
    staff: [],
  },
  uuid: '123abc',
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
    const label = 'Link 4';
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
});
