function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgOutput(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M17 17l5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 19H5V5h14v2h2V3H3v18h18v-4h-2z",
    fill: "currentColor"
  }));
}
export default SvgOutput;