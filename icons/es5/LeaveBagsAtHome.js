function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
function SvgLeaveBagsAtHome(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M11.83 9h.92v.92l1.75 1.75V9H16v4.17l3 3V6h-4V2H9v4h-.17l3 3zM11 4h2v2h-2V4zm10.19 17.19L2.81 2.81 1.39 4.22 5 7.83V21h2c0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1h1.17l1.61 1.61 1.41-1.42zM8 18v-7.17l1.5 1.5V18H8zm3.25 0v-3.92l1.5 1.5V18h-1.5zm3.25 0v-.67l.67.67h-.67z",
    fill: "currentColor"
  }));
}
export default SvgLeaveBagsAtHome;