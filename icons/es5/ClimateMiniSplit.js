function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgClimateMiniSplit = function SvgClimateMiniSplit(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M880-480H80v-400h800v400ZM170-201v-60q50 0 85-34.71T290-380h60q0 75-52.65 127T170-201Zm620 0q-75 0-127-52t-52-127h60q0 50 34.71 84.5T790-261v60Zm-340 41v-220h60v220h-60Zm370-380H140h680Zm-570 0v-170h460v170h-60v-110H310v110h-60Zm-110 0h680v-280H140v280Z",
    fill: "currentColor"
  }));
};
export default SvgClimateMiniSplit;