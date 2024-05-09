function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEmptyDashboard = function SvgEmptyDashboard(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M220-220h240v-180H220v180Zm0-220h240v-300H220v300Zm280 220h240v-300H500v300Zm0-340h240v-180H500v180ZM120-120v-720h720v120h60v60h-60v150h60v60h-60v150h60v60h-60v120H120Zm60-60h600v-600H180v600Zm0-600v600-600Z",
    fill: "currentColor"
  }));
};
export default SvgEmptyDashboard;