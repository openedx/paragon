import classNames from 'classnames';
// import camelize from 'dom-helpers/camelize';
import React from 'react';
// import { useBootstrapPrefix } from './ThemeProvider';

function camelize(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (match, char) => (char ? char.toUpperCase() : ''))
    .replace(/^[A-Z]/, (char) => char.toLowerCase());
}

const pascalCase = (str) => str[0].toUpperCase() + camelize(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
export default function createWithBsPrefix(
  prefix,
  {
    displayName = pascalCase(prefix),
    Component,
    defaultProps,
  } = {},
) {
  const BsComponent = React.forwardRef(
    (
      {
        className, bsPrefix, as: Tag = Component || 'div', ...props
      },
      ref,
    ) => {
      // const resolvedPrefix = useBootstrapPrefix(bsPrefix, prefix);
      const resolvedPrefix = 'bs';
      return (
        <Tag
          ref={ref}
          className={classNames(className, resolvedPrefix)}
          {...props}
        />
      );
    },
  );
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}
