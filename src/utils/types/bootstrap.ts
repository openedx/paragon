/**
 * Types related to bootstrap components
 */
import React from 'react';

import type { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/esm/helpers';

/**
 * Type helper for defining props of a component that wraps a bootstrap
 * component. This type defines three props:
 *    1. `className`: this component accepts additional CSS classes.
 *    2. `bsPrefix`: locally change the class name prefix used for this component.
 *    3. `as`: optionally specify which HTML element or Component is used, e.g. `"div"`
 *
 * This type assumes no `children` are allowed, but you can extend it to allow children.
 */
export type BsPropsWithAs<As extends React.ElementType = React.ElementType> = BsPrefixProps<As>;

/**
 * This is a helper that can be used to define the type of a Paragon component
 * that accepts an `as` prop.
 *
 * It:
 *   - assumes you are using `forwardRef`, and sets the type of the `ref` prop
 *     to match the type of the component passed in the `as` prop.
 *   - assumes you are passing all unused props to the component, so adds any
 *     props from the `as` component type to the props you specify as `Props`.
 *
 * Example;
 * ```
 * interface MyProps extends BsPropsWithAs {
 *   customProp?: string;
 * }
 * export const MyComponent: ComponentWithAsProp<'div', MyProps> = (
 *   React.forwardRef<HTMLDivElement, MyProps>(
 *     ({ as: Inner = 'div', ...props }, ref) => <Inner {...props} ref={ref} />,
 *   )
 * );
 * ```
 * Note that you need to define the default (e.g. `'div'`) in three different places.
 */
export type ComponentWithAsProp<DefaultElementType extends React.ElementType, Props>
    = BsPrefixRefForwardingComponent<DefaultElementType, Props>;
