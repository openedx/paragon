import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Hyperlink from '.';

const destination = 'destination';
const content = 'content';
const onClick = jest.fn();
const props = {
  destination,
  onClick,
};
const externalLinkAlternativeText = 'externalLinkAlternativeText';
const externalLinkTitle = 'externalLinkTitle';
const externalLinkProps = {
  target: '_blank' as const,
  externalLinkAlternativeText,
  externalLinkTitle,
  ...props,
};

describe('correct rendering', () => {
  beforeEach(() => {
    onClick.mockClear();
  });

  it('renders Hyperlink', async () => {
    const { getByRole } = render(<Hyperlink {...props}>{content}</Hyperlink>);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).toHaveClass('standalone-link');
    expect(wrapper).toHaveTextContent(content);
    expect(wrapper).toHaveAttribute('href', destination);
    expect(wrapper).toHaveAttribute('target', '_self');

    await userEvent.click(wrapper);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders an underlined Hyperlink', async () => {
    const { getByRole } = render(<Hyperlink isInline {...props}>{content}</Hyperlink>);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).not.toHaveClass('standalone-link');
    expect(wrapper).toHaveClass('inline-link');
  });

  it('renders external Hyperlink', () => {
    const { getByRole, getByTestId } = render(<Hyperlink {...externalLinkProps}>{content}</Hyperlink>);
    const wrapper = getByRole('link');
    const icon = getByTestId('hyperlink-icon');
    const iconSvg = icon.querySelector('svg');

    expect(wrapper).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    expect(icon).toHaveClass('pgn__icon');
    expect(iconSvg).toHaveAttribute('width', '24');
    expect(iconSvg).toHaveAttribute('height', '24');
  });
});

describe('security', () => {
  it('prevents reverse tabnabbing for links with target="_blank"', () => {
    const { getByRole } = render(<Hyperlink {...externalLinkProps}>{content}</Hyperlink>);
    const wrapper = getByRole('link');
    expect(wrapper).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('event handlers are triggered correctly', () => {
  it('should fire onClick', async () => {
    const spy = jest.fn();
    const { getByRole } = render(<Hyperlink {...props} onClick={spy}>{content}</Hyperlink>);
    const wrapper = getByRole('link');
    expect(spy).toHaveBeenCalledTimes(0);
    await userEvent.click(wrapper);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
