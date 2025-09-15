/* eslint-disable react/require-default-props */
import React, { ForwardedRef } from 'react';
import classNames from 'classnames';
import RBContainer, { type ContainerProps as RBContainerProps } from 'react-bootstrap/Container';

import type { ComponentWithAsProp } from '../utils/types/bootstrap';

enum ContainerSizeClass {
  xs = 'container-mw-xs',
  sm = 'container-mw-sm',
  md = 'container-mw-md',
  lg = 'container-mw-lg',
  xl = 'container-mw-xl',
}

export type ContainerSize = keyof typeof ContainerSizeClass;

interface ContainerProps extends RBContainerProps {
  /** Set the maximum width for the container. Omiting the prop will remove the max-width */
  size?: ContainerSize;
}

type ContainerType = ComponentWithAsProp<'div', ContainerProps>;

const Container: ContainerType = React.forwardRef(({
  size,
  children,
  as = 'div',
  bsPrefix = 'container',
  fluid = true,
  ...props
}: ContainerProps, ref: ForwardedRef<Element>) => (
  <RBContainer
    {...props}
    as={as}
    bsPrefix={bsPrefix}
    fluid={fluid}
    ref={ref}
    className={classNames(
      props.className,
      size && ContainerSizeClass[size],
    )}
  >
    {children}
  </RBContainer>
));

export default Container;
