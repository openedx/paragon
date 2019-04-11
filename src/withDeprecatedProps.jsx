/* eslint no-console: 0 */
import React from 'react';


export const DEPR_TYPES = {
  MOVED: 'MOVED',
  FORMAT: 'FORMAT',
};


function withDeprecatedProps(WrappedComponent, componentName, deprecatedProps) {
  class WithDeprecatedProps extends React.Component {
    constructor(props) {
      super(props);
      this.transformProps = this.transformProps.bind(this);
    }

    warn(message) {
      if (process.env.NODE_ENV === 'development') {
        if (console) console.warn(`[Deprecated] ${message}`);
      }
    }

    transformProps(acc, propName) {
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
        case DEPR_TYPES.MOVED:
          this.warn(`${componentName}: The prop '${propName}' has been moved to '${newName}'.`);
          acc[newName] = this.props[propName];
          break;
        case DEPR_TYPES.FORMAT:
          if (!expect(this.props[propName])) {
            this.warn(`${componentName}: The prop '${propName}' expects a new format. ${message}`);
            acc[propName] = transform(this.props[propName]);
          } else {
            acc[propName] = this.props[propName];
          }
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
        <WrappedComponent {...transformedProps}>
          {this.props.children || children /* eslint-disable-line react/prop-types */}
        </WrappedComponent>
      );
    }
  }

  WithDeprecatedProps.displayName = `withDeprecatedProps(${componentName})`;

  return WithDeprecatedProps;
}

export default withDeprecatedProps;
