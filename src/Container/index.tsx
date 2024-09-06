/* eslint-disable react/require-default-props */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
  size?: ContainerSize;
}

type ContainerType = ComponentWithAsProp<'div', ContainerProps> & { Deprecated?: any };

const Container: ContainerType = React.forwardRef<HTMLDivElement, ContainerProps>(({
  size,
  children,
  ...props
}, ref) => (
  <RBContainer
    {...props}
    ref={ref}
    className={classNames(
      props.className,
      size && ContainerSizeClass[size],
    )}
  >
    {children}
  </RBContainer>
));

Container.propTypes = {
  ...RBContainer.propTypes,
  /** Override the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the container */
  children: PropTypes.node,
  /** Fill all available space at any breakpoint */
  fluid: PropTypes.bool,
  /** Set the maximum width for the container. Omiting the prop will remove the max-width */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', undefined]),
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

Container.defaultProps = {
  as: 'div',
  children: undefined,
  fluid: true,
  size: undefined,
  bsPrefix: 'container',
};

export default Container;
