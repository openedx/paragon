function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgClosedCaptionFill = function SvgClosedCaptionFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M120-160v-640h720v640H120Zm120-201h202v-72h-50v22H290v-138h102v22h50v-72H240v238Zm279 0h202v-72h-50v22H569v-138h102v22h50v-72H519v238Z",
    fill: "currentColor"
  }));
};
export default SvgClosedCaptionFill;