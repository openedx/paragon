/* eslint no-console: 0 */
import React from 'react';


function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}


function withDeprecation(WrappedComponent, deprecatedProps) {
  class WithDeprecation extends React.Component {
    constructor(props) {
      super(props);
      this.transformProps = this.transformProps.bind(this);
    }

    warn(message) {
      if (process.env.NODE_ENV !== 'development') return;
      console.warn(`[Deprecated] ${message}`);
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
        case 'renamed':
          this.warn(`${getDisplayName(WrappedComponent)}: The prop '${propName}' has been moved to '${newName}'.`);
          acc[newName] = this.props[propName];
          break;
        case 'format':
          if (!expect(this.props[propName])) {
            this.warn(`${getDisplayName(WrappedComponent)}: The prop '${propName}' expects a new format. ${message}`);
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
      const transformedProps = Object
        .keys(this.props)
        .reduce(this.transformProps, {});

      // eslint-disable-next-line react/prop-types
      const children = this.props.children || transformedProps.children;
      delete transformedProps.children;

      return (
        <WrappedComponent {...transformedProps}>
          {children}
        </WrappedComponent>
      );
    }
  }

  WithDeprecation.displayName = `WithDeprecation(${getDisplayName(WrappedComponent)})`;

  return WithDeprecation;
}

export default withDeprecation;
