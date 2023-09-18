import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { InfoOutline } from '../../icons';
import IconButton from '.';
import Icon from '../Icon';

describe('<IconButton />', () => {
  const alt = 'alternative';
  const iconAs = Icon;
  const src = InfoOutline;
  const variant = 'secondary';
  const props = {
    alt,
    src,
    iconAs,
    variant,
  };
  const iconParams = {
    prefix: 'pgn',
    iconName: 'InfoOutlineIcon',
    icon: [InfoOutline],
  };
  it('renders with required props', () => {
    const tree = renderer.create((
      <IconButton icon={iconParams} alt={alt} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('passes the alt text to the button aria-label', () => {
    const { getByRole } = render(<IconButton {...props} onClick={() => {}} />);
    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-label', alt);
  });
  it('should render with active style if isActive is true', () => {
    const { container } = render(<IconButton {...props} isActive onClick={() => {}} />);
    const button = container.querySelector(`.btn-icon-${variant}-active`);
    expect(button).toBeInTheDocument();
  });
  it('should render with inverse active style if inverse and isActive is true', () => {
    const { container } = render(<IconButton {...props} isActive invertColors onClick={() => {}} />);
    const button = container.querySelector(`.btn-icon-inverse-${variant}-active`);
    expect(button).toBeInTheDocument();
  });
  it('should not render with inverse- class names if invertColors is false', () => {
    const { container } = render(<IconButton {...props} onClick={() => {}} />);
    const inverseButton = container.querySelector(`.btn-icon-inverse-${variant}`);
    const inverseActiveButton = container.querySelector(`.btn-icon-inverse-${variant}-active`);
    expect(inverseButton).not.toBeInTheDocument();
    expect(inverseActiveButton).not.toBeInTheDocument();
  });
  it('should render with inverse- class names if invertColors is true', () => {
    const { container } = render(<IconButton {...props} onClick={() => {}} invertColors />);
    const inverseButton = container.querySelector(`.btn-icon-inverse-${variant}`);
    expect(inverseButton).toBeInTheDocument();
  });
  it('should add the icon class names if it receives them', () => {
    const { container } = render(<IconButton {...props} onClick={() => {}} iconClassNames="foo bar" />);
    const iconWithFooClass = container.querySelector('.foo');
    const iconWithBarClass = container.querySelector('.bar');
    expect(iconWithFooClass).toBeInTheDocument();
    expect(iconWithBarClass).toBeInTheDocument();
  });

  describe('onClick', () => {
    it('performs the onClick action when clicked', async () => {
      const spy = jest.fn();
      const { getByRole } = render(<IconButton {...props} onClick={spy} />);
      const button = getByRole('button');
      await userEvent.click(button);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('only clicks one icon at a time', async () => {
      const spy1 = jest.fn();
      const spy2 = jest.fn();
      const { getAllByRole } = render(
        <>
          <IconButton {...props} onClick={spy1} />
          <IconButton {...props} onClick={spy2} />
        </>,
      );

      const buttons = getAllByRole('button');

      await userEvent.click(buttons[0]);
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(0);

      await userEvent.click(buttons[1]);
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
    });
  });
});
