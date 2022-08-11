// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import onClickOutside from 'react-onclickoutside';
// // eslint-disable-next-line import/no-cycle
// import { FormGroup } from './index';
// import { IconButton } from '../index';
// import Icon from '../Icon';
// import { ExpandLess, ExpandMore } from '../../icons';
//
// const FormAutosuggest = ({
//   value,
//   options,
//   name,
//   readOnly,
//   controlClassName,
//   floatingLabel,
//   placeholder,
//   helpMessage,
//   errorMessage,
//   handleFocusProp,
//   handleBlur,
//   handleChange,
// }) => {
//   const [data, setData] = useState({
//     displayValue: '',
//     // eslint-disable-next-line no-use-before-define
//     icon: expandMoreButton(),
//     errorMessage: '',
//     dropDownItems: [],
//   });
//
//   // const shouldComponentUpdate = (nextProps) => {
//   //   if (value !== nextProps.value && nextProps.value !== null) {
//   //     const opt = options.find((o) => o === nextProps.value);
//   //     if (opt && opt !== data.displayValue) {
//   //       setData({ ...data, displayValue: opt });
//   //     }
//   //     return false;
//   //   }
//   //
//   //   return true;
//   // };
//
//   const getItems = (strToFind = '') => {
//     let newOptions;
//     if (strToFind.length > 0) {
//       newOptions = options.filter((option) => (option.toLowerCase().includes(strToFind.toLowerCase())));
//     }
//
//     return newOptions.map((opt) => {
//       let valueOpt = opt;
//       if (valueOpt.length > 30) {
//         valueOpt = valueOpt.substring(0, 30).concat('...');
//       }
//
//       return (
//         <button
//           type="button"
//           className="dropdown-item data-hj-suppress"
//           value={valueOpt}
//           key={valueOpt}
//           /* eslint-disable-next-line no-use-before-define */
//           onClick={(e) => { handleItemClick(e); }}
//         >
//           {valueOpt}
//         </button>
//       );
//     });
//   };
//
//   const setValue = (callback) => {
//     if (callback === value) {
//       return;
//     }
//
//     if (handleChange) {
//       handleChange(callback);
//     }
//
//     const opt = options.find((o) => o === callback);
//     if (opt && opt !== data.displayValue) {
//       setData({ ...data, displayValue: opt });
//     }
//   };
//
//   const setDisplayValue = (callback) => {
//     const normalized = callback.toLowerCase();
//     const opt = options.find((o) => o.toLowerCase() === normalized);
//     if (opt) {
//       setValue(opt);
//       setData({ ...data, displayValue: opt });
//     } else {
//       setValue(null);
//       setData({ ...data, displayValue: value });
//     }
//   };
//
//   const handleClick = (e) => {
//     const dropDownItems = getItems(e.target.value);
//     if (dropDownItems.length > 1) {
//       setData({
//         ...data,
//         dropDownItems,
//         // eslint-disable-next-line no-use-before-define
//         icon: expandLessButton(),
//         errorMessage: '',
//       });
//     }
//
//     if (dropDownItems.length > 0) {
//       setData({
//         ...data,
//         dropDownItems: '',
//         // eslint-disable-next-line no-use-before-define
//         icon: expandMoreButton(),
//         errorMessage: '',
//       });
//     }
//   };
//
//   const handleOnChange = (e) => {
//     const findstr = e.target.value;
//
//     if (findstr.length) {
//       const filteredItems = getItems(findstr);
//       setData({
//         ...data,
//         dropDownItems: filteredItems,
//         // eslint-disable-next-line no-use-before-define
//         icon: expandLessButton(),
//         errorMessage: '',
//       });
//     } else {
//       setData({
//         ...data,
//         dropDownItems: '',
//         // eslint-disable-next-line no-use-before-define
//         icon: expandMoreButton(),
//         errorMessage,
//       });
//     }
//
//     setDisplayValue(e.target.value);
//   };
//
//   // const handleClickOutside = () => {
//   //   if (data.dropDownItems.length > 0) {
//   //     const msg = data.displayValue === '' ? errorMessage : '';
//   //     setData(() => ({
//   //       // eslint-disable-next-line no-use-before-define
//   //       icon: expandMoreButton(),
//   //       dropDownItems: '',
//   //       errorMessage: msg,
//   //     }));
//   //   }
//   // };
//
//   const handleExpandLess = () => {
//     setData({
//       ...data,
//       dropDownItems: '',
//       // eslint-disable-next-line no-use-before-define
//       icon: expandMoreButton(),
//     });
//   };
//
//   const handleExpandMore = (e) => {
//     const dropDownItems = getItems(e.target.value);
//     setData({
//       // eslint-disable-next-line no-use-before-define
//       dropDownItems, icon: expandLessButton(), errorMessage: '',
//     });
//   };
//
//   const handleFocus = (e) => {
//     if (handleFocusProp) { handleFocusProp(e); }
//   };
//
//   const handleOnBlur = (e) => {
//     if (handleBlur) { handleBlur(e); }
//   };
//
//   function handleItemClick(e) {
//     setValue(e.target.value);
//     setData({
//       ...data,
//       dropDownItems: '',
//       // eslint-disable-next-line no-use-before-define
//       icon: expandMoreButton(),
//     });
//   }
//
//   function expandMoreButton() {
//     return (
//       <IconButton
//         className="expand-more"
//         src={ExpandMore}
//         iconAs={Icon}
//         size="sm"
//         variant="secondary"
//         alt="expand-more"
//         onClick={(e) => { handleExpandMore(e); }}
//       />
//     );
//   }
//
//   const expandLessButton = () => (
//     <IconButton
//       className="expand-less"
//       src={ExpandLess}
//       iconAs={Icon}
//       size="sm"
//       variant="secondary"
//       alt="expand-less"
//       onClick={(e) => { handleExpandLess(e); }}
//     />
//   );
//
//   return (
//     <div className="dropdown-group-wrapper">
//       <FormGroup
//         name={name}
//         type="text"
//         value={data.displayValue}
//         readOnly={readOnly}
//         controlClassName={controlClassName}
//         errorMessage={data.errorMessage}
//         trailingElement={data.icon}
//         floatingLabel={floatingLabel}
//         placeholder={placeholder}
//         helpText={helpMessage}
//         handleChange={handleOnChange}
//         handleClick={handleClick}
//         handleBlur={handleOnBlur}
//         handleFocus={handleFocus}
//       />
//       <div className="dropdown-container">
//         { data.dropDownItems.length > 0 ? data.dropDownItems : null }
//       </div>
//     </div>
//   );
// };
//
// FormAutosuggest.defaultProps = {
//   options: null,
//   floatingLabel: null,
//   handleFocusProp: null,
//   handleChange: null,
//   handleBlur: null,
//   helpMessage: '',
//   placeholder: '',
//   value: null,
//   errorMessage: null,
//   readOnly: false,
//   controlClassName: '',
// };
//
// FormAutosuggest.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string),
//   floatingLabel: PropTypes.string,
//   handleFocusProp: PropTypes.func,
//   handleChange: PropTypes.func,
//   handleBlur: PropTypes.func,
//   helpMessage: PropTypes.string,
//   placeholder: PropTypes.string,
//   value: PropTypes.string,
//   errorMessage: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   readOnly: PropTypes.bool,
//   controlClassName: PropTypes.string,
// };
//
// export default onClickOutside(FormAutosuggest);
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import onClickOutside from 'react-onclickoutside';
import { ExpandLess, ExpandMore } from '../../icons';
import Icon from '../Icon';
import { IconButton } from '../index';
// eslint-disable-next-line import/no-cycle
import { FormCustomGroup } from './index';

class FormAutosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      icon: this.expandMoreButton(),
      errorMessage: '',
      dropDownItems: [],
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value && nextProps.value !== null) {
      const opt = this.props.options.find((o) => o === nextProps.value);
      if (opt && opt !== this.state.displayValue) {
        this.setState({ displayValue: opt });
      }
      return false;
    }

    return true;
  }

  // eslint-disable-next-line react/sort-comp
  getItems(strToFind = '') {
    let { options } = this.props;
    if (strToFind.length > 0) {
      options = options.filter((option) => (option.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return options.map((opt) => {
      let value = opt;
      if (value.length > 30) {
        value = value.substring(0, 30).concat('...');
      }

      return (
        <button
          type="button"
          className="dropdown-item data-hj-suppress"
          value={value}
          key={value}
          onClick={(e) => { this.handleItemClick(e); }}
        >
          {value}
        </button>
      );
    });
  }

  setValue(value) {
    if (this.props.value === value) {
      return;
    }

    if (this.props.handleChange) {
      this.props.handleChange(value);
    }

    const opt = this.props.options.find((o) => o === value);
    if (opt && opt !== this.state.displayValue) {
      this.setState({ displayValue: opt });
    }
  }

  setDisplayValue(value) {
    const normalized = value.toLowerCase();
    const opt = this.props.options.find((o) => o.toLowerCase() === normalized);
    if (opt) {
      this.setValue(opt);
      this.setState({ displayValue: opt });
    } else {
      this.setValue(null);
      this.setState({ displayValue: value });
    }
  }

  handleClick = (e) => {
    const dropDownItems = this.getItems(e.target.value);
    if (dropDownItems.length > 1) {
      this.setState({ dropDownItems, icon: this.expandLessButton(), errorMessage: '' });
    }

    if (this.state.dropDownItems.length > 0) {
      this.setState({ dropDownItems: '', icon: this.expandMoreButton(), errorMessage: '' });
    }
  }

  handleOnChange = (e) => {
    const findstr = e.target.value;

    if (findstr.length) {
      const filteredItems = this.getItems(findstr);
      this.setState({ dropDownItems: filteredItems, icon: this.expandLessButton(), errorMessage: '' });
    } else {
      this.setState({ dropDownItems: '', icon: this.expandMoreButton(), errorMessage: this.props.errorMessage });
    }

    this.setDisplayValue(e.target.value);
  }

  handleClickOutside = () => {
    if (this.state.dropDownItems.length > 0) {
      const msg = this.state.displayValue === '' ? this.props.errorMessage : '';
      this.setState(() => ({
        icon: this.expandMoreButton(),
        dropDownItems: '',
        errorMessage: msg,
      }));
    }
  }

  handleExpandLess() {
    this.setState({ dropDownItems: '', icon: this.expandMoreButton() });
  }

  handleExpandMore(e) {
    const dropDownItems = this.getItems(e.target.value);
    this.setState({
      dropDownItems, icon: this.expandLessButton(), errorMessage: '',
    });
  }

  handleFocus(e) {
    if (this.props.handleFocus) { this.props.handleFocus(e); }
  }

  handleOnBlur(e) {
    if (this.props.handleBlur) { this.props.handleBlur(e); }
  }

  handleItemClick(e) {
    this.setValue(e.target.value);
    this.setState({ dropDownItems: '', icon: this.expandMoreButton() });
  }

  expandMoreButton() {
    return (
      <IconButton
        className="expand-more"
        src={ExpandMore}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-more"
        onClick={(e) => { this.handleExpandMore(e); }}
      />
    );
  }

  expandLessButton() {
    return (
      <IconButton
        className="expand-less"
        src={ExpandLess}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-less"
        onClick={(e) => { this.handleExpandLess(e); }}
      />
    );
  }

  render() {
    return (
      <div className="dropdown-group-wrapper">
        <FormCustomGroup
          name={this.props.name}
          type="text"
          value={this.state.displayValue}
          readOnly={this.props.readOnly}
          controlClassName={this.props.controlClassName}
          errorMessage={this.state.errorMessage}
          trailingElement={this.state.icon}
          floatingLabel={this.props.floatingLabel}
          placeholder={this.props.placeholder}
          helpText={this.props.helpMessage}
          handleChange={this.handleOnChange}
          handleClick={this.handleClick}
          handleBlur={this.handleOnBlur}
          handleFocus={this.handleFocus}
        />
        <div className="dropdown-container">
          { this.state.dropDownItems.length > 0 ? this.state.dropDownItems : null }
        </div>
      </div>
    );
  }
}

FormAutosuggest.defaultProps = {
  options: null,
  floatingLabel: null,
  handleFocus: null,
  handleChange: null,
  handleBlur: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessage: null,
  readOnly: false,
  controlClassName: '',
};

FormAutosuggest.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  floatingLabel: PropTypes.string,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  helpMessage: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  controlClassName: PropTypes.string,
};

export default onClickOutside(FormAutosuggest);
