function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgNetworkPingFill = function SvgNetworkPingFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M160-240v-60h284L84-660l42-42 353 353 234-233q-6-11-9.5-23.5T700-630q0-38 26-64t64-26q38 0 64 26t26 64q0 38-26 64t-64 26q-8 0-14.5-1t-14.5-4L516-300h284v60H160Z",
    fill: "currentColor"
  }));
};
export default SvgNetworkPingFill;