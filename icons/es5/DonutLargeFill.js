function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgDonutLargeFill = function SvgDonutLargeFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M452-83Q294-95 187.5-208.5T81-480q0-158 106.5-271.5T452-877v102q-115 11-192.5 95.5T183-480q1 115 77.5 199.5T452-185v102Zm60 0v-102q106-9 179-84t86-181h102q-11 149-114.5 253T512-83Zm265-427q-12-106-85.5-181T512-776v-102q148 11 252 115t115 253H777Z",
    fill: "currentColor"
  }));
};
export default SvgDonutLargeFill;