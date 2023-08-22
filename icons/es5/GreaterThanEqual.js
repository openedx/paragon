function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgGreaterThanEqual = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m6.5 15.5 8.25-5.5L6.5 4.5l1-1.5L18 10 7.5 17z",
  fillRule: "evenodd",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 20.998H6v-2h12z",
  fill: "currentColor"
}));
export default SvgGreaterThanEqual;