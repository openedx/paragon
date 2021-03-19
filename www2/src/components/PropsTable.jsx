import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropType from './PropType';
import { Badge, Card } from '~paragon-react';

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
  <li className="px-4 border-top border-light-300">
    <div className="my-3">
      <div className="mb-2">
        <h5 className="d-inline mb-0 mr-1">
          {`${name} `}

        </h5>
        <PropType {...type} />
        {required && <> <Badge variant="light">Required</Badge></>}
      </div>
      <div className="x-small">{description ? <MDXRenderer>{description.childMdx.body}</MDXRenderer> : null}</div>

      <DefaultValue {...defaultValue} />
    </div>
  </li>
)

const PropsTable = ({ props, displayName, content }) => {
  return (
      <Card className="mb-5" id={`props-api-table-${displayName}`}>
        <Card.Body className="pb-1">
          <Card.Title as="h3">{displayName} Props API</Card.Title>
          {content && <div className="small mb-3">{content}</div>}


        </Card.Body>
        <ul className="list-unstyled">
          {props.map((metadata) => {
            return <Prop key={metadata.name} {...metadata} />
          })}
        </ul>
      </Card>
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
