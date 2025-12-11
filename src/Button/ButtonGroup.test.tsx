import { describe, it } from 'node:test';
import renderer from 'react-test-renderer';

import Button, { ButtonGroup } from './index';

describe('<ButtonGroup />', () => {
  describe('correct rendering', () => {
    it('renders without props', (t) => {
      const tree = renderer.create((
        <ButtonGroup />
      )).toJSON();
      t.assert.snapshot(tree);
    });

    it('renders with children', (t) => {
      const tree = renderer.create((
        <ButtonGroup size="lg">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
      )).toJSON();
      t.assert.snapshot(tree);
    });
  });
});
