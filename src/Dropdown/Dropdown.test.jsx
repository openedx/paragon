import React from 'react';
import {
  render, screen, waitFor, act,
} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Dropdown from '.';

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
      <Dropdown>
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
    await act(async () => {
      await userEvent.click(button);
    });

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking off the element
    await act(async () => {
      userEvent.click(document.body);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());

    // Reopen the dropdown
    await act(async () => {
      userEvent.click(button);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking the item
    const dropdownItem = screen.getByText('foobar');
    await act(async () => {
      userEvent.click(dropdownItem);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());
  });

  it('Dropdown functions when autoClose is outside', async () => {
    const props = {
      ...outsideAutoCloseProps,
    };
    render(
      <Dropdown {...props}>
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
    await act(async () => {
      userEvent.click(button);
    });

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking off the element
    await act(async () => {
      userEvent.click(document.body);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());

    // Reopen the dropdown
    await act(async () => {
      userEvent.click(button);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Assert the dropdown stays open when clicking the item
    const dropdownItem = screen.getByText('foobar');
    await act(async () => {
      userEvent.click(dropdownItem);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());
  });

  it('Dropdown functions when autoClose is inside', async () => {
    const props = {
      ...insideAutoCloseProps,
    };
    render(
      <Dropdown {...props}>
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
    await act(async () => {
      await userEvent.click(button);
    });

    // Expect the dropdown item to be visible
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Assert the dropdown stays open when clicking outside the dropdown
    await act(async () => {
      await userEvent.click(document.body);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).toBeVisible());

    // Close the dropdown by clicking the element
    const dropdownItem = screen.getByText('foobar');
    await act(async () => {
      userEvent.click(dropdownItem);
    });
    await waitFor(() => expect(screen.queryByText('foobar')).not.toBeVisible());
  });
});
