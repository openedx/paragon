function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgTouchpadMouse = function SvgTouchpadMouse(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M659.8-140q66.2 0 113.2-46.86 47-46.85 47-113.14v-70H500v70q0 66.29 46.8 113.14Q593.6-140 659.8-140ZM500-430h130v-147q-54 11-90 51.5T500-430Zm190 0h130q-4-55-40-95.5T690-577v147ZM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64q92 0 156 64t64 156v120q0 92-64 156T660-80ZM140-220v-520 520Zm-60 60v-640h800v60H140v520h240v60H80Z",
    fill: "currentColor"
  }));
};
export default SvgTouchpadMouse;