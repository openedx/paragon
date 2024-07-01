function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
var SvgLandslideFill = function SvgLandslideFill(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 -960 960 960",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M80-80v-180l160 51 435-144L880-80H80Zm160-191L80-325v-95l160 51 264-85 129 51-393 132Zm500-129 180-80v-160l-180-40-100 80v120l100 80Zm-500-31L80-485v-155h240l109 146-189 63Zm240-209 200-80v-200l-200-40-120 80v160l120 80Z",
    fill: "currentColor"
  }));
};
export default SvgLandslideFill;