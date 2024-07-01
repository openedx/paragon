function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgEnable = function SvgEnable(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-140 86.5-248.5T390-870v64q-111 30-180.5 120.5T140-480q0 142 99 241t241 99q142 0 241-99t99-241q0-115-69.5-205.5T570-806v-64q137 33 223.5 141.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-254L280-534l42-42 128 128v-431h60v431l128-128 42 42-200 200Z",
    fill: "currentColor"
  }));
};
export default SvgEnable;