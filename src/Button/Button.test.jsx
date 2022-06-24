import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Close } from 'icons';
import Button from './index';

describe('<Button />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <Button>Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with correct class when variant is added', () => {
      const wrapper = mount(<Button variant="brand" />);
      const tooltip = wrapper.find('.btn');
      expect(tooltip.hasClass('btn-brand')).toEqual(true);
    });
    it('renders with props iconBefore', () => {
      const tree = renderer.create((
        <Button iconBefore={Close}>Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconAfter', () => {
      const tree = renderer.create((
        <Button iconAfter={Close}>Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconBefore and iconAfter', () => {
      const tree = renderer.create((
        <Button iconBefore={Close} iconAfter={Close}>Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
