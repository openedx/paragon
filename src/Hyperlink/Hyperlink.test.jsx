import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Hyperlink from '.';

const content = 'content';
const destination = 'destination';
const onClick = jest.fn();
const props = {
  content,
  destination,
  onClick,
};
const externalLinkAlternativeText = 'externalLinkAlternativeText';
const externalLinkTitle = 'externalLinkTitle';
const externalLinkProps = {
  target: '_blank',
  externalLinkAlternativeText,
  externalLinkTitle,
  ...props,
};

describe('correct rendering', () => {
  it('renders Hyperlink', () => {
    const { getByRole } = render(<Hyperlink {...props} />);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).toHaveTextContent(content);
    expect(wrapper).toHaveAttribute('href', destination);
    expect(wrapper).toHaveAttribute('target', '_self');

    fireEvent.click(wrapper);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders external Hyperlink', () => {
    const { getByRole, getByTestId } = render(<Hyperlink {...externalLinkProps} />);
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
    const { getByRole } = render(<Hyperlink {...externalLinkProps} />);
    const wrapper = getByRole('link');
    expect(wrapper).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('event handlers are triggered correctly', () => {
  let spy;
  beforeEach(() => { spy = jest.fn(); });

  it('should fire onClick', () => {
    const { getByRole } = render(<Hyperlink {...props} onClick={spy} />);
    const wrapper = getByRole('link');
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(wrapper);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
