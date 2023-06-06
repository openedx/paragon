import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { Close } from '../../icons';
import Button from './index';
import Hyperlink from '../Hyperlink';

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
    it('renders with props iconBefore and size', () => {
      const tree = renderer.create((
        <Button iconBefore={Close} size="md">Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders with props iconAfter and size', () => {
      const tree = renderer.create((
        <Button iconAfter={Close} size="md">Button</Button>
      )).toJSON();
      expect(tree).toMatchSnapshot();
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
    describe('renders as a link', () => {
      test('with href', () => {
        const tree = renderer.create((
          <Button href="https://edx.org">Button</Button>
        )).toJSON();
        expect(tree).toMatchSnapshot();
      });
      test('disable with href', () => {
        const tree = renderer.create((
          <Button as="a" href="https://edx.org" disabled>Button</Button>
        )).toJSON();
        expect(tree).toMatchSnapshot();
      });
      test('cannot click if disabled', () => {
        const onClick = jest.fn();
        const wrapper = mount((
          <Button as="a" href="https://edx.org" disabled onClick={onClick}>Button</Button>
        ));
        wrapper.simulate('click');
        expect(onClick).not.toHaveBeenCalled();
      });
      test('invalid disabled if without href', () => {
        const onClick = jest.fn();
        const noHref = mount((
          <Button as="a" disabled onClick={onClick}>Button</Button>
        ));
        noHref.simulate('click');
        expect(onClick).toHaveBeenCalled();
        const emptyHref = mount((
          <Button as="a" href="" disabled onClick={onClick}>Button</Button>
        ));
        emptyHref.simulate('click');
        expect(onClick).toHaveBeenCalled();
      });
      test('test button as hyperlink', () => {
        const wrapper = mount((
          <Button as={Hyperlink} destination="https://www.poop.com/💩">Button</Button>
        ));
        expect(wrapper.find('a').prop('href')).toEqual('https://www.poop.com/💩');
      });
    });
  });
});
