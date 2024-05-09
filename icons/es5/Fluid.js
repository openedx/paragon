function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgFluid = function SvgFluid(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M760-40H450v-162q-106-11-178-90t-72-188v-440h560v440q0 109-72 188t-178 90v102h250v60ZM560-430h134q3-12 4.5-24.5T700-480v-50H520v-60h180v-100H480v-60h220v-110H260v350h110q32 0 59.5 10t47.5 29q22 21 42.5 31t40.5 10Zm-80 170q61 0 111.5-30t79.5-80H560q-29 0-56-10t-48-29q-23-21-44.5-31T370-450H262q11 81 72.5 135.5T480-260Zm-24-190Z",
    fill: "currentColor"
  }));
};
export default SvgFluid;