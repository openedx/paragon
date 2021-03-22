import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '~paragon-react'; // eslint-disable-line

const RequiredBadge = ({ isRequired }) => {
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

const SimplePropType = ({ name, isRequired }) => (
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

const PropTypeEnum = ({ name, value: enumValue, isRequired }) => (
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

const PropTypeUnion = ({ value, isRequired }) => (
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

const PropTypeInstanceOf = ({ value, isRequired }) => (
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

const PropTypeArrayOf = ({ value, isRequired }) => (
  <span>
    <PropType {...value} />
    <code>[]</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
);

PropTypeArrayOf.propTypes = {
  isRequired: PropTypes.bool,
  value: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeArrayOf.defaultProps = {
  isRequired: false,
};

const PropTypeObjectOf = ({ value, isRequired }) => (
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
  value: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeObjectOf.defaultProps = {
  isRequired: false,
};

const PropTypeShape = ({ name, value, isRequired }) => (
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
  value: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeShape.defaultProps = {
  isRequired: false,
};

const PropTypeExact = ({ name, value, isRequired }) => (
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
  value: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

PropTypeExact.defaultProps = {
  isRequired: false,
};

const CustomPropType = ({ raw, isRequired }) => (
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

const PropType = ({
  name, value, required, raw,
}) => {
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
