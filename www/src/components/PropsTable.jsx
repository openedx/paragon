import React, { Component } from 'react'
import PropTypes from 'prop-types'


function ShapeProp({ shape }) {
  return (
    <React.Fragment>
      {"{"}
      {Object.entries(shape).map(([k, v]) => {
        return <span className="d-block ml-3">{k}: {renderType(v)},</span>;
      })}
      {"}"}
    </React.Fragment>
  );
}

const renderType = ({ name, value }) => {
  switch (name) {
    case 'shape':
      return <ShapeProp shape={value} />;
    case 'union':
      return <span>{value.map((v) => renderType(v))}</span>;
    case 'arrayOf':
      return <span>[ {renderType(value)} ]</span>;
    case 'enum':
      return <span><span className="base-type">{name}</span>:
        {typeof value === 'string' ? value : value.map(({ value }) => value).join(', ')}
      </span>;
    default:
      return <span className="base-type">{name}</span>;
  }
};

const PropsTable = props => {
  const { propMetaData = [], ..._props } = props
  
  return (
    <table className="table w-100" {..._props}>
      <thead>
      <tr>
        <th>Prop Name</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default Value</th>
      </tr>
      </thead>
      <tbody>
      {Object.keys(propMetaData).map((key)=> {
        var {
          name, type, required, defaultValue, description,
        } = propMetaData[key];
        return (
          <tr key={key}>
            <td>
              <span className="d-block">{name}</span>
              {description ? <p className="text-muted mb-0">{description.text}</p> : null}
            </td>
            <td>{type ? renderType(type) : ""}</td>
            <td>{required ? 'required' : 'optional'}</td>
            <td>{defaultValue ? defaultValue.value : null}</td>

          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

PropsTable.propTypes = {
  /** this is the `metadata.props` field of what metadata you get from the react-docgen-loader.  */
  propMetaData: PropTypes.object,
}
PropsTable.defaultProps = {
  propMetaData: {},
}

export default PropsTable