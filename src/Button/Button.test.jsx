import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      render(<Button variant="brand" />);
      const button = screen.getByRole('button');
      expect(button.className).toContain('btn-brand');
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
        render(<Button as="a" href="https://edx.org" disabled onClick={onClick}>Button</Button>);
        const link = screen.getByRole('link');
        userEvent.click(link);
        expect(onClick).not.toHaveBeenCalled();
      });

      test('invalid disabled if without href', () => {
        const onClick = jest.fn();
        render(<Button as="a" disabled onClick={onClick} data-testid="button">Button</Button>);
        const link = screen.getAllByTestId('button');
        userEvent.click(link[0]);
        expect(onClick).toHaveBeenCalled();

        render(<Button as="a" href="" disabled onClick={onClick} data-testid="button">Button</Button>);
        const emptyHrefLink = screen.getAllByTestId('button');
        userEvent.click(emptyHrefLink[1]);
        expect(onClick).toHaveBeenCalled();
      });

      test('test button as hyperlink', () => {
        render(<Button as={Hyperlink} destination="https://www.poop.com/💩">Button</Button>);
        expect(screen.getByRole('link').getAttribute('href')).toEqual('https://www.poop.com/💩');
      });
    });
  });
});
