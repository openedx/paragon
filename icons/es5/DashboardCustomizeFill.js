function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDashboardCustomizeFill = function SvgDashboardCustomizeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-840h330v330H120v-330Zm390 0h330v330H510v-330ZM120-450h330v330H120v-330Zm525 0h60v135h135v60H705v135h-60v-135H510v-60h135v-135Z",
    fill: "currentColor"
  }));
};
export default SvgDashboardCustomizeFill;