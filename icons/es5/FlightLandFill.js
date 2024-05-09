function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlightLandFill = function SvgFlightLandFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M767-331 120-511v-209l38 13 32 96 219 61v-330l58 14 115 364 215 61q19 5 31 20.5t12 35.5q0 28-22.5 45t-50.5 9ZM120-120v-60h720v60H120Z",
    fill: "currentColor"
  }));
};
export default SvgFlightLandFill;