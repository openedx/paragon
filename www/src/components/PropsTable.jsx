import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropType from './PropType';
import { Badge, Card } from '~paragon-react'; // eslint-disable-line

const DefaultValue = ({ value }) => {
  if (!value || value === 'undefined') { return null; }
  return (
    <>
      <Badge variant="light">Default</Badge>
      <span className="small text-monospace ml-2">{value}</span>
    </>
  );
};

DefaultValue.propTypes = {
  value: PropTypes.string,
};

DefaultValue.defaultProps = {
  value: undefined,
};

const Prop = ({
  name, type, required, defaultValue, description,
}) => (
  <li className="px-4 border-top border-light-300">
    <div className="my-3">
      <div className="mb-2">
        <h1 className="d-inline mb-0 mr-1">{`${name} `}</h1>
        <PropType {...type} />
        {required && (
          <>
            {' '}
            <Badge variant="light">Required</Badge>
          </>
        )}
      </div>
      <div className="x-small">
        {description ? (
          <MDXRenderer>{description.childMdx.body}</MDXRenderer>
        ) : null}
      </div>

      <DefaultValue {...defaultValue} />
    </div>
  </li>
);

Prop.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.shape({}).isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
  description: PropTypes.shape({
    childMdx: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
  }),
};
Prop.defaultProps = {
  required: false,
  defaultValue: {},
  description: undefined,
};

const PropsTable = ({ props: componentProps, displayName, content }) => (
  <Card className="mb-5" id={`props-api-table-${displayName}`}>
    <Card.Header as="h3" title={`${displayName} Props API`} className="pb-1" />
    {content && <div className="small mb-3">{content}</div>}
    {componentProps.length > 0 ? (
      <ul className="list-unstyled">
        {componentProps.map(metadata => <Prop key={metadata.name} {...metadata} />)}
      </ul>
    ) : <div className="pb-3 pl-4">This component does not receive any props.</div>}
  </Card>
);

PropsTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({})),
  content: PropTypes.string,
  displayName: PropTypes.string,
};

PropsTable.defaultProps = {
  props: [],
  content: undefined,
  displayName: undefined,
};

export default PropsTable;
