function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgCloseSmall = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m15.518 16.5.982-.982L12.982 12 16.5 8.482l-.982-.982L12 11.018 8.482 7.5l-.982.982L11.018 12 7.5 15.518l.982.982L12 12.982l3.518 3.518Z",
  fill: "currentColor"
}));
export default SvgCloseSmall;