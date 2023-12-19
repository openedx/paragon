import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Badge, Card, Hyperlink } from '~paragon-react';
import PropType from './PropType';

const IGNORED_COMPONENT_PROPS = ['intl'];

const bootstrapLinks = {
  Button: 'https://react-bootstrap-v4.netlify.app/components/buttons/#button-props',
  Card: 'https://react-bootstrap-v4.netlify.app/components/cards/#card-props',
  CardBody: 'https://react-bootstrap-v4.netlify.app/components/cards/#card-body-props',
  CardDeck: 'https://react-bootstrap-v4.netlify.app/components/cards/#card-deck-props',
  Dropdown: 'https://react-bootstrap-v4.netlify.app/components/dropdowns/#dropdown-props',
  DropdownToggle: 'https://react-bootstrap-v4.netlify.app/components/dropdowns/#dropdown-toggle-props',
  DropdownItem: 'https://react-bootstrap-v4.netlify.app/components/dropdowns/#dropdown-item-props',
  DropdownMenu: 'https://react-bootstrap-v4.netlify.app/components/dropdowns/#dropdown-menu-props',
  DropdownButton: 'https://react-bootstrap-v4.netlify.app/components/dropdowns/#dropdown-button-props',
  FormControl: 'https://react-bootstrap-v4.netlify.app/components/forms/#form-control-props',
  Nav: 'https://react-bootstrap-v4.netlify.app/components/navs/#nav-props',
  WrapperPopover: 'https://react-bootstrap-v4.netlify.app/components/overlays/#popover-props',
  ProgressBar: 'https://react-bootstrap-v4.netlify.app/components/progress/#progress-bar-props',
  Spinner: 'https://react-bootstrap-v4.netlify.app/components/spinners/#spinner-props',
  Tabs: 'https://react-bootstrap-v4.netlify.app/components/tabs/#tabs-api',
  Tab: 'https://react-bootstrap-v4.netlify.app/components/tabs/#tab-props',
  Toast: 'https://react-bootstrap-v4.netlify.app/components/toasts/#toast-props',
};

export type DefaultValueTypes = {
  value: string | undefined,
};

function DefaultValue({ value }: DefaultValueTypes) {
  if (!value || value === 'undefined') { return null; }
  return (
    <>
      <Badge variant="light">Default</Badge>
      <span className="small text-monospace ml-2">{value}</span>
    </>
  );
}

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

function Prop({
  name, type, required, defaultValue, description,
}: IProp) {
  return (
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
}

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

function PropsTable({ props: componentProps, displayName, content }: IPropsTable) {
  const bootstrapLink = bootstrapLinks[displayName];

  return (
    <Card className="mb-5" id={`props-api-table-${displayName}`}>
      <Card.Header as="h3" title={`${displayName} Props API`} className="pb-1" />
      {content && <p className="px-4 small">{content}</p>}
      {bootstrapLink && (
        <Hyperlink className="px-4 small mb-3" destination={bootstrapLink} target="_blank">
          Original component Props API
        </Hyperlink>
      )}
      {componentProps.length > 0 ? (
        <ul className="list-unstyled">
          {componentProps
            .filter(metadata => !IGNORED_COMPONENT_PROPS.includes(metadata.name))
            .map(metadata => <Prop key={metadata.name} {...metadata} />)}
        </ul>
      ) : <div className="pb-3 pl-4">This component does not receive any props.</div>}
    </Card>
  );
}

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
