function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgChalet = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22v-1z",
  fill: "currentColor"
}));
export default SvgChalet;