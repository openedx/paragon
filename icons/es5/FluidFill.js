function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFluidFill = function SvgFluidFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-40H450v-162q-106-11-178-90t-72-188v-440h560v440q0 109-72 188t-178 90v102h250v60ZM560-430h134q3-12 4.5-24.5T700-480v-50H520v-60h180v-100H480v-60h220v-110H260v350h110q32 0 59.5 10t47.5 29q22 21 42.5 31t40.5 10Z",
    fill: "currentColor"
  }));
};
export default SvgFluidFill;