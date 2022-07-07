import React from 'react';
import { mount } from 'enzyme';
import TextFilter from '../TextFilter';

describe('<TextFilter />', () => {
  it('Header as function', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: () => 'test',
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const wrapper = mount(<TextFilter {...props} />);
    expect(wrapper.text()).toContain('Search test');
  });

  it('Header as string', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: 'test',
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const wrapper = mount(<TextFilter {...props} />);
    expect(wrapper.text()).toContain('Search test');
  });

  it('Header as component', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: <span>test_component</span>,
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const wrapper = mount(<TextFilter {...props} />);
    expect(wrapper.text()).toContain('test_component');
  });
});
