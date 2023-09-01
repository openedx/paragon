function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgInstitution = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 10v7h3v-7H4Zm6 0v7h3v-7h-3ZM2 22h19v-3H2v3Zm14-12v7h3v-7h-3Zm-4.5-9L2 6v2h19V6l-9.5-5Z",
  fill: "currentColor"
}));
export default SvgInstitution;