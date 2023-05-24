import React from 'react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import ColorPicker from './index';

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
    render(<ColorPicker color={color} setColor={setColor} />);
    await act(async () => {
      userEvent.click(screen.getByRole('button'));
    });
    expect(screen.queryByText('Colors must be in hexadecimal format.')).toBeInTheDocument();
    const input = screen.getByTestId('hex-input');
    fireEvent.change(input, { target: { value: '#32116c' } });
    expect(screen.queryByText('Colors must be in hexadecimal format.')).not.toBeInTheDocument();
  });
});
