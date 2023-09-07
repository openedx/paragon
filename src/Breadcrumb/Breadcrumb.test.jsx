import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Breadcrumb from '.';

const baseProps = {
  links: [
    {
      label: 'Link 1',
      href: '/link-1',
    },
    {
      label: 'Link 2',
      href: '/link-2',
    },
    {
      label: 'Link 3',
      href: '/link-3',
    },
  ],
};

describe('<Breadcrumb />', () => {
  it('renders with just links', () => {
    render(<Breadcrumb {...baseProps} />);
    expect(screen.queryAllByRole('list').length).toBe(1);
    expect(screen.queryAllByRole('listitem').length).toBe(baseProps.links.length);
  });

  it('renders with links and active label', () => {
    const label = 'Current Page';
    render(<Breadcrumb {...baseProps} activeLabel={label} />);
    const list = screen.queryAllByRole('list');
    const listItems = screen.queryAllByRole('listitem');

    expect(list.length).toBe(1);
    expect(listItems.length).toBe(baseProps.links.length + 1);
    expect(listItems[listItems.length - 1].textContent).toBe(label);
  });

  it('renders custom spacer', () => {
    render(
      <Breadcrumb {...baseProps} spacer={<span>/</span>} />,
    );
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(baseProps.links.length);
    expect(screen.getAllByRole('presentation').length).toBe(2);
  });

  it('fires the passed in click handler', () => {
    const clickHandler = jest.fn();
    render(<Breadcrumb {...baseProps} clickHandler={clickHandler} />);

    const listItems = screen.queryAllByRole('listitem');
    const links = screen.queryAllByRole('link');
    expect(listItems.length).toBe(baseProps.links.length);

    userEvent.click(links[0]);
    expect(clickHandler).toHaveBeenCalled();
  });

  it('renders in mobile view', () => {
    render(<Breadcrumb {...baseProps} isMobile />);
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
    expect(list.className).toContain('is-mobile');
  });

  it('renders links as custom elements', () => {
    render(<Breadcrumb {...baseProps} linkAs="div" />);
    const list = screen.getByRole('list');

    const anchors = list.querySelectorAll('a');
    expect(anchors.length).toBe(0);

    const customLinks = list.querySelectorAll('div');
    expect(customLinks.length).toBe(3);
  });

  it('passes down link props to link elements', () => {
    const linkProps = {
      label: 'Link 1',
      href: '/link-1',
      className: 'my-link',
      target: '_blank',
    };

    render(<Breadcrumb links={[linkProps]} />);

    const links = screen.getByRole('link');
    expect(links.className).toContain('my-link');
    expect(links.getAttribute('target')).toBe('_blank');
    expect(links.getAttribute('href')).toBe('/link-1');
  });
});
