import {
  assert,
  describe,
  mock,
  it,
  render,
  screen,
  userEvent,
} from '../testUtils';

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
    assert.equal(screen.queryAllByRole('list').length, 1);
    assert.equal(screen.queryAllByRole('listitem').length, baseProps.links.length);
  });

  it('renders with links and active label', () => {
    const label = 'Current Page';
    render(<Breadcrumb {...baseProps} activeLabel={label} />);
    const list = screen.queryAllByRole('list');
    const listItems = screen.queryAllByRole('listitem');

    assert.equal(list.length, 1);
    assert.equal(listItems.length, baseProps.links.length + 1);
    assert.equal(listItems[listItems.length - 1].textContent, label);
  });

  it('renders custom spacer', () => {
    render(
      <Breadcrumb {...baseProps} spacer={<span>/</span>} />,
    );
    const listItems = screen.queryAllByRole('listitem');
    assert.equal(listItems.length, baseProps.links.length);
    assert.equal(screen.getAllByRole('presentation').length, 2);
  });

  it('fires the passed in click handler', async () => {
    const user = userEvent.setup();
    const clickHandler = mock.fn();
    render(<Breadcrumb {...baseProps} clickHandler={clickHandler} />);

    const listItems = screen.queryAllByRole('listitem');
    const links = screen.queryAllByRole('link');
    assert.equal(listItems.length, baseProps.links.length);

    await user.click(links[0]);
    assert.equal(clickHandler.mock.callCount(), 1);
  });

  it('renders in mobile view', () => {
    render(<Breadcrumb {...baseProps} isMobile />);
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    assert.equal(listItems.length, 1);
    assert.containsClass(list, 'is-mobile');
  });

  it('renders links as custom elements', () => {
    render(<Breadcrumb {...baseProps} linkAs="div" />);
    const list = screen.getByRole('list');

    const anchors = list.querySelectorAll('a');
    assert.equal(anchors.length, 0);

    const customLinks = list.querySelectorAll('div');
    assert.equal(customLinks.length, 3);
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
    assert.containsClass(links, 'my-link');
    assert.equal(links.getAttribute('target'), '_blank');
    assert.equal(links.getAttribute('href'), '/link-1');
  });
});
