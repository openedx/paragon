function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEmergencyHeat = function SvgEmergencyHeat(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M180-400q0 63 28.5 118.5T288-189q-4-12-6-24.5t-2-24.5q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 12-2 24.5t-6 24.5q51-37 79.5-92.5T700-400q0-54-23-105.5T611-600q-21 15-44 23.5t-46 8.5q-61 0-101-41.5T380-714v-20q-46 33-83 73t-63 83.5q-26 43.5-40 89T180-400Zm260 24-71 70q-14 14-21.5 31t-7.5 37q0 41 29 69.5t71 28.5q42 0 71-28.5t29-69.5q0-20-7.5-37T511-306l-71-70Zm0-464v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T582-658l18-22q74 42 117 117t43 163q0 134-93 227T440-80q-134 0-227-93t-93-227q0-128 86-246.5T440-840Zm410 310q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5q13 0 21.5 8.5T880-560q0 12-8.5 21t-21.5 9Zm-30-120v-190h60v190h-60Z",
    fill: "currentColor"
  }));
};
export default SvgEmergencyHeat;