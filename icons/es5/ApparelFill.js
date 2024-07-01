function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgApparelFill = function SvgApparelFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "m250-569-96 54L52-691l255-149h88v39q0 38 24 62t62 24q38 0 61.5-24t23.5-62v-39h88l255 149-106 180-96-60v451H250v-449Z",
    fill: "currentColor"
  }));
};
export default SvgApparelFill;