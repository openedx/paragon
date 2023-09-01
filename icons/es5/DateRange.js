function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgDateRange = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M9 11H7v2h2v-2Zm4 0h-2v2h2v-2Zm4 0h-2v2h2v-2Zm4-7h-3V2h-2v2H8V2H6v2H3v18h18V4Zm-2 16H5V9h14v11Z",
  fill: "currentColor"
}));
export default SvgDateRange;