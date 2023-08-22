function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgVideoTranscript = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M22 2H2.01L2 22l4-4h16V2ZM8 14H6v-2h2v2Zm0-3H6V9h2v2Zm0-3H6V6h2v2Zm7 6h-5v-2h5v2Zm3-3h-8V9h8v2Zm0-3h-8V6h8v2Z",
  fill: "currentColor"
}));
export default SvgVideoTranscript;