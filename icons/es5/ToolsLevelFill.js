function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgToolsLevelFill = function SvgToolsLevelFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M140-280q-24.75 0-42.37-17.63Q80-315.25 80-340v-280q0-24.75 17.63-42.38Q115.25-680 140-680h680q24.75 0 42.38 17.62Q880-644.75 880-620v280q0 24.75-17.62 42.37Q844.75-280 820-280H140Zm240-180h70v-160h-70q-32 0-56 24t-24 56q0 32 24 56t56 24Zm130 0h70q32 0 56-24t24-56q0-32-24-56t-56-24h-70v160Z",
    fill: "currentColor"
  }));
};
export default SvgToolsLevelFill;