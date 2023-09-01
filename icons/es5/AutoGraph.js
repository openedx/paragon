function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const SvgAutoGraph = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M14.06 9.94 12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12l-.94-2.06zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94L4 14zm4.5-5 1.09-2.41L12 5.5 9.59 4.41 8.5 2 7.41 4.41 5 5.5l2.41 1.09L8.5 9zm-4 11.5 6-6.01 4 4L23 8.93l-1.41-1.41-7.09 7.97-4-4L3 19l1.5 1.5z",
  fill: "currentColor"
}));
export default SvgAutoGraph;