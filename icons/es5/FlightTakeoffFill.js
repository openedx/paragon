function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFlightTakeoffFill = function SvgFlightTakeoffFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h720v60H120Zm64-208L81-503l43-8 70 62 226-61-171-287 58-17 285 257 216-58q27-8 49 9.5t22 46.5q0 19-11.5 34T838-505L184-328Z",
    fill: "currentColor"
  }));
};
export default SvgFlightTakeoffFill;