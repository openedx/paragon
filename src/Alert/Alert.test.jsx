import React from 'react';
import renderer from 'react-test-renderer';

import Alert from './index';

import { Info } from '../../icons';

describe('<Alert />', () => {
  describe('correct rendering', () => {
    it('renders without icon prop', () => {
      const tree = renderer.create((
        <Alert>Alert</Alert>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with correct with icon', () => {
      const tree = renderer.create((
        <Alert icon={Info}>Alert</Alert>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
