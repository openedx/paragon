import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '~paragon-react';

export type RequiredBadgeTypes = {
  isRequired?: boolean,
};

function RequiredBadge({ isRequired }: RequiredBadgeTypes) {
  if (!isRequired) { return null; }
  return (
    <>
      {' '}
      <Badge variant="light">Required</Badge>
    </>
  );
}

RequiredBadge.propTypes = {
  isRequired: PropTypes.bool,
};

RequiredBadge.defaultProps = {
  isRequired: false,
};

export interface IPropType {
  name: string,
  value?: any,
  raw?: string,
  required?: boolean,
}

function PropType({
  name, value, required, raw,
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
  }

  return <>unknown type</>;
}

PropType.propTypes = {
  name: PropTypes.oneOf([
    'arrayOf',
    'custom',
    'enum',
    'array',
    'bool',
    'func',
    'number',
    'object',
    'string',
    'any',
    'element',
    'node',
    'symbol',
    'objectOf',
    'shape',
    'exact',
    'union',
    'elementType',
  ]),
  value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  raw: PropTypes.string,
  required: PropTypes.bool,
};

PropType.defaultProps = {
  name: 'any',
  value: null,
  raw: '',
  required: false,
};

export interface ISimplePropType {
  name: string,
  isRequired?: boolean,
}

function SimplePropType({ name, isRequired }: ISimplePropType) {
  return (
    <span>
      <code>{name}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

SimplePropType.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

SimplePropType.defaultProps = {
  isRequired: false,
};

export interface IPropTypeEnum {
  name: string,
  value: Array<any>,
  isRequired?: boolean,
}

function PropTypeEnum({ name, value: enumValue, isRequired }: IPropTypeEnum) {
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

PropTypeEnum.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeEnum.defaultProps = {
  isRequired: false,
};

export interface IPropTypeUnion {
  value: any,
  isRequired?: boolean,
}

function PropTypeUnion({ value, isRequired }: IPropTypeUnion) {
  return (
    <span>
      {value
        .map((propType: { name: string }) => <PropType key={propType.name} {...propType} />)
        .reduce((prev: Element, curr: Element) => [prev, ' | ', curr])}
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

PropTypeUnion.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeUnion.defaultProps = {
  isRequired: false,
};

export interface IPropTypeInstanceOf {
  isRequired?: boolean,
  value: string,
}

function PropTypeInstanceOf({ value, isRequired }: IPropTypeInstanceOf) {
  return (
    <span>
      <code>{value}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

PropTypeInstanceOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

PropTypeInstanceOf.defaultProps = {
  isRequired: false,
};

export interface IPropTypeArrayOf {
  isRequired?: boolean,
  value: Array<{}>,
}

function PropTypeArrayOf({ value, isRequired }: IPropTypeArrayOf) {
  return (
    <span>
      <PropType {...value} />
      <code>[]</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

PropTypeArrayOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.shape({}).isRequired,
};

PropTypeArrayOf.defaultProps = {
  isRequired: false,
};

export interface IPropTypeObjectOf {
  value: Array<{}>,
  isRequired?: boolean,
}

function PropTypeObjectOf({ value, isRequired }: IPropTypeObjectOf) {
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

PropTypeObjectOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.shape({}).isRequired,
};

PropTypeObjectOf.defaultProps = {
  isRequired: false,
};

export interface IPropTypeShape {
  isRequired?: boolean,
  name: string,
  value: Array<{}>,
}

function PropTypeShape({ name, value, isRequired }: IPropTypeShape) {
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

PropTypeShape.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({}).isRequired,
};

PropTypeShape.defaultProps = {
  isRequired: false,
};

export interface IPropTypeExact {
  isRequired?: boolean,
  name: string,
  value: {
    propType: JSX.Element,
  },
}

function PropTypeExact({ name, value, isRequired }: IPropTypeExact) {
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

PropTypeExact.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({}).isRequired,
};

PropTypeExact.defaultProps = {
  isRequired: false,
};

export interface ICustomPropType {
  isRequired?: boolean,
  raw?: string
}

function CustomPropType({ raw, isRequired }: ICustomPropType) {
  return (
    <span>
      <code>{raw}</code>
      <RequiredBadge isRequired={isRequired} />
    </span>
  );
}

CustomPropType.propTypes = {
  isRequired: PropTypes.bool,
  raw: PropTypes.string,
};

CustomPropType.defaultProps = {
  isRequired: false,
  raw: '',
};

export type PropTypeComponentsTypes = {
  [key: string]: Function,
};

const PROP_TYPE_COMPONENTS: PropTypeComponentsTypes = {
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
