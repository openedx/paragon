import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '~paragon-react';

const RequiredBadge = ({ isRequired }) => {
  if (!isRequired) return null;
  return <> <Badge variant="light">Required</Badge></>;
}

const SimplePropType = ({ name, isRequired }) => (
  <span>
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

const PropTypeEnum = ({ name, value, isRequired }) => (
  <span>
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
    <span className="text-monospace small ml-2">
      {value.map ? value.map(({ value }) => value).join(' | ') : JSON.stringify(value)}
    </span>
  </span>
);

const PropTypeUnion = ({ name, value, isRequired }) => (
  <span>
    {value
      .map(propType => <PropType key={propType.name} {...propType} />)
      .reduce((prev, curr) => [prev, ' | ', curr])
    }
    <RequiredBadge isRequired={isRequired} />
  </span>
);

const PropTypeInstanceOf = ({ name, value, isRequired }) => (
  <span>
    <code>{value}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

const PropTypeArrayOf = ({ name, value, isRequired }) => (
  <span>
    <PropType {...value} /><code>[]</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

const PropTypeObjectOf = ({ name, value, isRequired }) => (
  <span>
    <code>Object.{"<"}<PropType {...value} />{">"}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

const PropTypeShape = ({ name, value, isRequired }) => (
  <span className="small">
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
    {" \{"}
    {Object.entries(value).map(([key, propType]) => (
      <div className="text-monospace pl-3" key={key}>{key}: <PropType {...propType} />,</div>
    ))}
    {"\}"}
  </span>
);

const PropTypeExact = ({ name, value, isRequired }) => (
  <span className="small">
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
    {" \{"}
    {Object.entries(value).map(([key, propType]) => (
      <div className="text-monospace pl-3">{key}: <PropType {...propType} />,</div>
    ))}
    {"\}"}
  </span>
);

const CustomPropType = ({ raw, isRequired }) => (
  <span>
    <code>{raw}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

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
}

const PropType = ({ name, value, required, raw }) => {
  const PropTypeComponent = PROP_TYPE_COMPONENTS[name];

  if (PropTypeComponent) {
    return <PropTypeComponent value={value} name={name} isRequired={required} raw={raw} />;
  }

  return 'unknown type';
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
    'elementType',,
  ]),
  value: PropTypes.any,
  raw: PropTypes.string,
  computed: PropTypes.bool,
  required: PropTypes.bool,
};

export default PropType;
