import React from 'react';
import { render } from '@testing-library/react';

import TextFilter from '../TextFilter';

describe('<TextFilter />', () => {
  it('renders Header as function', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: () => 'test',
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const { getByText } = render(<TextFilter {...props} />);
    expect(getByText('Search test')).toBeInTheDocument();
  });

  it('renders Header as string', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: 'test',
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const { getByText } = render(<TextFilter {...props} />);
    expect(getByText('Search test')).toBeInTheDocument();
  });

  it('renders Header as component', () => {
    const mockKey = () => 'key';
    const props = {
      column: {
        filterValue: 'Demo Course',
        setFilter: jest.fn(),
        Header: <span>test_component</span>,
        getHeaderProps: jest.fn().mockImplementation(() => ({ key: mockKey })),
      },
    };
    const { getByText } = render(<TextFilter {...props} />);
    expect(getByText('test_component')).toBeInTheDocument();
  });
});
