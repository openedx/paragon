import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonToolbar } from './index';

describe('<ButtonToolbar />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <ButtonToolbar />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
