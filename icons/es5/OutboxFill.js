function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOutboxFill = function SvgOutboxFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-720h720v720H120Zm360-173q41 0 74-23.5t56-59.5h170v-404H180v404h170q23 36 56 59.5t74 23.5Zm-27-129v-189l-79 79-43-43 152-152 152 152-43 43-79-79v189h-60Z",
    fill: "currentColor"
  }));
};
export default SvgOutboxFill;