function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTonalityFill = function SvgTonalityFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-30-61v-678q-132 14-221 110.5T140-480q0 132 89 228t221 111Zm60 0q38-4 74-16t70-31H510v47Zm0-107h219q14-17 27.5-34t24.5-37H510v71Zm0-131h294q8-17 10-35t3-36H510v71Zm0-131h307q-1-18-3-36t-10-35H510v71Zm0-131h271q-10-20-24-37l-28-34H510v71Zm0-131h144q-34-19-70-31.5T510-819v47Z",
    fill: "currentColor"
  }));
};
export default SvgTonalityFill;