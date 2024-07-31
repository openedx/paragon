function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgOilBarrelFill = function SvgOilBarrelFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-120v-60h80v-270h-80v-60h80v-270h-80v-60h720v60h-80v270h80v60h-80v270h80v60H120Zm360.12-213Q526-333 558-364.64q32-31.65 32-76.59 0-35.77-20.62-61.42Q548.75-528.3 480-608q-68.75 78.93-89.37 105.08Q370-476.76 370-440.97q0 44.97 32.12 76.47t78 31.5Z",
    fill: "currentColor"
  }));
};
export default SvgOilBarrelFill;