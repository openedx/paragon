function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgDynamicFeed = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M8 8H6v9h11v-2H8z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z",
  fill: "currentColor"
}));
export default SvgDynamicFeed;