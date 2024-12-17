import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import ColorPicker from '.';

describe('renders correctly', () => {
  const color = '';
  const setColor = jest.fn();
  it('successfully renders', () => {
    const tree = renderer.create(<ColorPicker color={color} setColor={setColor} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with defaults', () => {
    const { container } = render(<ColorPicker color={color} setColor={setColor} />);
    expect(container.firstChild.firstChild).toHaveClass('pgn__color-picker-md');
  });
  it('renders with the passed variables ', () => {
    const className = 'testClassName';
    const { container } = render(
      <ColorPicker color={color} setColor={setColor} className={className} size="sm" />,
    );
    expect(container.firstChild.firstChild).toHaveClass(className);
    expect(container.firstChild.firstChild).toHaveClass('pgn__color-picker-sm');
  });
});
describe('picker works as expected', () => {
  const color = 'wassap';
  const setColor = jest.fn();
  it('validates hex color', async () => {
    const user = userEvent.setup();
    render(<ColorPicker color={color} setColor={setColor} />);

    await user.click(screen.getByRole('button'));
    expect(screen.queryByTestId('hex-input').value).toEqual('#wassap');
    expect(screen.queryByText('Colors must be in hexadecimal format.')).toBeInTheDocument();

    await user.clear(screen.getByTestId('hex-input')); // clear() will keep focus on the element, so we can paste
    await user.paste('32116c');
    expect(screen.queryByTestId('hex-input').value).toEqual('#32116c');
    expect(screen.queryByText('Colors must be in hexadecimal format.')).not.toBeInTheDocument();

    await user.clear(screen.getByTestId('hex-input'));
    await user.paste('yuk');

    expect(screen.queryByTestId('hex-input').value).toEqual('#yuk');
    expect(screen.queryByText('Colors must be in hexadecimal format.')).toBeInTheDocument();

    await user.clear(screen.getByTestId('hex-input'));
    await user.paste('#fad');

    expect(screen.queryByTestId('hex-input').value).toEqual('#fad');
    expect(screen.queryByText('Colors must be in hexadecimal format.')).not.toBeInTheDocument();
  });
});
