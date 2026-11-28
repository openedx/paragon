import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Tabs } from './Tabs';
import Tab from './Tab';

function BasicTabs(props: Partial<React.ComponentProps<typeof Tabs>> = {}) {
  return (
    <Tabs defaultActiveKey="home" {...props}>
      <Tab eventKey="home" title="Home">Home panel</Tab>
      <Tab eventKey="profile" title="Profile">Profile panel</Tab>
      <Tab eventKey="contact" title="Contact" disabled>Contact panel</Tab>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('renders a tablist with a tab per Tab child', () => {
    render(<BasicTabs />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(3);
    expect(screen.getByRole('tab', { name: 'Home' })).toBeInTheDocument();
  });

  it('shows only the active tab panel (defaultActiveKey)', () => {
    render(<BasicTabs />);
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Home panel');
    // React Aria mounts only the selected panel.
    expect(screen.queryByText('Profile panel')).not.toBeInTheDocument();
  });

  it('switches panels when another tab is clicked', async () => {
    const user = userEvent.setup();
    render(<BasicTabs />);

    await user.click(screen.getByRole('tab', { name: 'Profile' }));
    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Profile panel');
    expect(screen.queryByText('Home panel')).not.toBeInTheDocument();
  });

  it('moves selection with the arrow keys', async () => {
    const user = userEvent.setup();
    render(<BasicTabs />);

    await user.tab();
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true');
  });

  it('marks a disabled tab and does not select it on click', async () => {
    // Disabled tabs carry `pointer-events: none`; bypass user-event's guard so we
    // can confirm React Aria itself also refuses to select the tab.
    const user = userEvent.setup({ pointerEventsCheck: 0 });
    render(<BasicTabs />);

    const contact = screen.getByRole('tab', { name: 'Contact' });
    expect(contact).toHaveAttribute('aria-disabled', 'true');
    expect(contact).toHaveClass('disabled');

    await user.click(contact);
    expect(contact).toHaveAttribute('aria-selected', 'false');
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'true');
  });

  it('supports controlled usage via activeKey and onSelect', async () => {
    const onSelect = vi.fn();
    const user = userEvent.setup();
    render(<BasicTabs activeKey="home" onSelect={onSelect} defaultActiveKey={undefined} />);

    const profile = screen.getByRole('tab', { name: 'Profile' });
    await user.click(profile);
    // Controlled: onSelect fires, but selection does not change until the parent
    // updates activeKey.
    expect(onSelect).toHaveBeenCalledWith('profile');
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveAttribute('aria-selected', 'true');
  });

  it('renders a notification bubble in the tab title', () => {
    render(
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Home">Home panel</Tab>
        <Tab eventKey="profile" title="Profile" notification={3}>Profile panel</Tab>
      </Tabs>,
    );
    const badge = screen.getByText('3');
    expect(badge).toHaveClass('pgn__tab-notification');
    expect(screen.getByRole('tab', { name: /Profile/ })).toContainElement(badge);
  });

  it('applies the variant and forwarded className to the tab list', () => {
    render(<BasicTabs variant="pills" className="extra" />);
    const tablist = screen.getByRole('tablist');
    expect(tablist).toHaveClass('nav', 'nav-pills', 'pgn__tabs', 'extra');
  });

  it('appends a per-tab tabClassName to that tab only', () => {
    render(
      <Tabs defaultActiveKey="home">
        <Tab eventKey="home" title="Home" tabClassName="my-tab">Home panel</Tab>
        <Tab eventKey="profile" title="Profile">Profile panel</Tab>
      </Tabs>,
    );
    expect(screen.getByRole('tab', { name: 'Home' })).toHaveClass('my-tab');
    expect(screen.getByRole('tab', { name: 'Profile' })).not.toHaveClass('my-tab');
  });
});
