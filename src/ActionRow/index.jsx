/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

const horizontalCSS = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-left: .5rem;
  }
`;

const stackedCSS = css`
  display: flex;
  flex-grow: 1;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-bottom: .5rem;
  }
`;

const ActionRow = ({
  as: Component,
  isStacked,
  children,
  ...props
}) => (
  <Component
    css={isStacked ? stackedCSS : horizontalCSS}
    {...props}
  >
    {children}
  </Component>
);

ActionRow.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  isStacked: PropTypes.bool,
};

ActionRow.defaultProps = {
  as: 'div',
  className: undefined,
  children: null,
  isStacked: false,
};

const ActionRowSpacer = () => <span css={css`flex-grow: 1;`} />;

ActionRow.Spacer = ActionRowSpacer;

export { ActionRowSpacer };
export default ActionRow;
