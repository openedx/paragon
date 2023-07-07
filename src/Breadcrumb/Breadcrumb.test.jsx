import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Breadcrumb from './index';

const baseProps = {
  links: [
    {
      label: 'Link 1',
      href: '/link-1',
      'data-testid': 'link',
    },
    {
      label: 'Link 2',
      href: '/link-2',
      'data-testid': 'link',
    },
    {
      label: 'Link 3',
      href: '/link-3',
      'data-testid': 'link',
    },
  ],
  'data-testid': 'breadcrumb',
};

describe('<Breadcrumb />', () => {
  it('renders with just links', () => {
    render(<Breadcrumb {...baseProps} />);
    const breadcrumb = screen.getByTestId('breadcrumb');
    const list = breadcrumb.querySelectorAll('ol li');
    expect(list.length).toBe(5);
    expect(screen.getAllByTestId('link').length).toBe(3);
  });

  it('renders with links and active label', () => {
    const label = 'Current Page';
    render(<Breadcrumb {...baseProps} activeLabel={label} />);

    const breadcrumb = screen.getByTestId('breadcrumb');
    const list = breadcrumb.querySelectorAll('ol li');
    expect(list.length).toBe(7);
    expect(screen.getAllByTestId('link').length).toBe(3);
    expect(list[list.length - 1].textContent).toBe(label);
  });

  it('renders custom spacer', () => {
    render(
      <Breadcrumb
        {...baseProps}
        spacer={<span data-testid="custom-spacer">/</span>}
      />,
    );

    const breadcrumb = screen.getByTestId('breadcrumb');
    const list = breadcrumb.querySelectorAll('ol li');
    expect(list.length).toBe(5);
    expect(screen.getAllByTestId('link').length).toBe(3);
    expect(screen.getAllByTestId('custom-spacer').length).toBe(2);
  });

  it('fires the passed in click handler', async () => {
    const clickHandler = jest.fn();
    render(<Breadcrumb {...baseProps} clickHandler={clickHandler} />);

    const links = screen.getAllByTestId('link');
    expect(links.length).toBe(3);

    await userEvent.click(links[0]);
    expect(clickHandler).toHaveBeenCalled();
  });

  it('renders in mobile view', () => {
    render(<Breadcrumb {...baseProps} isMobile />);
    const breadcrumb = screen.getByTestId('breadcrumb');

    const list = breadcrumb.querySelector('ol');
    const listItems = breadcrumb.querySelectorAll('ol li');
    expect(listItems.length).toBe(2);
    expect(list.className).toContain('is-mobile');
  });

  it('renders links as custom elements', () => {
    render(<Breadcrumb {...baseProps} linkAs="div" />);
    const breadcrumb = screen.getByTestId('breadcrumb');
    const list = breadcrumb.querySelector('ol');

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
      'data-testid': 'link',
    };

    render(<Breadcrumb links={[linkProps]} />);

    const links = screen.getAllByTestId('link');
    expect(links[0].className).toContain('my-link');
    expect(links[0].getAttribute('target')).toBe('_blank');
    expect(links[0].getAttribute('href')).toBe('/link-1');
  });
});
