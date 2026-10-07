import { createRef } from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, it, expect, vi,
} from 'vitest';

import { Collapsible } from './Collapsible';
import type { CollapsibleHandle } from './CollapsibleAdvanced';

describe('Collapsible', () => {
  it('renders a trigger with role=button linked to the panel', () => {
    render(
      <Collapsible title="Toggle">
        <p>Body content</p>
      </Collapsible>,
    );
    const trigger = screen.getByRole('button', { name: /Toggle/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(trigger).toHaveAttribute('aria-controls');
  });

  it('toggles open/closed on click', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible title="Toggle">
        <p>Body content</p>
      </Collapsible>,
    );
    const trigger = screen.getByRole('button', { name: /Toggle/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles with the keyboard (Enter)', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible title="Toggle">
        <p>Body content</p>
      </Collapsible>,
    );
    const trigger = screen.getByRole('button', { name: /Toggle/ });
    await user.tab();
    expect(trigger).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('honors defaultOpen', () => {
    render(
      <Collapsible title="Toggle" defaultOpen>
        <p>Body content</p>
      </Collapsible>,
    );
    expect(screen.getByRole('button', { name: /Toggle/ })).toHaveAttribute('aria-expanded', 'true');
  });

  it('fires onOpen, onClose and onToggle', async () => {
    const onOpen = vi.fn();
    const onClose = vi.fn();
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(
      <Collapsible title="Toggle" onOpen={onOpen} onClose={onClose} onToggle={onToggle}>
        <p>Body content</p>
      </Collapsible>,
    );
    const trigger = screen.getByRole('button', { name: /Toggle/ });

    await user.click(trigger);
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenLastCalledWith(true);

    await user.click(trigger);
    expect(onClose).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenLastCalledWith(false);
  });

  it('opens and closes imperatively via ref (uncontrolled)', () => {
    const ref = createRef<CollapsibleHandle>();
    render(
      <Collapsible ref={ref} title="Toggle">
        <p>Body content</p>
      </Collapsible>,
    );
    const trigger = screen.getByRole('button', { name: /Toggle/ });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');

    act(() => ref.current!.open());
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(ref.current!.isOpen).toBe(true);

    act(() => ref.current!.close());
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('Collapsible.Advanced', () => {
  it('renders a fully composed disclosure and swaps Visible content', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible.Advanced>
        <Collapsible.Trigger>
          Title
          <Collapsible.Visible whenClosed><span>closed</span></Collapsible.Visible>
          <Collapsible.Visible whenOpen><span>open</span></Collapsible.Visible>
        </Collapsible.Trigger>
        <Collapsible.Body>
          <p>Panel body</p>
        </Collapsible.Body>
      </Collapsible.Advanced>,
    );

    expect(screen.getByText('closed')).toBeInTheDocument();
    expect(screen.queryByText('open')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Title/ }));
    expect(screen.getByText('open')).toBeInTheDocument();
    expect(screen.queryByText('closed')).not.toBeInTheDocument();
  });

  it('supports a controlled open prop', async () => {
    const onToggle = vi.fn();
    const user = userEvent.setup();
    render(
      <Collapsible.Advanced open={false} onToggle={onToggle}>
        <Collapsible.Trigger>Title</Collapsible.Trigger>
        <Collapsible.Body><p>Body</p></Collapsible.Body>
      </Collapsible.Advanced>,
    );
    const trigger = screen.getByRole('button', { name: 'Title' });
    // Controlled to false: clicking requests a change but does not self-open.
    await user.click(trigger);
    expect(onToggle).toHaveBeenCalledWith(true);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('closeOnly trigger only closes and carries no aria-expanded', async () => {
    const user = userEvent.setup();
    render(
      <Collapsible.Advanced defaultOpen>
        <Collapsible.Trigger>Title</Collapsible.Trigger>
        <Collapsible.Body>
          <Collapsible.Trigger closeOnly tag="button">Close</Collapsible.Trigger>
        </Collapsible.Body>
      </Collapsible.Advanced>,
    );
    const mainTrigger = screen.getByRole('button', { name: 'Title' });
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).not.toHaveAttribute('aria-expanded');

    await user.click(closeButton);
    expect(mainTrigger).toHaveAttribute('aria-expanded', 'false');
  });
});
