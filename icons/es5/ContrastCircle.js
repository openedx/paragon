function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgContrastCircle = function SvgContrastCircle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-.19-60Q622-140 721-238.81q99-98.82 99-241.19 0-68-25.5-130T721-720L240-240q47.75 47.87 109.83 73.94Q411.9-140 479.81-140ZM489-319v-50h196v50H489ZM324-500h50v-87h88v-50h-88v-87h-50v87h-87v50h87v87Z",
    fill: "currentColor"
  }));
};
export default SvgContrastCircle;