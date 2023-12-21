function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgWebBlack = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React.createElement("path", {
  stroke: "#00262B",
  strokeWidth: 2,
  d: "M3 3h18v18H3z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M14 3.25h7v17.5h-7z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M14 3.25h2v17.5h-2z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  d: "M0 0h24v24H0z"
}))));
export default SvgWebBlack;