function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgMitreFill = function SvgMitreFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M540-370v-220h100v-110H540v-220h260v220H700v110h100v220H540ZM160-40v-220h100v-110H160v-220h100v-110H160v-220h260v220H320v110h100v220H320v110h100v220H160Z",
    fill: "currentColor"
  }));
};
export default SvgMitreFill;