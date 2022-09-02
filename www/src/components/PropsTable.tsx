import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropType from './PropType';
// @ts-ignore
import { Badge, Card } from '~paragon-react'; // eslint-disable-line

const IGNORED_COMPONENT_PROPS = ['intl'];

export type DefaultValueTypes = {
  value: string | undefined,
};

const DefaultValue = ({ value }: DefaultValueTypes) => {
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

export interface IProp {
  name: string,
  type?: {},
  required?: boolean,
  defaultValue: {},
  description: {
    childMdx: {
      body: string,
    },
  },
}

const Prop = ({
  name, type, required, defaultValue, description,
}: IProp) => (
  <li className="px-4 border-top border-light-300">
    <div className="my-3">
      <div className="mb-2">
        <span className="mr-2 font-weight-bold">{`${name} `}</span>
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
  defaultValue: PropTypes.shape({}),
  description: PropTypes.shape({
    childMdx: PropTypes.shape({
      body: PropTypes.string,
    }),
  }),
};
Prop.defaultProps = {
  required: false,
  defaultValue: {},
  description: undefined,
};

export interface IPropsTable {
  props: Array<Function>,
  displayName: string,
  content: string,
}

const PropsTable = ({ props: componentProps, displayName, content }: IPropsTable) => (
  <Card className="mb-5" id={`props-api-table-${displayName}`}>
    <Card.Header as="h3" title={`${displayName} Props API`} className="pb-1" />
    {content && <div className="small mb-3">{content}</div>}
    {componentProps.length > 0 ? (
      <ul className="list-unstyled">
        {componentProps
          .filter(metadata => !IGNORED_COMPONENT_PROPS.includes(metadata.name))
          .map(metadata => <Prop key={metadata.name} {...metadata} />)}
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
