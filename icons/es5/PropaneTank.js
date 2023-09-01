function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgPropaneTank = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M4 15v3c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4v-3H4zm16-2v-3c0-1.86-1.28-3.41-3-3.86V2H7v4.14c-1.72.45-3 2-3 3.86v3h16zM9 4h6v2h-2V5h-2v1H9V4z",
  fill: "currentColor"
}));
export default SvgPropaneTank;