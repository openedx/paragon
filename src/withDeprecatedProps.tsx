/* eslint no-console: 0 */
import * as React from 'react';

export enum DeprTypes {
  MOVED = 'MOVED',
  REMOVED = 'REMOVED',
  FORMAT = 'FORMAT',
  MOVED_AND_FORMAT = 'MOVED_AND_FORMAT',
}

export interface DeprecatedProps extends Record<string, any> {
  deprType: DeprTypes,
  newName?: string,
  expect?: (arg0: Record<string, any>) => Record<string, any>,
  transform?: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>,
  message?: string,
}

function withDeprecatedProps<T extends Record<string, any>>(
  WrappedComponent: React.ComponentType<any>,
  componentName: string,
  deprecatedProps: Record<string, DeprecatedProps>,
) {
  class WithDeprecatedProps extends React.Component<T> {
    constructor(props: T) {
      super(props);
      this.transformProps = this.transformProps.bind(this);
    }

    warn(message: string) {
      if (process.env.NODE_ENV === 'development') {
        if (console) { console.warn(`[Deprecated] ${message}`); }
      }
    }

    transformProps(acc: Record<string, unknown>, propName: string) : Record<string, unknown> {
      if (deprecatedProps[propName] === undefined) {
        acc[propName] = this.props[propName];
        return acc;
      }

      const {
        deprType,
        newName,
        expect,
        transform,
        message,
      } = deprecatedProps[propName];

      switch (deprType) {
        case DeprTypes.MOVED:
          this.warn(`${componentName}: The prop '${propName}' has been moved to '${newName}'.`);
          acc[newName!] = this.props[propName];
          break;
        case DeprTypes.REMOVED:
          this.warn(`${componentName}: The prop '${propName}' has been removed. '${message}'`);
          break;
        case DeprTypes.FORMAT:
          if (!expect!(this.props[propName])) {
            this.warn(`${componentName}: The prop '${propName}' expects a new format. ${message}`);
            acc[propName] = transform!(this.props[propName], this.props);
          } else {
            acc[propName] = this.props[propName];
          }
          break;
        case DeprTypes.MOVED_AND_FORMAT:
          this.warn(`${componentName}: The prop '${propName}' has been moved to '${newName}' and expects a new format. ${message}`);
          acc[newName!] = transform!(this.props[propName], this.props);
          break;
        default:
          acc[propName] = this.props[propName];
          break;
      }

      return acc;
    }

    render() {
      const { children, ...transformedProps } = Object
        .keys(this.props)
        .reduce(this.transformProps, {});

      return (
        <WrappedComponent {...transformedProps as T}>
          {this.props.children || children}
        </WrappedComponent>
      );
    }
  }

  // @ts-ignore
  WithDeprecatedProps.displayName = `withDeprecatedProps(${componentName})`;

  return WithDeprecatedProps;
}

export default withDeprecatedProps;
