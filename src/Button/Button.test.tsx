import { IntlProvider } from 'react-intl';
import {
  assert,
  describe,
  mock,
  it,
  render,
  renderer,
  screen,
  userEvent,
} from '../testUtils';

import { Close } from '../../icons';
import Button from '.';
import Hyperlink from '../Hyperlink';

describe('<Button />', () => {
  describe('correct rendering', () => {
    it('renders without props', (t) => {
      const tree = renderer.create((
        <Button>Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with correct class when variant is added', () => {
      render(<Button variant="brand">Button</Button>);
      const button = screen.getByRole('button');
      assert.containsClass(button, 'btn-brand');
    });

    it('renders with props iconBefore and size', (t) => {
      const tree = renderer.create((
        <Button iconBefore={Close} size="md">Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with props iconAfter and size', (t) => {
      const tree = renderer.create((
        <Button iconAfter={Close} size="sm">Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with props iconBefore', (t) => {
      const tree = renderer.create((
        <Button iconBefore={Close}>Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with props iconAfter', (t) => {
      const tree = renderer.create((
        <Button iconAfter={Close}>Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with props iconBefore and iconAfter', (t) => {
      const tree = renderer.create((
        <Button iconBefore={Close} iconAfter={Close}>Button</Button>
      )).toJSON();
      t.assert.snapshot(tree);
    });

    describe('renders as a link', () => {
      it('with href', (t) => {
        const tree = renderer.create((
          <Button href="https://edx.org">Button</Button>
        )).toJSON();
        t.assert.snapshot(tree);
      });

      it('disable with href', (t) => {
        const tree = renderer.create((
          <Button as="a" href="https://edx.org" disabled>Button</Button>
        )).toJSON();
        t.assert.snapshot(tree);
      });

      it('cannot click if disabled', async () => {
        const onClick = mock.fn();
        render(<Button as="a" href="https://edx.org" disabled onClick={onClick}>Button</Button>);
        const link = screen.getByRole('link');
        await userEvent.click(link);
        // Mock should not be called:
        assert.wasNotCalled(onClick);
      });

      it('invalid disabled if without href', async () => {
        const onClick = mock.fn();
        const { rerender } = render(<Button as="a" disabled onClick={onClick}>Button</Button>);
        const link = screen.getByText('Button');
        await userEvent.click(link);
        assert.wasCalled(onClick);
        onClick.mock.resetCalls();

        rerender(<Button as="a" href="" disabled onClick={onClick}>Button</Button>);
        const emptyHrefLink = screen.getByRole('link', { name: 'Button' });
        await userEvent.click(emptyHrefLink);
        assert.wasCalled(onClick);
      });

      it('test button as hyperlink', () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const ref = (_current: HTMLAnchorElement) => {}; // Check typing of a ref - should not show type errors.
        render(
          <IntlProvider locale="en">
            <Button as={Hyperlink} ref={ref} destination="https://www.poop.com/💩">Button</Button>
          </IntlProvider>,
        );
        assert.equal(screen.getByRole('link').getAttribute('href'), 'https://www.poop.com/💩');
      });
    });

    it('with size="inline"', (t) => {
      const tree = renderer.create((
        <p>
          <span className="mr-1">2 items selected.</span>
          <Button variant="link" size="inline">Clear</Button>
        </p>
      )).toJSON();
      t.assert.snapshot(tree);
    });
  });
});
