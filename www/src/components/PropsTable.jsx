import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropType from './PropType';
import { Badge } from '~paragon-react';

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
          {required && <> <Badge variant="light">Required</Badge></>}
        </h6>
        <PropType {...type} />
      </div>
      <div className="x-small">{description ? <MDXRenderer>{description.text}</MDXRenderer> : null}</div>

      <DefaultValue {...defaultValue} />
    </div>
  </li>
)

const PropsTable = ({ props, displayName, content }) => {
  return (
    <div>
      <h3>{displayName} Props API</h3>
      {content && <MDXRenderer>{content}</MDXRenderer>}
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
