import React from 'react';
import { Badge } from '~paragon-react';

export type RequiredBadgeTypes = {
  isRequired?: boolean,
};

function RequiredBadge({ isRequired = false }: RequiredBadgeTypes) {
  if (!isRequired) { return null; }
  return (
    <>
      {' '}
      <Badge variant="light">Required</Badge>
    </>
  );
}

export interface IPropType {
  name: string;
  value?: any;
  raw?: string;
  required?: boolean;
}

function PropType({
  name, value = null, required = false, raw = '',
}: IPropType) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const PropTypeComponent = PROP_TYPE_COMPONENTS[name];

  if (PropTypeComponent) {
    return (
      <PropTypeComponent
        value={value}
        name={name}
        isRequired={required}
        raw={raw}
      />
    );
  } else if (name) {
    // For TypeScript types, we simply display the type as a string.
    return (
      <span>
        <code>{name}</code>
        <RequiredBadge isRequired={required} />
      </span>
    );
  } else {
    return <>unknown type</>;
  }
}

export interface ISimplePropType {
  name: string,
  isRequired?: boolean,
}

function SimplePropType({ name, isRequired = false }: ISimplePropType) {
  return (
    <span>
      <code>{name}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export interface IPropTypeEnum {
  name: string;
  value: any[];
  isRequired?: boolean;
}

function PropTypeEnum({ name, value: enumValue, isRequired = false }: IPropTypeEnum) {
  return (
    <span>
      <code>{name}</code>
      <RequiredBadge isRequired={isRequired} />
      <span className="text-monospace small ml-2">
        {enumValue.map
          ? enumValue.map(({ value }) => value).join(' | ')
          : JSON.stringify(enumValue)}
      </span>
    </span>
  );
}

export interface IPropTypeUnion {
  value: IPropType[];
  isRequired?: boolean;
}

function PropTypeUnion({ value, isRequired = false }: IPropTypeUnion) {
  return (
    <span>
      {value
        .map((propType: { name: string }) => <PropType key={propType.name} {...propType} />)
        .reduce((prev, curr) => <>{prev} | {curr}</>)}
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export interface IPropTypeInstanceOf {
  isRequired?: boolean;
  value: string;
}

function PropTypeInstanceOf({ value, isRequired = false }: IPropTypeInstanceOf) {
  return (
    <span>
      <code>{value}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export interface IPropTypeArrayOf {
  isRequired?: boolean;
  value: IPropType;
}

function PropTypeArrayOf({ value, isRequired = false }: IPropTypeArrayOf) {
  return (
    <span>
      <PropType {...value} />
      <code>[]</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export interface IPropTypeObjectOf {
  value: IPropType;
  isRequired?: boolean;
}

function PropTypeObjectOf({ value, isRequired = false }: IPropTypeObjectOf) {
  return (
    <span>
      <code>
        Object.{'<'}
        <PropType {...value} />
        {'>'}
      </code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export interface IPropTypeShape {
  isRequired?: boolean;
  name: string;
  value: IPropType[];
}

function PropTypeShape({ name, value, isRequired = false }: IPropTypeShape) {
  return (
    <span className="small">
      <code>{name}</code>
      <RequiredBadge isRequired={isRequired} />
      {' {'}
      {Object.entries(value).map(([key, propType]) => (
        <div className="text-monospace pl-3" key={key}>
          {key}: <PropType {...propType} />,
        </div>
      ))}
      {'}'}
    </span>
  );
}

export interface IPropTypeExact {
  isRequired?: boolean;
  name: string;
  value: {
    propType: IPropType;
  };
}

function PropTypeExact({ name, value, isRequired = false }: IPropTypeExact) {
  return (
    <span className="small">
      <code>{name}</code>
      <RequiredBadge isRequired={isRequired} />
      {' {'}
      {Object.entries(value).map(([key, propType]) => (
        <div className="text-monospace pl-3">
          {key}: <PropType {...propType} />,
        </div>
      ))}
      {'}'}
    </span>
  );
}

export interface ICustomPropType {
  isRequired?: boolean;
  raw?: string;
}

function CustomPropType({ raw = '', isRequired = false }: ICustomPropType) {
  return (
    <span>
      <code>{raw}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

export type PropTypeComponentsTypes = {
  [key: string]: (...args: any[]) => JSX.Element,
};

/**
 * Maps the deprecated propType names to components. These aren't needed for
 * TypeScript types since their string representation is already useful as is.
 */
const PROP_TYPE_COMPONENTS: PropTypeComponentsTypes = {
  // Other than 'string', 'any', and 'object', these are all legacy propTypes types
  // and won't be used once the components are converted to TypeScript definitions.
  array: SimplePropType,
  bool: SimplePropType,
  func: SimplePropType,
  number: SimplePropType,
  object: SimplePropType,
  string: SimplePropType,
  any: SimplePropType,
  element: SimplePropType,
  node: SimplePropType,
  symbol: SimplePropType,
  elementType: SimplePropType,
  enum: PropTypeEnum,
  union: PropTypeUnion,
  instanceOf: PropTypeInstanceOf,
  arrayOf: PropTypeArrayOf,
  objectOf: PropTypeObjectOf,
  shape: PropTypeShape,
  exact: PropTypeExact,
  custom: CustomPropType,
};

export default PropType;
