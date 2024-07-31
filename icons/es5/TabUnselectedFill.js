function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTabUnselectedFill = function SvgTabUnselectedFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-160v-60h60v60H80Zm0-149v-85h60v85H80Zm0-173v-85h60v85H80Zm0-173v-145h143v60h-83v85H80Zm148 495v-60h82v60h-82Zm82-580v-60h83v60h-83Zm88 580v-60h82v60h-82Zm82-406v-234h400v234H480Zm88 406v-60h82v60h-82Zm170 0v-60h82v-85h60v145H738Zm82-233v-85h60v85h-60Z",
    fill: "currentColor"
  }));
};
export default SvgTabUnselectedFill;