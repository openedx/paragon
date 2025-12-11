import { describe, it } from 'node:test';
import renderer from 'react-test-renderer';

import { ButtonToolbar } from './index';

describe('<ButtonToolbar />', () => {
  describe('correct rendering', () => {
    it('renders without props', (t) => {
      const tree = renderer.create((
        <ButtonToolbar />
      )).toJSON();
      t.assert.snapshot(tree);
    });
  });
});
