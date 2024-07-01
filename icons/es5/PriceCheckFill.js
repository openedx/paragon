function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgPriceCheckFill = function SvgPriceCheckFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M270-362v-45H160v-60h220v-105H160v-225h110v-45h60v45h110v60H220v105h220v225H330v45h-60Zm288 240L388-292l42-42 128 128 240-240 42 42-282 282Z",
    fill: "currentColor"
  }));
};
export default SvgPriceCheckFill;