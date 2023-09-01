function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgIosShare = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M20 8h-5v2h3v11H6V10h3V8H4v15h16V8Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 16h2V5h3l-4-4-4 4h3v11Z",
  fill: "currentColor"
}));
export default SvgIosShare;