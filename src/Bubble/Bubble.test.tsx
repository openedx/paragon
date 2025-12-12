import {
  assert,
  describe,
  it,
  render,
  renderer,
  screen,
} from '../testUtils';
import Bubble from '.';

describe('<Bubble />', () => {
  describe('correct rendering', () => {
    it('successfully renders', (t) => {
      const tree = renderer.create(<Bubble>1</Bubble>).toJSON();
      t.assert.snapshot(tree);
    });
    it('renders with variant', () => {
      render(<Bubble variant="error">1</Bubble>);
      const bubble = screen.getByText('1');
      assert.containsClass(bubble, 'pgn__bubble-error');
    });

    it('renders with default variant', () => {
      render(<Bubble>1</Bubble>);
      const bubble = screen.getByText('1');
      assert.containsClass(bubble, 'pgn__bubble-primary');
    });

    it('renders with disabled variant', () => {
      render(<Bubble disabled>1</Bubble>);
      const bubble = screen.getByText('1');
      assert.containsClass(bubble, 'disabled');
    });

    it('renders with expandable variant', () => {
      render(<Bubble expandable>1</Bubble>);
      const bubble = screen.getByText('1');
      assert.containsClass(bubble, 'expandable');
    });
  });
});
