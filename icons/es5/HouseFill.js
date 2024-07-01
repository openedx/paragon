function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgHouseFill = function SvgHouseFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M201-160v-392L76-457l-36-47 440-336 178 136v-96h100v172l162 124-37 47-125-96v393H570v-240H390v240H201Zm194-410h170q0-33-25.5-54.5T480-646q-34 0-59.5 21.34T395-570Z",
    fill: "currentColor"
  }));
};
export default SvgHouseFill;