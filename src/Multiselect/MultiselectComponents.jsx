import React from 'react';
import classNames from 'classnames';
import { components } from 'react-select';
import PropTypes from 'prop-types';
import Icon from '../Icon';
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

const MultiValueContainer = ({ innerProps, children, ...props }) => {
  const newChildren = React.Children.map(children, (child, index) => {
    if (index === 1) {
      // index === 1 corresponds to MultiValueRemove
      // It can be focused and Enter key activates onClick
      return React.cloneElement(child, {
        ...child.props,
        innerProps: {
          ...child.props.innerProps, role: 'button', onKeyPress: child.props.innerProps.onClick, tabIndex: 0,
        },
      });
    }
    return child;
  });
  const newInnerProps = { className: classNames('pgn__multiselect__chip', innerProps.className) };
  return (
    <components.MultiValueContainer innerProps={newInnerProps} {...props}>
      {newChildren}
    </components.MultiValueContainer>
  );
};

const MultiValueLabel = ({ innerProps, ...props }) => {
  const newInnerProps = {
    ...innerProps,
    className: classNames('pgn__multiselect__chip-label', innerProps.className),
  };
  return (
    <components.MultiValueLabel innerProps={newInnerProps} {...props} />
  );
};

const MultiValueRemove = ({ innerProps, ...props }) => {
  const newInnerProps = {
    ...innerProps,
    className: classNames('pgn__multiselect__chip-remove', innerProps.className),
  };
  return (
    <components.MultiValueRemove role="button" innerProps={newInnerProps} {...props}>
      <Icon src={Close} />
    </components.MultiValueRemove>
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
  innerProps: PropTypes.shape({
    className: PropTypes.string,
  }).isRequired,
};

MultiValueLabel.propTypes = {
  innerProps: PropTypes.shape({
    className: PropTypes.string,
  }).isRequired,
};

MultiValueRemove.propTypes = {
  innerProps: PropTypes.shape({
    className: PropTypes.string,
  }).isRequired,
};

const multiselectComponents = {
  ClearIndicator,
  DropdownIndicator,
  ValueContainer,
  Control,
  Menu,
  Option,
  MultiValueContainer,
  MultiValueLabel,
  MultiValueRemove,
  Input,
};
export default multiselectComponents;
