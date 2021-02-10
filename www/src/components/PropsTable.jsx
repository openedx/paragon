import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Badge } from '~paragon-react';

let lastIds = {};

const newId = (prefix = 'id') => {
  if (lastIds[prefix]) {
    lastIds[prefix] += 1
  } else {
    lastIds[prefix] = 1
  }
  return `${prefix}${lastIds[prefix]}`;
};

const renderType = ({ name, value }) => { // eslint-disable-line
  switch (name) {
    case 'shape':
      return <ShapeProp shape={value} />;
    case 'union':
      return <span key={newId(name)}>{value.map(v => renderType(v))}</span>;
    case 'arrayOf':
      return <span key={newId(name)}>[ {renderType(value)} ]</span>;
    case 'enum':
      return (
        <span key={newId(name)}>
          <span className="base-type">{name}</span>:
          {typeof value === 'string' ? value : value.map(item => item.value).join(', ')}
        </span>
      );
    default:
      return <span key={newId(name)} className="base-type">{name}</span>;
  }
};


const ShapeProp = ({ shape }) => (
  <React.Fragment>
    {'{'}
    {Object.entries(shape).map(([k, v]) => (
      <span key={k} className="d-block ml-3">{k}: {renderType(v)},</span>
    ))}
    {'}'}
  </React.Fragment>
);

ShapeProp.propTypes = {
  shape: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ShapeProp.defaultProps = {
  shape: {},
};

// const PropType = ({ children }) => <h6>{children}</h6>;
// const PropTypeValue = ({ value }) => {
//   if (typeof value === 'undefined') {
//     return null;
//   }

//   return (
//     <div className="text-success">
//       {value && JSON.stringify(value)}
//     </div>
//   )
// };
// const PropTypeDefaultValue = ({ value }) => {
//   if (value === 'undefined' || !value) {
//     return null;
//   }
//   return value;
// }

// const PropTypeDisplay = ({ name, value }) => {
//   if (name === 'union') {
//     return (
//       <div>
//         <PropType>One of:</PropType>
//         {value.map(type => <PropTypeDisplay {...type} />)}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <PropType>{name}</PropType>
//       <PropTypeValue value={value}></PropTypeValue>
//     </div>
//   );
// }

const PropTypeEnumValues = ({ values }) => {
  return (
    <div>
      <code>{values.map(valueObj => valueObj.value).join(' | ')}</code>
    </div>
  );
}

const PropTypeShapeValue = ({ shape, required }) => {
  const simplifiedShape = Object.entries(shape).map(([key, value]) => (
    <div className="text-monospace small pl-3">{key}: <PropType {...value} />,</div>
  ));

  return (
    <>
      <code>shape{required && " (required)"} {"\{"}</code>
        {simplifiedShape}
      <code>{"\}"}</code>
    </>
  );
}

const PropTypeArrayOfTypeValue = ({ values, required }) => {
  const simplifiedValues =values.map(value => (
    <div className="pl-3"><PropType {...value} /></div>
  ));

  return (
    <>
      <code>array{required && " (required)"} {"\["}</code>
        {simplifiedValues}
      <code>{"\]"}</code>
    </>
  );
}

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
    <div>{value.map(({ value }) => value).join(' | ')}</div>
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
  <span>
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
  <span>
    <code>{name}</code>
    <RequiredBadge isRequired={isRequired} />
    {" \{"}
    {Object.entries(value).map(([key, propType]) => (
      <div className="text-monospace pl-3">{key}: <PropType {...propType} />,</div>
    ))}
    {"\}"}
  </span>
);

const complexPropTypes = {
  enum: PropTypeEnum,
  union: PropTypeUnion,
  instanceOf: PropTypeInstanceOf,
  arrayOf: PropTypeArrayOf,
  objectOf: PropTypeObjectOf,
  shape: PropTypeShape,
  exact: PropTypeExact,
}

const PROP_TYPE_DISPLAY_NAMES = {
  func: 'function',
  bool: 'boolean',
  string: 'string',
}
const PropType = ({ name, value, required }) => {
  if (simplePropTypes.includes(name)) {
    return <SimplePropType name={name} isRequired={required} />;
  }
  const ComplexPropTypeComponent = complexPropTypes[name];
  if (ComplexPropTypeComponent) {
    return <ComplexPropTypeComponent value={value} name={name} isRequired={required} />;
  }

  return JSON.stringify(value);

  return null;
  console.log(name, value);

  if (name === 'enum') {
    return <PropTypeEnumValues values={value} required={required} />
  }
  if (name === 'shape') {
    return <PropTypeShapeValue shape={value} required={required} />
  }

  if (name === 'arrayOf') {
    return <PropTypeShapeValue shape={value} required={required} />
  }

  if (Array.isArray(value)) {
    return <PropTypeArrayOfTypeValue values={value} />
  }

  return JSON.stringify(value);
  // };

  // return (
  //   <div>
  //     <div>{name}</div>
  //     {renderValue()}
  //   </div>
  // )
}

const DefaultValue = ({ value }) => {
  if (!value || value === 'undefined') return null;
  return (
    <div>
      Default:{" "}
      <span className="small text-monospace">{value}</span>
    </div>
  );
}

const Prop = ({
  name, type, required, defaultValue = {}, description,
}) => (
  <li className="p-3 border-bottom">
    <h6>{name}</h6>
    <div className="small">
      <PropType {...type} />
    </div>
    <DefaultValue {...defaultValue} />
    {description ? <ReactMarkdown className="small mb-0">{description.text}</ReactMarkdown> : null}
  </li>
)

const PropsTable = (props) => {
  const { propMetaData = [], ..._props } = props;
  return (
    <div>
      <h3>Props API</h3>
      <ul className="list-unstyled">
        {Object.entries(propMetaData).map(([key, metadata]) => {
          return <Prop {...metadata} />
        })}
      </ul>
    </div>
  );
  return (
    <table className="table table-fixed w-100" {..._props}>
      <thead>
        <tr>
          <th>Prop Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(propMetaData).map((key) => {
          const {
            name, type, required, defaultValue, description,
          } = propMetaData[key];
          return (
            <tr key={key}>
              <td>
                <span className="d-block">{name}</span>
                {description ? <ReactMarkdown className="text-muted mb-0">{description.text}</ReactMarkdown> : null}
              </td>
              <td>{type ? renderType(type) : ''}</td>
              <td>{required ? 'required' : 'optional'}</td>
              <td>{defaultValue ? defaultValue.value : null}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]) // eslint-disable-line react/forbid-prop-types
};

PropsTable.defaultProps = {
  propMetaData: {},
};

export default PropsTable;
