function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgShower = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 17,
  r: 1
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 17,
  r: 1
}), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 17,
  r: 1
}), /*#__PURE__*/React.createElement("path", {
  d: "M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 20,
  r: 1
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 20,
  r: 1
}), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 20,
  r: 1
}));
export default SvgShower;