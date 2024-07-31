function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgScreenShareFill = function SvgScreenShareFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M40-120v-60h880v60H40Zm40-120v-600h800v600H80Zm253-147h60v-90q0-23.8 16.1-39.9Q425.2-533 449-533h81v70l100-100-100-100v70h-81q-48.33 0-82.17 33.83Q333-525.33 333-477v90Z",
    fill: "currentColor"
  }));
};
export default SvgScreenShareFill;