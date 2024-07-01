function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLabs = function SvgLabs(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-141.5-58.5T280-280v-360h-80v-240h560v240h-80v360q0 83-58.5 141.5T480-80ZM260-700h440v-120H260v120Zm219.76 560Q538-140 579-180.83q41-40.84 41-99.17v-20H480v-60h140v-100H480v-60h140v-120H340v360q0 58.33 40.76 99.17 40.77 40.83 99 40.83ZM260-700v-120 120Z",
    fill: "currentColor"
  }));
};
export default SvgLabs;