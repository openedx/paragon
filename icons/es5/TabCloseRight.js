function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTabCloseRight = function SvgTabCloseRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m366-324 114-114 114 114 42-42-114-114 114-114-42-42-114 114-114-114-42 42 114 114-114 114 42 42ZM180-180v-600 600Zm-60 60v-720h720v458q-14-5-29-7.5t-31-3.5v-387H180v600h387q1 16 3.5 31t7.5 29H120Zm654 80-42-42 73-74H624v-60h181l-73-74 42-42 146 146L774-40Z",
    fill: "currentColor"
  }));
};
export default SvgTabCloseRight;