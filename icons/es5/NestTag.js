function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNestTag = function SvgNestTag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M479.87-80Q367-80 288.5-158.67 210-237.33 210-350.27q0-90.73 55-163.45 55-72.73 145-98.28v-238q0-12 8.63-21 8.62-9 21.37-9h80q12 0 21 9t9 21v238q89 25.55 144.5 98.28Q750-441 750-350.27q0 112.94-79.11 191.6Q591.78-80 479.87-80Zm.02-60q87.11 0 148.61-60.87Q690-261.74 690-349.89q0-87.11-61.38-148.61Q567.23-560 480.14-560 392-560 331-498.62q-61 61.39-61 148.48Q270-262 330.87-201q60.87 61 149.02 61Z",
    fill: "currentColor"
  }));
};
export default SvgNestTag;