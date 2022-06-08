import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Badge } from '~paragon-react'; // eslint-disable-line

export type RequiredBadgeTypes = {
  isRequired?: boolean,
};

const RequiredBadge = ({ isRequired }: RequiredBadgeTypes) => {
  if (!isRequired) { return null; }
  return (
    <>
      {' '}
      <Badge variant="light">Required</Badge>
    </>
  );
};

RequiredBadge.propTypes = {
  isRequired: PropTypes.bool,
};

RequiredBadge.defaultProps = {
  isRequired: false,
};

export interface SimplePropTypeInterface {
  name: string,
  isRequired?: boolean,
}

const SimplePropType = ({ name, isRequired }: SimplePropTypeInterface) => (
  <span>
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

SimplePropType.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

SimplePropType.defaultProps = {
  isRequired: false,
};

export interface PropTypeEnumInterface {
  name: string,
  value: Array<any>,
  isRequired?: boolean,
}

const PropTypeEnum = ({ name, value: enumValue, isRequired }: PropTypeEnumInterface) => (
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

PropTypeEnum.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeEnum.defaultProps = {
  isRequired: false,
};

export interface PropTypeUnionInterface {
  value: Array<any>,
  isRequired?: boolean,
}

const PropTypeUnion = ({ value, isRequired }: PropTypeUnionInterface) => (
  <span>
    {value
      .map(propType => <PropType key={propType.name} {...propType} />)
      .reduce((prev, curr) => [prev, ' | ', curr])}
    <RequiredBadge isRequired={isRequired} />
  </span>
);

PropTypeUnion.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeUnion.defaultProps = {
  isRequired: false,
};

export interface PropTypeInstanceOfInterface {
  value: Array<any>,
  isRequired?: boolean,
}

const PropTypeInstanceOf = ({ value, isRequired }: PropTypeInstanceOfInterface) => (
  <span>
    <code>{value}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

PropTypeInstanceOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

PropTypeInstanceOf.defaultProps = {
  isRequired: false,
};

export interface PropTypeArrayOfInterface {
  value: Array<any>,
  isRequired?: boolean,
}

const PropTypeArrayOf = ({ value, isRequired }: PropTypeArrayOfInterface) => (
  <span>
    <PropType {...value} />
    <code>[]</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

PropTypeArrayOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.shape({}).isRequired,
};

PropTypeArrayOf.defaultProps = {
  isRequired: false,
};

export interface PropTypeObjectOfInterface {
  value: Array<any>,
  isRequired?: boolean,
}

const PropTypeObjectOf = ({ value, isRequired }: PropTypeObjectOfInterface) => (
  <span>
    <code>
      Object.{'<'}
      <PropType {...value} />
      {'>'}
    </code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

PropTypeObjectOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.shape({}).isRequired,
};

PropTypeObjectOf.defaultProps = {
  isRequired: false,
};

export interface PropTypeShapeInterface {
  value: Array<any>,
  isRequired?: boolean,
  name: string,
}

const PropTypeShape = ({ name, value, isRequired }: PropTypeShapeInterface) => (
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

PropTypeShape.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({}).isRequired,
};

PropTypeShape.defaultProps = {
  isRequired: false,
};

export interface PropTypeExactInterface {
  value: Array<any>,
  isRequired?: boolean,
  name: string,
}

const PropTypeExact = ({ name, value, isRequired }: PropTypeExactInterface) => (
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

PropTypeExact.propTypes = {
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.shape({}).isRequired,
};

PropTypeExact.defaultProps = {
  isRequired: false,
};

export interface CustomPropTypeInterface {
  raw?: string
  isRequired?: boolean,
}

const CustomPropType = ({ raw, isRequired }: CustomPropTypeInterface) => (
  <span>
    <code>{raw}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

CustomPropType.propTypes = {
  isRequired: PropTypes.bool,
  raw: PropTypes.string,
};

CustomPropType.defaultProps = {
  isRequired: false,
  raw: '',
};

const PROP_TYPE_COMPONENTS = {
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

export interface PropTypeInterface {
  value: any,
  name: 'arrayOf' | 'custom' | 'enum' | 'array' | 'bool' | 'func' | 'number' | 'object' | 'string' | 'any' |
  'element' | 'node' | 'symbol' | 'objectOf' | 'shape' | 'exact' | 'union' | 'elementType',
  required: boolean,
  raw: string,
}

const PropType = ({
  name, value, required, raw,
}: PropTypeInterface) => {
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

  return 'unknown type';
};

PropType.propTypes = {
  // eslint-disable-next-line react/require-default-props
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
  computed: PropTypes.bool,
  required: PropTypes.bool,
};

export default PropType;
