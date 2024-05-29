import { IntlProvider } from 'react-intl';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Hyperlink, { HyperlinkProps } from '.';

const destination = 'http://destination.example';
const content = 'content';
const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
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

interface LinkProps extends HyperlinkProps {
  to: string;
}

function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a
      data-testid="custom-hyperlink-element"
      href={to}
      {...rest}
    >
      {children}
    </a>
  );
}

function HyperlinkWrapper({ children, ...rest }: HyperlinkProps) {
  return (
    <IntlProvider locale="en">
      <Hyperlink {...rest}>{children}</Hyperlink>
    </IntlProvider>
  );
}

describe('correct rendering', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Hyperlink', async () => {
    const { getByRole } = render(<HyperlinkWrapper {...props}>{content}</HyperlinkWrapper>);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).toHaveClass('standalone-link');
    expect(wrapper).toHaveTextContent(content);
    expect(wrapper).toHaveAttribute('href', destination);
    expect(wrapper).toHaveAttribute('target', '_self');

    // Clicking on the link should call the onClick handler
    await userEvent.click(wrapper);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom element type via "as" prop', () => {
    const propsWithoutDestination = {
      to: destination, // `to` simulates common `Link` components' prop
    };
    const { getByRole } = render(<HyperlinkWrapper as={Link} {...propsWithoutDestination}>{content}</HyperlinkWrapper>);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).toHaveClass('standalone-link');
    expect(wrapper).toHaveTextContent(content);
    expect(wrapper).toHaveAttribute('href', destination);
    expect(wrapper).toHaveAttribute('target', '_self');
    expect(wrapper).toHaveAttribute('data-testid', 'custom-hyperlink-element');
  });

  it('renders an underlined Hyperlink', async () => {
    const { getByRole } = render(<HyperlinkWrapper isInline {...props}>{content}</HyperlinkWrapper>);
    const wrapper = getByRole('link');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('pgn__hyperlink');
    expect(wrapper).not.toHaveClass('standalone-link');
    expect(wrapper).toHaveClass('inline-link');
  });

  it('renders external Hyperlink', () => {
    const { getByRole, getByTestId } = render(<HyperlinkWrapper {...externalLinkProps}>{content}</HyperlinkWrapper>);
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
    const { getByRole } = render(<HyperlinkWrapper {...externalLinkProps}>{content}</HyperlinkWrapper>);
    const wrapper = getByRole('link');
    expect(wrapper).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
