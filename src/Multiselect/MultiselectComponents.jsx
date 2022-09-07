import React from 'react';
import classNames from 'classnames';
import { components } from 'react-select';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Chip from '../Chip';
import { Close, KeyboardArrowDown } from '../../icons';
import IconButton from '../IconButton';

const ClearIndicator = ({ isDisabled, innerProps }) => (
  <IconButton
    src={Close}
    iconAs={Icon}
    alt="Clear"
    variant="primary"
    className="pgn__multiselect__indicator"
    tabIndex={isDisabled ? -1 : 0}
    onKeyPress={innerProps.onMouseDown}
    {...innerProps}
  />
);

const DropdownIndicator = ({ isDisabled, innerProps }) => (
  <IconButton
    src={KeyboardArrowDown}
    iconAs={Icon}
    alt="Open"
    variant="primary"
    className="pgn__multiselect__indicator"
    tabIndex={isDisabled ? -1 : 0}
    onKeyPress={innerProps.onMouseDown}
    {...innerProps}
  />
);

const Input = (props) => (
  <components.Input className="pgn__multiselect__input" {...props} />
);

const ValueContainer = ({ children, ...props }) => (
  <components.ValueContainer {...props}>
    {React.Children.map(children, (child) => (child && child.type !== components.Placeholder ? child : null))}
  </components.ValueContainer>
);

const Control = ({
  isFocused,
  hasValue,
  children,
  selectProps,
  ...props
}) => (
  <>
    <components.Control
      className={classNames('pgn__multiselect__control', { 'is-focus': isFocused })}
      {...props}
      hasValue={hasValue}
      isFocused={isFocused}
    >
      <components.Placeholder
        className={classNames('pgn__multiselect__floating-label',
          { show: hasValue || selectProps.inputValue || isFocused })}
        {...props}
      >
        {selectProps.placeholder}
      </components.Placeholder>
      {React.Children.map(children, (child) => React.cloneElement(child, { ...child.props, isFocused }))}
    </components.Control>
  </>
);

const Menu = (props) => (
  <components.Menu className="pgn__multiselect__menu" {...props} />
);

const Option = (props) => (
  <components.Option className={classNames({ 'is-focus': props.isFocused })} {...props} />
);

const MultiValueContainer = ({ variant, children }) => {
  const chipLabel = children[0]?.props?.children;
  const { onClick = () => {} } = children[1]?.props?.innerProps || {};
  return (
    <Chip
      variant={variant}
      iconAfter={Close}
      onIconAfterClick={onClick}
    >
      {chipLabel}
    </Chip>
  );
};

const indicatorPropTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired,
  }).isRequired,
};

ClearIndicator.propTypes = indicatorPropTypes;
DropdownIndicator.propTypes = indicatorPropTypes;

ClearIndicator.defaultProps = {
  isDisabled: false,
};

DropdownIndicator.defaultProps = {
  isDisabled: false,
};

ValueContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Control.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  hasValue: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  selectProps: PropTypes.shape({
    placeholder: PropTypes.string,
    inputValue: PropTypes.string,
  }).isRequired,
};

Option.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

MultiValueContainer.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']),
};

MultiValueContainer.defaultProps = {
  variant: 'light',
};

export const multiselectComponents = {
  ClearIndicator,
  DropdownIndicator,
  ValueContainer,
  Control,
  Menu,
  Option,
  MultiValueContainer,
  Input,
};
export default multiselectComponents;
