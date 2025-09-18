/* eslint no-console: 0 */
import type { ComponentType } from 'react';

import { Component } from 'react';

export enum DeprTypes {
  MOVED = 'MOVED',
  REMOVED = 'REMOVED',
  FORMAT = 'FORMAT',
  MOVED_AND_FORMAT = 'MOVED_AND_FORMAT',
}

export interface DeprecatedProps extends Record<string, any> {
  deprType: DeprTypes,
  newName?: string,
  expect?: (propValue: any) => boolean,
  transform?: (propValue: any, allProps: Record<string, any>) => any,
  message?: string,
}

function withDeprecatedProps<T extends Record<string, any>>(
  WrappedComponent: ComponentType<any>,
  componentName: string,
  deprecatedProps: Record<string, DeprecatedProps>,
) : any {
  class WithDeprecatedProps extends Component<T> {
    // eslint-disable-next-line react/static-property-placement
    public static displayName = `withDeprecatedProps(${componentName})`;

    constructor(props: T) {
      super(props);
      this.transformProps = this.transformProps.bind(this);
    }

    warn(message: string) {
      if (process.env.NODE_ENV === 'development') {
        if (console) { console.warn(`[Deprecated] ${message}`); }
      }
    }

    transformProps(acc: Record<string, any>, propName: string) : Record<string, any> {
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
        case DeprTypes.MOVED_AND_FORMAT: {
          const propValue = this.props[propName];
          let warningMessage = `${componentName}: The prop '${propName}' has been moved to '${newName}'`;
          if (expect && !expect(propValue)) {
            warningMessage += ' and expects a new format';
          }
          warningMessage += message ? `. ${message}` : '';
          this.warn(warningMessage);
          acc[newName!] = transform ? transform(propValue, this.props) : propValue;
          break;
        }
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

  return WithDeprecatedProps;
}

export default withDeprecatedProps;
