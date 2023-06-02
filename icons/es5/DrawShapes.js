function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgDrawShapes = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13 13v8h8v-8h-8ZM3 21h8v-8H3v8ZM3 3v8h8V3H3Zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65Z",
  fill: "currentColor"
}));
export default SvgDrawShapes;