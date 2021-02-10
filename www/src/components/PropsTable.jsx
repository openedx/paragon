import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Badge, Row, Col } from '~paragon-react';

const simplePropTypes = [
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
  'elementType',
];

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
      .map(propType => <PropType {...propType} />)
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
      <div className="text-monospace pl-3">{key}: <PropType {...propType} />,</div>
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

const PropTypeCustom = ({ name, isRequired }) => (
  <span>
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
  </span>
)


const complexPropTypes = {
  enum: PropTypeEnum,
  union: PropTypeUnion,
  instanceOf: PropTypeInstanceOf,
  arrayOf: PropTypeArrayOf,
  objectOf: PropTypeObjectOf,
  shape: PropTypeShape,
  exact: PropTypeExact,
}

const PropType = ({ name, value, required, raw, ...others }) => {
  console.log(name, value, required, raw, others);

  if (simplePropTypes.includes(name)) {
    return <SimplePropType name={name} isRequired={required} />;
  }
  const ComplexPropTypeComponent = complexPropTypes[name];
  if (ComplexPropTypeComponent) {
    return <ComplexPropTypeComponent value={value} name={name} isRequired={required} />;
  }

  if (name === 'custom') {
    return  <SimplePropType name={raw} isRequired={required} />;
  }
  return 'unknown type';
  return JSON.stringify(value);
}

const DefaultValue = ({ value }) => {
  if (!value || value === 'undefined') return null;
  return (
    <>
      <Badge variant="light">Default</Badge>
      <span className="small text-monospace ml-2">{value}</span>
    </>
  );
}

const Prop = ({
  name, type, required, defaultValue = {}, description,
}) => (
  <li className="border-bottom">
    <div className="my-3">
      <div className="mb-2">
        <h6 className="d-inline mb-0 mr-1">
          {`${name} `}
          <RequiredBadge isRequired={required} />
        </h6>
        <PropType {...type} />
      </div>
      <div className="x-small">{description ? <ReactMarkdown>{description.text}</ReactMarkdown> : null}</div>

      <DefaultValue {...defaultValue} />
    </div>
  </li>
)

const PropsTable = ({ props, displayName }) => {
  return (
    <div>
      <h3>{displayName} Props API</h3>
      <ul className="list-unstyled">
        {props.map((metadata) => {
          return <Prop key={metadata.name} {...metadata} />
        })}
      </ul>
    </div>
  );
};

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
  displayName: PropTypes.string,
};

PropsTable.defaultProps = {
  props: [],
  displayName: undefined,
};

export default PropsTable;
