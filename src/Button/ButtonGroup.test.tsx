import React from 'react';
import renderer from 'react-test-renderer';

import Button, { ButtonGroup } from './index';

describe('<ButtonGroup />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <ButtonGroup />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with children', () => {
      const tree = renderer.create((
        <ButtonGroup size="lg">
          <Button variant="primary">Left</Button>
          <Button variant="primary">Middle</Button>
          <Button variant="primary">Right</Button>
        </ButtonGroup>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
