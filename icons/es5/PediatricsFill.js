function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPediatricsFill = function SvgPediatricsFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M290-700v-60h160v-120h60v120h160v60H290Zm50 620q-24.75 0-42.37-17.63Q280-115.25 280-140v-110h190v-60H280v-110h190v-60H280v-50q0-50 35-85t85-35h160q50 0 85 35t35 85v390q0 24.75-17.62 42.37Q644.75-80 620-80H340Z",
    fill: "currentColor"
  }));
};
export default SvgPediatricsFill;