function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgBarChart4Bars = function SvgBarChart4Bars(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-130v-60h800v60H80Zm40-120v-270h100v270H120Zm206 0v-470h100v470H326Zm207 0v-350h100v350H533Zm207 0v-590h100v590H740Z",
    fill: "currentColor"
  }));
};
export default SvgBarChart4Bars;