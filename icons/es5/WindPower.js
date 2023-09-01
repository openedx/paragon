function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgWindPower = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm12.32-6.91 5.42-9.04L17.32 1 12 5.97v4.74a2.485 2.485 0 0 1 3.32 1.38zM10.5 13c0-.82.4-1.54 1.01-2H1v4l7 2 3.44-2.06A2.48 2.48 0 0 1 10.5 13zm9.67 10L23 20.17l-3.54-6.36-3.98-1c0 .06.02.12.02.19a2.5 2.5 0 0 1-2.5 2.5c-.36 0-.69-.08-1-.21V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.17L20.17 23z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 13,
  cy: 13,
  r: 1.5
}));
export default SvgWindPower;