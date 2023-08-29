import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import Dropdown from './index';

const mockOnToggle = jest.fn();

const baseProps = {
  show: false,
  autoClose: true,
  onToggle: mockOnToggle,
};

const outsideAutoCloseProps = {
  autoClose: 'outside',
};

const insideAutoCloseProps = {
  autoClose: 'inside',
};

describe('<Dropdown />', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
    };
    render(<Dropdown {...props} />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
  });

  it('Dropdown functions without autoClose or show props', async () => {
    render(
      <Dropdown data-testid="dropdown">
        <Dropdown.Toggle id={1}>
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>foobar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );

    expect(screen.queryByText('foobar')).not.toBeInTheDocument();
    expect(screen.getByText('Dropdown Button')).toBeInTheDocument();

    // Open the dropdown
    const button = screen.getByText('Dropdown Button');
    userEvent.click(button);

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking off the element
    userEvent.click(document.body);
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());

    // Reopen the dropdown
    userEvent.click(button);
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking the item
    const dropdownItem = screen.getByText('foobar');
    userEvent.click(dropdownItem);
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());
  });

  it('Dropdown functions when autoClose is outside', async () => {
    const props = {
      ...outsideAutoCloseProps,
    };
    render(
      <Dropdown data-testid="dropdown" {...props}>
        <Dropdown.Toggle id={1}>
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>foobar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );

    expect(screen.queryByText('foobar')).not.toBeInTheDocument();
    expect(screen.getByText('Dropdown Button')).toBeInTheDocument();

    // Open the dropdown
    const button = screen.getByText('Dropdown Button');
    userEvent.click(button);

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking off the element
    userEvent.click(document.body);
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());

    // Reopen the dropdown
    userEvent.click(button);
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Assert the dropdown stays open when clicking the item
    const dropdownItem = screen.getByText('foobar');
    userEvent.click(dropdownItem);
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());
  });

  it('Dropdown functions when autoClose is inside', async () => {
    const props = {
      ...insideAutoCloseProps,
    };
    render(
      <Dropdown data-testid="dropdown" {...props}>
        <Dropdown.Toggle id={1}>
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>foobar</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    );

    expect(screen.queryByText('foobar')).not.toBeInTheDocument();
    expect(screen.getByText('Dropdown Button')).toBeInTheDocument();

    // Open the dropdown
    const button = screen.getByText('Dropdown Button');
    userEvent.click(button);

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Assert the dropdown stays open when clicking outside the dropdown
    userEvent.click(document.body);
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking the element
    const dropdownItem = screen.getByText('foobar');
    userEvent.click(dropdownItem);
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());
  });
});
