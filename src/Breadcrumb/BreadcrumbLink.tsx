import React from 'react';
import classNames from 'classnames';

interface BreadcrumbLinkProps {
  as: React.ElementType;
  clickHandler?: (event: React.MouseEvent, link: any) => void;
  linkProps: {
    label: string;
    url?: string; // deprecated, use href instead when rendering as 'a'
    className?: string;
    [key: string]: any;
  };
}

interface AdditionalProps {
  href?: string;
  onClick?: (event: React.MouseEvent, link: any) => void;
}

export default function BreadcrumbLink({ as, clickHandler = undefined, linkProps }: BreadcrumbLinkProps) {
  const {
    label,
    url,
    className,
    ...props
  } = linkProps;
  const addtlProps: AdditionalProps = {};

  if (as === 'a' && url) {
    // eslint-disable-next-line no-console
    console.warn(
      '[Deprecated]: using "url" parameter to specify link\'s destination in Breadcrumb component is '
      + 'deprecated. Please use "href" instead when rendering links as anchor tag.',
    );
    addtlProps.href = url;
  }

  if (clickHandler) {
    addtlProps.onClick = clickHandler;
  }

  return React.createElement(
    as,
    {
      ...props,
      ...addtlProps,
      className: classNames('link-muted', className),
    },
    label,
  );
}
